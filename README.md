# ConnectWise Manage SDK v3

A TypeScript SDK for the ConnectWise Manage API with full type safety and JSDoc documentation.

## Installation

```bash
npm install connectwise-manage-sdk-v3
```

## Quick Start

```typescript
import { ConnectWiseClient } from 'connectwise-manage-sdk-v3';

const client = new ConnectWiseClient({
  baseUrl: 'https://your-instance.com',
  auth: {
    username: 'company+publicKey',
    password: 'privateKey'
  },
  clientId: 'your-client-id'
});

// List open tickets
const tickets = await client.service.tickets.list({
  conditions: "status/name='Open'",
  orderBy: 'id desc',
  pageSize: 50
});

// Get a specific company
const company = await client.company.companies.get(123);

// Create a new ticket
const newTicket = await client.service.tickets.create({
  summary: 'New support ticket',
  board: { id: 1 },
  company: { id: 123 }
});
```

## Deferred Configuration

You can create a client instance without configuration and configure it later. This is useful when credentials are loaded asynchronously or when you need to set up the client before configuration is available.

```typescript
import { ConnectWiseClient, ConfigurationError } from 'connectwise-manage-sdk-v3';

// Create client without configuration
const client = new ConnectWiseClient();

// Configure later (e.g., after loading from environment)
client.configure({
  baseUrl: 'https://your-instance.com',
  auth: {
    username: process.env.CW_USERNAME!,
    password: process.env.CW_PASSWORD!
  },
  clientId: process.env.CW_CLIENT_ID
});

// Check if configured
if (client.isConfigured()) {
  const tickets = await client.service.tickets.list();
}

// If you call an endpoint before configuring, a ConfigurationError is thrown
const unconfigured = new ConnectWiseClient();
await unconfigured.service.tickets.list(); // Throws ConfigurationError
```

## CORS Proxy Support

For browser-based applications, you can route requests through a CORS proxy:

```typescript
const client = new ConnectWiseClient({
  baseUrl: 'https://your-instance.com/v4_6_release/apis/3.0',
  auth: {
    username: 'company+publicKey',
    password: 'privateKey'
  },
  clientId: 'your-client-id',
  corsProxyUrl: 'https://your-proxy.com/api/proxy'
});
```

When `corsProxyUrl` is set, all requests are POSTed to the proxy with:
- `method` - HTTP method (GET, POST, PATCH, DELETE)
- `url` - Target API URL
- `headers` - Authorization and clientId headers
- `body` - Request body (for POST/PATCH)

## Available Namespaces

The SDK organizes resources into namespaces matching the ConnectWise API structure:

- **`client.service`** - Tickets, boards, priorities
- **`client.company`** - Companies, contacts, configurations
- **`client.finance`** - Agreements, additions
- **`client.project`** - Projects, phases, team members
- **`client.time`** - Time entries, work roles, work types
- **`client.expense`** - Expense entries, types, classifications
- **`client.procurement`** - Catalog items, products, purchase orders
- **`client.sales`** - Sales orders
- **`client.schedule`** - Schedule entries
- **`client.system`** - Members, departments, locations, documents, system info
- **`client.marketing`** - Groups

## CRUD Operations

All resources support standard CRUD operations:

### List items with filtering

```typescript
const tickets = await client.service.tickets.list({
  conditions: "status/name='Open' and priority/id > 3",
  childConditions: "configurations/type/name='Server'",
  orderBy: 'lastUpdated desc',
  fields: 'id,summary,status',
  page: 1,
  pageSize: 100
});
```

### Get all items (auto-pagination)

```typescript
// Automatically fetches all pages
const allTickets = await client.service.tickets.listAll({
  conditions: "closedFlag=false"
});
```

### Get single item

```typescript
const ticket = await client.service.tickets.get(12345);
```

### Create item

```typescript
const company = await client.company.companies.create({
  name: 'Acme Corp',
  identifier: 'ACME',
  status: { id: 1 }
});
```

### Update item (PATCH)

```typescript
const updated = await client.service.tickets.update(12345, [
  { op: 'replace', path: '/status/id', value: 5 },
  { op: 'replace', path: '/priority/id', value: 1 }
]);
```

### Delete item

```typescript
await client.company.companies.delete(123);
```

### Count items

```typescript
const count = await client.service.tickets.count({
  conditions: "status/name='Open'"
});
```

### Singleton resources

Some endpoints return a single object without an ID parameter:

```typescript
// Get system info (no ID needed)
const info = await client.system.systemInfo.get();
console.log(info.version);    // "v2025.1.10431"
console.log(info.isCloud);    // false
console.log(info.cloudRegion); // "NA"
```

## Nested Resources

Some resources are nested under parent resources:

```typescript
// Get notes for a specific ticket
const notes = await client.service.ticketNotes(12345).list();

// Create a note on a ticket
const note = await client.service.ticketNotes(12345).create({
  text: 'This is a note',
  internalAnalysisFlag: true
});

// Get team members for a project
const members = await client.project.projectTeamMembers(100).list();
```

## Query Parameters

All query parameters are fully documented with JSDoc:

