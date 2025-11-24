import { type PropertyInfo, mapToTsType, extractProperties } from '../schema.js';
import { toPascalCase } from '../utils.js';
import type { SampleData } from '../config.js';

export const generateTypes = (samples: SampleData[]): string => {
  const header = `// Auto-generated types from sample data\n// Do not edit manually\n\n`;

  const interfaces = samples
    .filter(({ sample }) => isValidSample(sample))
    .map(({ name, sample }) => {
      const properties = extractPropertiesFromSample(sample);
      return generateInterface(toPascalCase(name), properties);
    })
    .join('\n');

  return header + interfaces;
};

const isValidSample = (sample: unknown): boolean => {
  if (Array.isArray(sample)) {
    return sample.length > 0 && typeof sample[0] === 'object';
  }
  return sample !== null && typeof sample === 'object';
};

const extractPropertiesFromSample = (sample: unknown): PropertyInfo[] => {
  if (Array.isArray(sample)) {
    return extractProperties(sample[0] as Record<string, unknown>);
  }
  return extractProperties(sample as Record<string, unknown>);
};

const generateInterface = (name: string, properties: PropertyInfo[]): string => {
  const props = properties.map(prop => generateProperty(prop, '  ')).join('');
  return `export interface ${name} {\n${props}}\n`;
};

const generateProperty = (prop: PropertyInfo, indent: string): string => {
  const name = prop.name.includes('-') ? `'${prop.name}'` : prop.name;
  const optional = prop.optional ? '?' : '';

  if (prop.nested && prop.nested.length > 0) {
    return generateNestedProperty(prop, name, optional, indent);
  }

  return `${indent}${name}${optional}: ${mapToTsType(prop.type)};\n`;
};

const generateNestedProperty = (
  prop: PropertyInfo,
  name: string,
  optional: string,
  indent: string
): string => {
  const nestedProps = prop.nested!.map(p => generateProperty(p, indent + '  ')).join('');
  const isArray = prop.type.endsWith('[]');
  const suffix = isArray ? '[]' : '';

  return `${indent}${name}${optional}: {\n${nestedProps}${indent}}${suffix};\n`;
};
