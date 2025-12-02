import type { NamespaceGroup } from '../config.js';
import { toPascalCase, toCamelCase } from '../utils.js';

export const generateClient = (groups: NamespaceGroup[]): string => {
  const header = `// Auto-generated ConnectWise client\n// Do not edit manually\n\n`;
  const imports = [
    `import { HttpClient, type ClientConfig } from './http.js';`,
    `import * as Namespaces from './namespaces/generated.js';`,
  ].join('\n');

  const namespaceNames = groups.map(g => g.namespace);
  const privateFields = generatePrivateFields(namespaceNames);
  const getters = generateGetters(namespaceNames);

  return `${header}${imports}

/**
 * ConnectWise Manage API Client
 *
 * @example
 * \`\`\`typescript
 * // Option 1: Configure at construction
 * const client = new ConnectWiseClient({
 *   baseUrl: 'https://your-instance.com/v4_6_release/apis/3.0',
 *   auth: { username: 'company+publicKey', password: 'privateKey' },
 *   clientId: 'your-client-id'
 * });
 *
 * // Option 2: Deferred configuration
 * const client = new ConnectWiseClient();
 * client.configure({
 *   baseUrl: 'https://your-instance.com',
 *   auth: { username: 'company+publicKey', password: 'privateKey' },
 *   clientId: 'your-client-id'
 * });
 *
 * // List tickets
 * const tickets = await client.service.tickets.list({ conditions: "status/name='Open'" });
 *
 * // Get a company
 * const company = await client.company.companies.get(123);
 * \`\`\`
 */
export class ConnectWiseClient {
  private readonly http: HttpClient;

${privateFields}
  constructor(config?: ClientConfig) {
    this.http = new HttpClient(config);
  }

  /**
   * Configure the client with connection details
   * Required before making any API requests if not provided in constructor
   */
  configure(config: ClientConfig): void {
    this.http.configure(config);
  }

  /**
   * Check if the client is configured
   */
  isConfigured(): boolean {
    return this.http.isConfigured();
  }

${getters}}
`;
};

const generatePrivateFields = (namespaces: string[]): string =>
  namespaces
    .map(ns => {
      const className = `Namespaces.${toPascalCase(ns)}Namespace`;
      return `  private _${toCamelCase(ns)}?: ${className};`;
    })
    .join('\n') + '\n';

const generateGetters = (namespaces: string[]): string =>
  namespaces
    .map(ns => {
      const propName = toCamelCase(ns);
      const className = `Namespaces.${toPascalCase(ns)}Namespace`;

      return `  /**
   * Access ${ns} API operations
   */
  get ${propName}(): ${className} {
    if (!this._${propName}) {
      this._${propName} = new ${className}(this.http);
    }
    return this._${propName};
  }
`;
    })
    .join('\n');
