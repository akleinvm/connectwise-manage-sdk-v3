export const toPascalCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const toCamelCase = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1);

export const pluralize = (str: string): string => {
  if (str.endsWith('s')) return str + 'es';
  if (str.endsWith('y')) return str.slice(0, -1) + 'ies';
  return str + 's';
};

export const getNamespace = (apiPath: string): string => {
  const parts = apiPath.split('/').filter(Boolean);
  return parts.length === 0 ? 'general' : parts[0];
};

export const extractPathParams = (apiPath: string): string[] =>
  (apiPath.match(/\{(\w+)\}/g) || []).map(p => p.slice(1, -1));

export const getBasePath = (apiPath: string): string =>
  apiPath.split('/').slice(0, -1).join('/');
