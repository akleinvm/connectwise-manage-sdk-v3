import type { ObjectsMap } from '../config.js';
import { toPascalCase, pluralize, getBasePath, extractPathParams } from '../utils.js';

export const generateResources = (objects: ObjectsMap): string => {
  const header = `// Auto-generated resources\n// Do not edit manually\n\n`;
  const imports = [
    `import { BaseResource, NestedResource } from './base.js';`,
    `import type { HttpClient } from '../http.js';`,
    `import type * as Types from '../types/generated.js';`,
  ].join('\n');

  const resources = Object.entries(objects)
    .map(([name, apiPath]) => generateResource(name, apiPath))
    .join('\n');

  return `${header}${imports}\n\n${resources}`;
};

const generateResource = (name: string, apiPath: string): string => {
  const className = `${toPascalCase(pluralize(name))}Resource`;
  const typeName = `Types.${toPascalCase(name)}`;
  const pathParams = extractPathParams(apiPath);
  const basePath = getBasePath(apiPath);

  if (pathParams.length > 1) {
    return generateNestedResource(className, typeName, basePath);
  }

  return generateTopLevelResource(className, typeName, basePath);
};

const generateTopLevelResource = (
  className: string,
  typeName: string,
  basePath: string
): string => `/**
 * Resource for managing ${className.replace('Resource', '').toLowerCase()}
 */
export class ${className} extends BaseResource<${typeName}> {
  constructor(http: HttpClient) {
    super(http, '${basePath}');
  }
}

`;

const generateNestedResource = (
  className: string,
  typeName: string,
  basePath: string
): string => {
  const pathTemplate = basePath
    .split('/')
    .map(part => (part.startsWith('{') && part.endsWith('}') ? '${parentId}' : part))
    .join('/');

  return `/**
 * Resource for managing ${className.replace('Resource', '').toLowerCase()}
 */
export class ${className} extends NestedResource<${typeName}> {
  constructor(http: HttpClient, parentId: number) {
    super(http, \`${pathTemplate}\`, parentId);
  }
}

`;
};
