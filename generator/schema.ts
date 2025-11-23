export interface PropertyInfo {
  name: string;
  type: string;
  optional: boolean;
  nested?: PropertyInfo[];
}

const inferType = (value: unknown): string => {
  if (value === null) return 'null';
  if (Array.isArray(value)) {
    if (value.length === 0) return 'unknown[]';
    return `${inferType(value[0])}[]`;
  }
  if (typeof value === 'object') return 'object';
  if (typeof value === 'number') return 'number';
  if (typeof value === 'boolean') return 'boolean';
  if (typeof value === 'string') return 'string';
  return 'unknown';
};

export const extractProperties = (obj: Record<string, unknown>): PropertyInfo[] =>
  Object.entries(obj)
    .filter(([key]) => key !== '_info')
    .map(([key, value]) => {
      const type = inferType(value);
      const nested = getNestedProperties(value, type);

      return {
        name: key,
        type,
        optional: true,
        ...(nested && { nested }),
      };
    });

const getNestedProperties = (value: unknown, type: string): PropertyInfo[] | undefined => {
  if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
    return extractProperties(value as Record<string, unknown>);
  }

  if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
    return extractProperties(value[0] as Record<string, unknown>);
  }

  return undefined;
};

export const mapToTsType = (type: string): string => {
  if (type === 'object') return 'Record<string, unknown>';
  if (type.endsWith('[]')) {
    return `${mapToTsType(type.slice(0, -2))}[]`;
  }
  return type;
};
