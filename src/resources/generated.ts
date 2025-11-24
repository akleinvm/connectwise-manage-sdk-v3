// Auto-generated resources
// Do not edit manually

import type { HttpClient } from '../http.js';
import type { QueryParams, PatchOperation, CountResponse } from '../query/types.js';
import type * as Types from '../types/generated.js';
import { listAllHelper } from './helpers.js';

/**
 * Resource for managing agreements
 */
export class AgreementsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/finance/agreements';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Agreement[]> {
    return this.http.get<Types.Agreement[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Agreement[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Agreement> {
    return this.http.get<Types.Agreement>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Agreement>): Promise<Types.Agreement> {
    return this.http.post<Types.Agreement>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Agreement> {
    return this.http.patch<Types.Agreement>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing additions
 */
export class AdditionsResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/finance/agreements/${parentId}/additions`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Addition[]> {
    return this.http.get<Types.Addition[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Addition[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Addition> {
    return this.http.get<Types.Addition>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Addition>): Promise<Types.Addition> {
    return this.http.post<Types.Addition>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Addition> {
    return this.http.patch<Types.Addition>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing catalogitems
 */
export class CatalogItemsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/procurement/catalog';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.CatalogItem[]> {
    return this.http.get<Types.CatalogItem[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.CatalogItem[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.CatalogItem> {
    return this.http.get<Types.CatalogItem>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.CatalogItem>): Promise<Types.CatalogItem> {
    return this.http.post<Types.CatalogItem>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.CatalogItem> {
    return this.http.patch<Types.CatalogItem>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing products
 */
export class ProductsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/procurement/products';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Product[]> {
    return this.http.get<Types.Product[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Product[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Product> {
    return this.http.get<Types.Product>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Product>): Promise<Types.Product> {
    return this.http.post<Types.Product>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Product> {
    return this.http.patch<Types.Product>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing boards
 */
export class BoardsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/service/boards';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Board[]> {
    return this.http.get<Types.Board[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Board[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Board> {
    return this.http.get<Types.Board>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Board>): Promise<Types.Board> {
    return this.http.post<Types.Board>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Board> {
    return this.http.patch<Types.Board>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing boardstatuses
 */
export class BoardStatusesResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/service/boards/${parentId}/statuses`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.BoardStatus[]> {
    return this.http.get<Types.BoardStatus[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.BoardStatus[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.BoardStatus> {
    return this.http.get<Types.BoardStatus>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.BoardStatus>): Promise<Types.BoardStatus> {
    return this.http.post<Types.BoardStatus>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.BoardStatus> {
    return this.http.patch<Types.BoardStatus>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing boardtypes
 */
export class BoardTypesResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/service/boards/${parentId}/types`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.BoardType[]> {
    return this.http.get<Types.BoardType[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.BoardType[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.BoardType> {
    return this.http.get<Types.BoardType>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.BoardType>): Promise<Types.BoardType> {
    return this.http.post<Types.BoardType>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.BoardType> {
    return this.http.patch<Types.BoardType>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing boardsubtypes
 */
export class BoardSubtypesResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/service/boards/${parentId}/subtypes`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.BoardSubtype[]> {
    return this.http.get<Types.BoardSubtype[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.BoardSubtype[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.BoardSubtype> {
    return this.http.get<Types.BoardSubtype>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.BoardSubtype>): Promise<Types.BoardSubtype> {
    return this.http.post<Types.BoardSubtype>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.BoardSubtype> {
    return this.http.patch<Types.BoardSubtype>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing companies
 */
export class CompaniesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/company/companies';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Company[]> {
    return this.http.get<Types.Company[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Company[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Company> {
    return this.http.get<Types.Company>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Company>): Promise<Types.Company> {
    return this.http.post<Types.Company>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Company> {
    return this.http.patch<Types.Company>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing companygroups
 */
export class CompanyGroupsResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/company/companies/${parentId}/groups`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.CompanyGroup[]> {
    return this.http.get<Types.CompanyGroup[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.CompanyGroup[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.CompanyGroup> {
    return this.http.get<Types.CompanyGroup>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.CompanyGroup>): Promise<Types.CompanyGroup> {
    return this.http.post<Types.CompanyGroup>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.CompanyGroup> {
    return this.http.patch<Types.CompanyGroup>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing companysites
 */
export class CompanySitesResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/company/companies/${parentId}/sites`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.CompanySite[]> {
    return this.http.get<Types.CompanySite[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.CompanySite[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.CompanySite> {
    return this.http.get<Types.CompanySite>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.CompanySite>): Promise<Types.CompanySite> {
    return this.http.post<Types.CompanySite>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.CompanySite> {
    return this.http.patch<Types.CompanySite>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing companystatuses
 */
export class CompanyStatusesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/company/companies/statuses';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.CompanyStatus[]> {
    return this.http.get<Types.CompanyStatus[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.CompanyStatus[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.CompanyStatus> {
    return this.http.get<Types.CompanyStatus>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.CompanyStatus>): Promise<Types.CompanyStatus> {
    return this.http.post<Types.CompanyStatus>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.CompanyStatus> {
    return this.http.patch<Types.CompanyStatus>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing companytypes
 */
export class CompanyTypesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/company/companies/types';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.CompanyType[]> {
    return this.http.get<Types.CompanyType[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.CompanyType[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.CompanyType> {
    return this.http.get<Types.CompanyType>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.CompanyType>): Promise<Types.CompanyType> {
    return this.http.post<Types.CompanyType>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.CompanyType> {
    return this.http.patch<Types.CompanyType>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing configurations
 */
export class ConfigurationsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/company/configurations';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Configuration[]> {
    return this.http.get<Types.Configuration[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Configuration[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Configuration> {
    return this.http.get<Types.Configuration>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Configuration>): Promise<Types.Configuration> {
    return this.http.post<Types.Configuration>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Configuration> {
    return this.http.patch<Types.Configuration>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing contacts
 */
export class ContactsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/company/contacts';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Contact[]> {
    return this.http.get<Types.Contact[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Contact[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Contact> {
    return this.http.get<Types.Contact>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Contact>): Promise<Types.Contact> {
    return this.http.post<Types.Contact>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Contact> {
    return this.http.patch<Types.Contact>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing contactgroups
 */
export class ContactGroupsResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/company/contacts/${parentId}/groups`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.ContactGroup[]> {
    return this.http.get<Types.ContactGroup[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.ContactGroup[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.ContactGroup> {
    return this.http.get<Types.ContactGroup>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.ContactGroup>): Promise<Types.ContactGroup> {
    return this.http.post<Types.ContactGroup>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.ContactGroup> {
    return this.http.patch<Types.ContactGroup>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing contacttypes
 */
export class ContactTypesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/company/contacts/types';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.ContactType[]> {
    return this.http.get<Types.ContactType[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.ContactType[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.ContactType> {
    return this.http.get<Types.ContactType>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.ContactType>): Promise<Types.ContactType> {
    return this.http.post<Types.ContactType>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.ContactType> {
    return this.http.patch<Types.ContactType>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing departments
 */
export class DepartmentsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/system/departments';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Department[]> {
    return this.http.get<Types.Department[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Department[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Department> {
    return this.http.get<Types.Department>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Department>): Promise<Types.Department> {
    return this.http.post<Types.Department>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Department> {
    return this.http.patch<Types.Department>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing groups
 */
export class GroupsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/marketing/groups';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Group[]> {
    return this.http.get<Types.Group[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Group[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Group> {
    return this.http.get<Types.Group>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Group>): Promise<Types.Group> {
    return this.http.post<Types.Group>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Group> {
    return this.http.patch<Types.Group>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing locations
 */
export class LocationsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/system/locations';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Location[]> {
    return this.http.get<Types.Location[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Location[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Location> {
    return this.http.get<Types.Location>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Location>): Promise<Types.Location> {
    return this.http.post<Types.Location>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Location> {
    return this.http.patch<Types.Location>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing members
 */
export class MembersResource {
  private readonly http: HttpClient;
  private readonly basePath = '/system/members';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Member[]> {
    return this.http.get<Types.Member[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Member[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Member> {
    return this.http.get<Types.Member>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Member>): Promise<Types.Member> {
    return this.http.post<Types.Member>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Member> {
    return this.http.patch<Types.Member>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing projects
 */
export class ProjectsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/project/projects';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Project[]> {
    return this.http.get<Types.Project[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Project[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Project> {
    return this.http.get<Types.Project>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Project>): Promise<Types.Project> {
    return this.http.post<Types.Project>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Project> {
    return this.http.patch<Types.Project>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing projectteammembers
 */
export class ProjectTeamMembersResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/project/projects/${parentId}/teamMembers`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.ProjectTeamMember[]> {
    return this.http.get<Types.ProjectTeamMember[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.ProjectTeamMember[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.ProjectTeamMember> {
    return this.http.get<Types.ProjectTeamMember>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.ProjectTeamMember>): Promise<Types.ProjectTeamMember> {
    return this.http.post<Types.ProjectTeamMember>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.ProjectTeamMember> {
    return this.http.patch<Types.ProjectTeamMember>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing projectphases
 */
export class ProjectPhasesResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/project/projects/${parentId}/phases`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.ProjectPhase[]> {
    return this.http.get<Types.ProjectPhase[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.ProjectPhase[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.ProjectPhase> {
    return this.http.get<Types.ProjectPhase>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.ProjectPhase>): Promise<Types.ProjectPhase> {
    return this.http.post<Types.ProjectPhase>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.ProjectPhase> {
    return this.http.patch<Types.ProjectPhase>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing projecttickets
 */
export class ProjectTicketsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/project/tickets';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.ProjectTicket[]> {
    return this.http.get<Types.ProjectTicket[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.ProjectTicket[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.ProjectTicket> {
    return this.http.get<Types.ProjectTicket>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.ProjectTicket>): Promise<Types.ProjectTicket> {
    return this.http.post<Types.ProjectTicket>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.ProjectTicket> {
    return this.http.patch<Types.ProjectTicket>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing projectticketnotes
 */
export class ProjectTicketNotesResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/project/tickets/${parentId}/notes`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.ProjectTicketNote[]> {
    return this.http.get<Types.ProjectTicketNote[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.ProjectTicketNote[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.ProjectTicketNote> {
    return this.http.get<Types.ProjectTicketNote>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.ProjectTicketNote>): Promise<Types.ProjectTicketNote> {
    return this.http.post<Types.ProjectTicketNote>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.ProjectTicketNote> {
    return this.http.patch<Types.ProjectTicketNote>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing schedules
 */
export class SchedulesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/schedule/entries';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Schedule[]> {
    return this.http.get<Types.Schedule[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Schedule[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Schedule> {
    return this.http.get<Types.Schedule>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Schedule>): Promise<Types.Schedule> {
    return this.http.post<Types.Schedule>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Schedule> {
    return this.http.patch<Types.Schedule>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing tickets
 */
export class TicketsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/service/tickets';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Ticket[]> {
    return this.http.get<Types.Ticket[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Ticket[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Ticket> {
    return this.http.get<Types.Ticket>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Ticket>): Promise<Types.Ticket> {
    return this.http.post<Types.Ticket>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Ticket> {
    return this.http.patch<Types.Ticket>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing ticketnotes
 */
export class TicketNotesResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/service/tickets/${parentId}/notes`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.TicketNote[]> {
    return this.http.get<Types.TicketNote[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.TicketNote[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.TicketNote> {
    return this.http.get<Types.TicketNote>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.TicketNote>): Promise<Types.TicketNote> {
    return this.http.post<Types.TicketNote>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.TicketNote> {
    return this.http.patch<Types.TicketNote>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing tickettasks
 */
export class TicketTasksResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/project/tickets/${parentId}/tasks`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.TicketTask[]> {
    return this.http.get<Types.TicketTask[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.TicketTask[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.TicketTask> {
    return this.http.get<Types.TicketTask>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.TicketTask>): Promise<Types.TicketTask> {
    return this.http.post<Types.TicketTask>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.TicketTask> {
    return this.http.patch<Types.TicketTask>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing timesheets
 */
export class TimesheetsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/time/sheets';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Timesheet[]> {
    return this.http.get<Types.Timesheet[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Timesheet[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Timesheet> {
    return this.http.get<Types.Timesheet>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Timesheet>): Promise<Types.Timesheet> {
    return this.http.post<Types.Timesheet>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Timesheet> {
    return this.http.patch<Types.Timesheet>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing timeentries
 */
export class TimeEntriesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/time/entries';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.TimeEntry[]> {
    return this.http.get<Types.TimeEntry[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.TimeEntry[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.TimeEntry> {
    return this.http.get<Types.TimeEntry>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.TimeEntry>): Promise<Types.TimeEntry> {
    return this.http.post<Types.TimeEntry>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.TimeEntry> {
    return this.http.patch<Types.TimeEntry>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing expenseentries
 */
export class ExpenseEntriesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/expense/entries';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.ExpenseEntry[]> {
    return this.http.get<Types.ExpenseEntry[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.ExpenseEntry[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.ExpenseEntry> {
    return this.http.get<Types.ExpenseEntry>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.ExpenseEntry>): Promise<Types.ExpenseEntry> {
    return this.http.post<Types.ExpenseEntry>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.ExpenseEntry> {
    return this.http.patch<Types.ExpenseEntry>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing expensetypes
 */
export class ExpenseTypesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/expense/types';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.ExpenseType[]> {
    return this.http.get<Types.ExpenseType[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.ExpenseType[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.ExpenseType> {
    return this.http.get<Types.ExpenseType>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.ExpenseType>): Promise<Types.ExpenseType> {
    return this.http.post<Types.ExpenseType>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.ExpenseType> {
    return this.http.patch<Types.ExpenseType>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing classifications
 */
export class ClassificationsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/expense/classifications';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Classification[]> {
    return this.http.get<Types.Classification[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Classification[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Classification> {
    return this.http.get<Types.Classification>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Classification>): Promise<Types.Classification> {
    return this.http.post<Types.Classification>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Classification> {
    return this.http.patch<Types.Classification>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing paymenttypes
 */
export class PaymentTypesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/expense/paymentTypes';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.PaymentType[]> {
    return this.http.get<Types.PaymentType[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.PaymentType[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.PaymentType> {
    return this.http.get<Types.PaymentType>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.PaymentType>): Promise<Types.PaymentType> {
    return this.http.post<Types.PaymentType>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.PaymentType> {
    return this.http.patch<Types.PaymentType>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing workroles
 */
export class WorkRolesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/time/workRoles';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.WorkRole[]> {
    return this.http.get<Types.WorkRole[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.WorkRole[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.WorkRole> {
    return this.http.get<Types.WorkRole>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.WorkRole>): Promise<Types.WorkRole> {
    return this.http.post<Types.WorkRole>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.WorkRole> {
    return this.http.patch<Types.WorkRole>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing worktypes
 */
export class WorkTypesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/time/workTypes';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.WorkType[]> {
    return this.http.get<Types.WorkType[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.WorkType[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.WorkType> {
    return this.http.get<Types.WorkType>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.WorkType>): Promise<Types.WorkType> {
    return this.http.post<Types.WorkType>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.WorkType> {
    return this.http.patch<Types.WorkType>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing priorities
 */
export class PrioritiesResource {
  private readonly http: HttpClient;
  private readonly basePath = '/service/priorities';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Priority[]> {
    return this.http.get<Types.Priority[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Priority[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Priority> {
    return this.http.get<Types.Priority>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Priority>): Promise<Types.Priority> {
    return this.http.post<Types.Priority>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.Priority> {
    return this.http.patch<Types.Priority>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing documents
 */
export class DocumentsResource {
  private readonly http: HttpClient;
  private readonly basePath = '/system/documents';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.Document[]> {
    return this.http.get<Types.Document[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.Document[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.Document> {
    return this.http.get<Types.Document>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.Document>): Promise<Types.Document> {
    return this.http.post<Types.Document>(this.basePath, data);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }
}


/**
 * Resource for managing salesorders
 */
export class SalesOrdersResource {
  private readonly http: HttpClient;
  private readonly basePath = '/sales/orders';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.SalesOrder[]> {
    return this.http.get<Types.SalesOrder[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.SalesOrder[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.SalesOrder> {
    return this.http.get<Types.SalesOrder>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.SalesOrder>): Promise<Types.SalesOrder> {
    return this.http.post<Types.SalesOrder>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.SalesOrder> {
    return this.http.patch<Types.SalesOrder>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing purchaseorders
 */
export class PurchaseOrdersResource {
  private readonly http: HttpClient;
  private readonly basePath = '/procurement/purchaseOrders';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.PurchaseOrder[]> {
    return this.http.get<Types.PurchaseOrder[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.PurchaseOrder[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.PurchaseOrder> {
    return this.http.get<Types.PurchaseOrder>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.PurchaseOrder>): Promise<Types.PurchaseOrder> {
    return this.http.post<Types.PurchaseOrder>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.PurchaseOrder> {
    return this.http.patch<Types.PurchaseOrder>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing purchaseorderlineitems
 */
export class PurchaseOrderLineItemsResource {
  private readonly http: HttpClient;
  private readonly basePath: string;

  constructor(http: HttpClient, parentId: number) {
    this.http = http;
    this.basePath = `/procurement/purchaseOrders/${parentId}/lineItems`;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param params.page - Page number, starting with page 1.
   * @param params.pageSize - Number of results per page. Default: 25, max: 1000.
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<Types.PurchaseOrderLineItem[]> {
    return this.http.get<Types.PurchaseOrderLineItem[]>(this.basePath, params);
  }


  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.orderBy - Choose which field to sort the results by. Example: `contact/name asc`. Operators: asc or desc.
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<Types.PurchaseOrderLineItem[]> {
    return listAllHelper((p) => this.list(p), params, pageSize);
  }


  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<Types.PurchaseOrderLineItem> {
    return this.http.get<Types.PurchaseOrderLineItem>(`${this.basePath}/${id}`, params);
  }


  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: Partial<Types.PurchaseOrderLineItem>): Promise<Types.PurchaseOrderLineItem> {
    return this.http.post<Types.PurchaseOrderLineItem>(this.basePath, data);
  }


  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @param operations[].op - The operation type: 'add', 'remove', 'replace', 'move', 'copy', or 'test'
   * @param operations[].path - The JSON path to the property to modify
   * @param operations[].value - The value to set (not required for 'remove' operation)
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<Types.PurchaseOrderLineItem> {
    return this.http.patch<Types.PurchaseOrderLineItem>(`${this.basePath}/${id}`, operations);
  }


  /**
   * Delete an item by ID
   * @param id - The ID of the item to delete
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }


  /**
   * Get the count of items matching the given conditions
   * @param params - Query parameters for filtering
   * @param params.conditions - Search results based on the fields returned in a GET. Example: `board/name='Integration'`, `summary='xyz'`, `board/id in (3,2,4)`, `lastUpdated > [2016-08-20T18:04:26Z]`. Operators: =, !=, <, <=, >, >=, contains, like, in, not. Logic: and, or.
   * @param params.childConditions - Allows searching arrays on endpoints. Example: `communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @param params.customFieldConditions - Allows searching custom fields. Example: `caption='TomNumber' AND value != null`. Operators: =, !=, <, <=, >, >=, contains, like, not.
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}


/**
 * Resource for managing systeminfos
 */
export class SystemInfosResource {
  private readonly http: HttpClient;
  private readonly basePath = '/system';

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * Get the resource
   * @param params - Optional query parameters for field selection
   * @param params.fields - Limits which information is returned in the response. Example: `id,name,status/id`.
   * @returns The resource
   */
  async get(params?: Pick<QueryParams, 'fields'>): Promise<Types.SystemInfo> {
    return this.http.get<Types.SystemInfo>(this.basePath, params);
  }
}

