import type { SampleData } from '../config.js';
import { type PropertyInfo, extractProperties } from '../schema.js';
import { toPascalCase } from '../utils.js';

interface ValidationWarning {
  entity: string;
  path: string;
  message: string;
}

export const validateTypes = (samples: SampleData[]): ValidationWarning[] => {
  const warnings: ValidationWarning[] = [];

  for (const { name, sample } of samples) {
    if (!isValidSample(sample)) continue;

    const sampleObj = (sample as unknown[])[0] as Record<string, unknown>;
    const generatedProps = extractProperties(sampleObj);

    const entityWarnings = validateEntity(name, sampleObj, generatedProps);
    warnings.push(...entityWarnings);
  }

  return warnings;
};

const isValidSample = (sample: unknown): boolean =>
  Array.isArray(sample) && sample.length > 0 && typeof sample[0] === 'object';

const validateEntity = (
  entityName: string,
  sampleObj: Record<string, unknown>,
  generatedProps: PropertyInfo[],
  parentPath: string = ''
): ValidationWarning[] => {
  const warnings: ValidationWarning[] = [];
  const generatedMap = new Map(generatedProps.map(p => [p.name, p]));

  for (const [key, value] of Object.entries(sampleObj)) {
    if (key === '_info') continue;

    const path = parentPath ? `${parentPath}.${key}` : key;
    const generatedProp = generatedMap.get(key);

    // Check property existence
    if (!generatedProp) {
      warnings.push({
        entity: toPascalCase(entityName),
        path,
        message: 'missing in generated type',
      });
      continue;
    }

    // Check type match
    const expectedType = inferTypeFromValue(value);
    const generatedType = normalizeType(generatedProp.type);

    if (!typesMatch(expectedType, generatedType)) {
      warnings.push({
        entity: toPascalCase(entityName),
        path,
        message: `expected '${expectedType}', got '${generatedType}'`,
      });
    }

    // Recursively validate nested objects
    if (value !== null && typeof value === 'object' && !Array.isArray(value) && generatedProp.nested) {
      const nestedWarnings = validateEntity(
        entityName,
        value as Record<string, unknown>,
        generatedProp.nested,
        path
      );
      warnings.push(...nestedWarnings);
    }

    // Validate array items
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && generatedProp.nested) {
      const nestedWarnings = validateEntity(
        entityName,
        value[0] as Record<string, unknown>,
        generatedProp.nested,
        `${path}[]`
      );
      warnings.push(...nestedWarnings);
    }
  }

  return warnings;
};

const inferTypeFromValue = (value: unknown): string => {
  if (value === null) return 'null';
  if (Array.isArray(value)) {
    if (value.length === 0) return 'array';
    return `${inferTypeFromValue(value[0])}[]`;
  }
  if (typeof value === 'object') return 'object';
  return typeof value;
};

const normalizeType = (type: string): string => {
  if (type === 'object') return 'object';
  if (type === 'number') return 'number';
  if (type === 'string') return 'string';
  if (type === 'boolean') return 'boolean';
  if (type.endsWith('[]')) return `${normalizeType(type.slice(0, -2))}[]`;
  return type;
};

const typesMatch = (expected: string, generated: string): boolean => {
  // Normalize both types for comparison
  const normalizedExpected = expected === 'object' ? 'object' : expected;
  const normalizedGenerated = generated === 'object' ? 'object' : generated;

  // Direct match
  if (normalizedExpected === normalizedGenerated) return true;

  // Array type match
  if (normalizedExpected.endsWith('[]') && normalizedGenerated.endsWith('[]')) {
    return typesMatch(
      normalizedExpected.slice(0, -2),
      normalizedGenerated.slice(0, -2)
    );
  }

  return false;
};

export const printValidationResults = (warnings: ValidationWarning[]): void => {
  console.log('Validating generated types...');

  if (warnings.length === 0) {
    console.log('  ✓ All types valid');
  } else {
    for (const { entity, path, message } of warnings) {
      console.log(`  ⚠ ${entity}.${path}: ${message}`);
    }
  }

  console.log(`Validation complete: ${warnings.length} warning(s)`);
};
