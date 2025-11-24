import type { ObjectsMap, Operation } from '../config.js';
import { toPascalCase, pluralize, getBasePath, extractPathParams } from '../utils.js';

export const generateResources = (objects: ObjectsMap): string => {
  const header = `// Auto-generated resources\n// Do not edit manually\n\n`;
  const imports = [
    `import type { HttpClient } from '../http.js';`,
    `import type { QueryParams, PatchOperation, CountResponse } from '../query/types.js';`,
    `import type * as Types from '../types/generated.js';`,
    `import { listAllHelper } from './helpers.js';`,
  ].join('\n');

  const resources = Object.entries(objects)
    .map(([name, config]) => generateResource(name, config.path, config.operations))
    .join('\n');

  return `${header}${imports}\n\n${resources}`;
};

const generateResource = (name: string, apiPath: string, operations: Operation[]): string => {
  const className = `${toPascalCase(pluralize(name))}Resource`;
  const typeName = `Types.${toPascalCase(name)}`;
  const pathParams = extractPathParams(apiPath);
  const basePath = getBasePath(apiPath);

  if (pathParams.length > 1) {
    return generateNestedResource(className, typeName, basePath, operations);
  }

  return generateTopLevelResource(className, typeName, basePath, operations);
};

const generateTopLevelResource = (
  className: string,
  typeName: string,
  basePath: string,
  operations: Operation[]
): string => {
  const methods = generateMethods(typeName, basePath, operations, false);

  return `/**
 * Resource for managing ${className.replace('Resource', '').toLowerCase()}
 */
export class ${className} {
  private readonly http: HttpClient;
  private readonly basePath = '${basePath}';

  constructor(http: HttpClient) {
    this.http = http;
  }
${methods}}

`;
};

const generateNestedResource = (
  className: string,
  typeName: string,
  basePath: string,
  operations: Operation[]
): string => {
  const pathTemplate = basePath
    .split('/')
    .map(part => (part.startsWith('{') && part.endsWith('}') ? '${parentId}' : part))
    .join('/');

  const methods = generateMethods(typeName, `\`${pathTemplate}\``, operations, true);

  return `/**
 * Resource for managing ${className.replace('Resource', '').toLowerCase()}
 */
export class ${className} {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = \`${pathTemplate}\`;
  }
${methods}}

`;
};

const generateMethods = (
  typeName: string,
  basePath: string,
  operations: Operation[],
  isNested: boolean
): string => {
  const methods: string[] = [];

  if (operations.includes('list')) {
    methods.push(generateListMethod(typeName));
    methods.push(generateListAllMethod(typeName));
  }

  if (operations.includes('get')) {
    methods.push(generateGetMethod(typeName));
  }

  if (operations.includes('create')) {
    methods.push(generateCreateMethod(typeName));
  }

  if (operations.includes('update')) {
    methods.push(generateUpdateMethod(typeName));
  }

  if (operations.includes('delete')) {
    methods.push(generateDeleteMethod());
  }

  if (operations.includes('count')) {
    methods.push(generateCountMethod());
  }

  return methods.join('\n');
};

const generateListMethod = (typeName: string): string => `
  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: \`board/name='Integration'\`, \`summary='xyz'\`, \`board/id in (3,2,4)\`, \`lastUpdated > [2016-08-20T18:04:26Z]\`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: \`communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'\`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: \`caption='TomNumber' AND value != null\`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: \`contact/name asc\`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: \`id,name,status/id\`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<${typeName}[]> {
    return this.http.get<${typeName}[]>(this.basePath, params);
  }
`;

const generateListAllMethod = (typeName: string): string => `
  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: \`board/name='Integration'\`, \`summary='xyz'\`, \`board/id in (3,2,4)\`, \`lastUpdated > [2016-08-20T18:04:26Z]\`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: \`communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'\`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: \`caption='TomNumber' AND value != null\`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: \`contact/name asc\`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: \`id,name,status/id\`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<${typeName}[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }
`;

const generateGetMethod = (typeName: string): string => `
  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: \`id,name,status/id\`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<${typeName}> {
    return this.http.get<${typeName}>(\`\${this.basePath}/\${id}\`, params);
  }
`;

const generateCreateMethod = (typeName: string): string => `
  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<${typeName}>): Promise<${typeName}> {
    return this.http.post<${typeName}>(this.basePath, data);
  }
`;

const generateUpdateMethod = (typeName: string): string => `
  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<${typeName}> {
    return this.http.patch<${typeName}>(\`\${this.basePath}/\${id}\`, operations);
  }
`;

const generateDeleteMethod = (): string => `
  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(\`\${this.basePath}/\${id}\`);
  }
`;

const generateCountMethod = (): string => `
  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: \`board/name='Integration'\`, \`summary='xyz'\`, \`board/id in (3,2,4)\`, \`lastUpdated > [2016-08-20T18:04:26Z]\`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: \`communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'\`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: \`caption='TomNumber' AND value != null\`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(\`\${this.basePath}/count\`, params);
    return result.count;
  }
`;
