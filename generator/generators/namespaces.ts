import type { NamespaceGroup } from '../config.js';
import { toPascalCase, toCamelCase, pluralize, extractPathParams } from '../utils.js';

export const generateNamespaces = (groups: NamespaceGroup[]): string => {
  const header = `// Auto-generated namespace modules\n// Do not edit manually\n\n`;
  const imports = [
    `import type { HttpClient } from '../http.js';`,
    `import * as Resources from '../resources/generated.js';`,
  ].join('\n');

  const namespaces = groups.map(generateNamespace).join('\n');

  return `${header}${imports}\n\n${namespaces}`;
};

const generateNamespace = ({ namespace, items }: NamespaceGroup): string => {
  const className = `${toPascalCase(namespace)}Namespace`;

  const members = items.map(item => generateResourceMember(item)).join('\n');

  return `/**
 * ${toPascalCase(namespace)} API namespace
 */
export class ${className} {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

${members}}

`;
};

const generateResourceMember = (item: { name: string; apiPath: string }): string => {
  const pathParams = extractPathParams(item.apiPath);
  const resourceName = pluralize(item.name);
  const resourceClass = `Resources.${toPascalCase(resourceName)}Resource`;
  const propName = toCamelCase(resourceName);

  if (pathParams.length > 1) {
    return generateNestedResourceMethod(propName, resourceClass, resourceName);
  }

  return generateTopLevelResourceGetter(propName, resourceClass, resourceName);
};

const generateTopLevelResourceGetter = (
  propName: string,
  resourceClass: string,
  resourceName: string
): string => `  private _${propName}?: ${resourceClass};

  /**
   * Access ${resourceName} operations
   */
  get ${propName}(): ${resourceClass} {
    if (!this._${propName}) {
      this._${propName} = new ${resourceClass}(this.http);
    }
    return this._${propName};
  }

`;

const generateNestedResourceMethod = (
  propName: string,
  resourceClass: string,
  resourceName: string
): string => `  /**
   * Get ${resourceName} for a specific parent
   */
  ${propName}(parentId: number): ${resourceClass} {
    return new ${resourceClass}(this.http, parentId);
  }

`;