```typescript
interface QueryParams {
  /**
   * Search results based on the fields returned in a GET.
   *
   * Operators: =, !=, <, <=, >, >=, contains, like, in, not
   * Logic: and, or
   *
   * @example "board/name='Integration' and summary='xyz'"
   */
  conditions?: string;

  /**
   * Allows searching arrays on endpoints
   * @example "communicationItems/value like 'john@email.com'"
   */
  childConditions?: string;

  /**
   * Allows searching custom fields
   * @example "caption='CustomField' AND value != null"
   */
  customFieldConditions?: string;

  /**
   * Sort results
   * @example "contact/name asc"
   */
  orderBy?: string;

  /**
   * Limit returned fields
   * @example "id,name,status/id"
   */
  fields?: string;

  /** Page number (starts at 1) */
  page?: number;

  /** Results per page (max 1000, default 25) */
  pageSize?: number;
}
```

## Error Handling

The SDK provides typed errors for different scenarios:

```typescript
import {
  ConnectWiseError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
  ConfigurationError
} from 'connectwise-manage-sdk-v3';

try {
  const ticket = await client.service.tickets.get(99999);
} catch (error) {
  if (error instanceof ConfigurationError) {
    console.log('Client not configured');
  } else if (error instanceof NotFoundError) {
    console.log('Ticket not found');
  } else if (error instanceof AuthenticationError) {
    console.log('Invalid credentials');
  } else if (error instanceof ConnectWiseError) {
    console.log(`API error: ${error.status} - ${error.message}`);
  }
}
```

## TypeScript Types

All entities are fully typed based on the ConnectWise API:

```typescript
import type { Ticket, Company, Contact, TimeEntry } from 'connectwise-manage-sdk-v3';

const processTicket = (ticket: Ticket) => {
  console.log(ticket.id, ticket.summary, ticket.status?.name);
};
```

## Code Generation

The SDK is generated from sample API responses. All generation inputs are in the `generator/` folder.

### Generator Structure

```
generator/
├── index.ts           # Pipeline orchestrator
├── config.ts          # Paths and type definitions
├── utils.ts           # String utilities
├── schema.ts          # Type inference from samples
├── objects.json       # API endpoint mappings
├── generators/
│   ├── types.ts       # Generate TypeScript interfaces
│   ├── resources.ts   # Generate resource classes
│   ├── namespaces.ts  # Generate namespace modules
│   └── client.ts      # Generate main client
├── validators/
│   └── types.ts       # Validate generated types
└── samples/           # Sample JSON responses (gitignored)
    ├── ticket.json
    ├── company.json
    └── ...
```

### Regenerating the SDK

After modifying samples or adding new endpoints:

```bash
npm run generate
npm run build
```

### Adding New Endpoints

1. **Get a sample response** from the ConnectWise API endpoint you want to add:
   ```bash
   curl -u "company+publicKey:privateKey" \
     "https://your-instance.com/v4_6_release/apis/3.0/service/tickets" \
     > generator/samples/ticket.json
   ```

2. **Add the endpoint mapping** to `generator/objects.json`:
   ```json
   {
     "ticket": {
       "path": "/service/tickets/{ticketId}",
       "operations": ["list", "get", "create", "update", "delete", "count"]
     },
     "newEntity": {
       "path": "/path/to/entities/{entityId}",
       "operations": ["list", "get", "create", "update", "delete", "count"]
     }
   }
   ```

   **Available operations:**
   - `list` - List items with pagination (`list()`, `listAll()`)
   - `get` - Get single item by ID (`get(id)`)
   - `getOne` - Get singleton resource without ID (`get()`)
   - `create` - Create new item (`create(data)`)
   - `update` - Update via PATCH operations (`update(id, operations)`)
   - `delete` - Delete by ID (`delete(id)`)
   - `count` - Count matching items (`count(params)`)

3. **Run the generator**:
   ```bash
   npm run generate
   npm run build
   ```

### Sample Format

For most endpoints, samples should be JSON arrays containing at least one object:

```json
[
  {
    "id": 123,
    "name": "Example",
    "status": {
      "id": 1,
      "name": "Active"
    }
  }
]
```

For singleton endpoints (using `getOne` operation), samples should be a single object:

```json
{
  "version": "v2025.1.10431",
  "isCloud": false,
  "serverTimeZone": "Pacific Standard Time"
}
```

The generator will:
- Infer TypeScript types from the sample data
- Create resource classes with CRUD operations
- Group resources into namespaces based on the API path
- Validate generated types against samples

### Validation

After generating code, the generator automatically validates that all generated types match the sample data. Validation warnings are displayed but don't prevent output:

```
Validating generated types...
  ⚠ Contact.types: expected 'array', got 'unknown[]'
  ⚠ Member.memberPersonas: expected 'array', got 'unknown[]'
Validation complete: 2 warning(s)
Writing output files...
```

Validation checks:
- **Property existence** - All sample properties exist in generated types
- **Type matching** - Inferred types match actual sample values
- **Nested objects** - Recursively validates nested structures
- **Arrays** - Validates array item types

> **Note:** Empty arrays in samples are typed as `unknown[]` since there's no data to infer the item type.

## License

MIT
