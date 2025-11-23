import type { HttpClient } from '../http.js';
import type { QueryParams, PatchOperation, CountResponse } from '../query/types.js';

/**
 * Base resource class that provides common CRUD operations
 */
export class BaseResource<T, TCreate = Partial<T>> {
  protected readonly http: HttpClient;
  protected readonly basePath: string;

  constructor(http: HttpClient, basePath: string) {
    this.http = http;
    this.basePath = basePath;
  }

  /**
   * List all items with optional filtering and pagination
   * @param params - Query parameters for filtering, sorting, and pagination
   * @returns Array of items
   */
  async list(params?: QueryParams): Promise<T[]> {
    return this.http.get<T[]>(this.basePath, params);
  }

  /**
   * Get all items by automatically handling pagination
   * @param params - Query parameters for filtering and sorting (page/pageSize will be managed automatically)
   * @param pageSize - Number of items per page (default: 1000, max: 1000)
   * @returns Array of all items
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<T[]> {
    const allItems: T[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const items = await this.list({ ...params, page, pageSize });
      allItems.push(...items);

      if (items.length < pageSize) {
        hasMore = false;
      } else {
        page++;
      }
    }

    return allItems;
  }

  /**
   * Get a single item by ID
   * @param id - The ID of the item to retrieve
   * @param params - Optional query parameters for field selection
   * @returns The requested item
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<T> {
    return this.http.get<T>(`${this.basePath}/${id}`, params);
  }

  /**
   * Create a new item
   * @param data - The data for the new item
   * @returns The created item
   */
  async create(data: TCreate): Promise<T> {
    return this.http.post<T>(this.basePath, data);
  }

  /**
   * Update an item using patch operations
   * @param id - The ID of the item to update
   * @param operations - Array of patch operations
   * @returns The updated item
   */
  async update(id: number, operations: PatchOperation[]): Promise<T> {
    return this.http.patch<T>(`${this.basePath}/${id}`, operations);
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
   * @returns The count of matching items
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}

/**
 * Base resource class for nested resources (e.g., /tickets/{ticketId}/notes)
 */
export class NestedResource<T, TCreate = Partial<T>> {
  protected readonly http: HttpClient;
  protected readonly basePath: string;
  protected readonly parentId: number;

  constructor(http: HttpClient, basePath: string, parentId: number) {
    this.http = http;
    this.basePath = basePath;
    this.parentId = parentId;
  }

  /**
   * List all items with optional filtering and pagination
   */
  async list(params?: QueryParams): Promise<T[]> {
    return this.http.get<T[]>(this.basePath, params);
  }

  /**
   * Get all items by automatically handling pagination
   */
  async listAll(params?: Omit<QueryParams, 'page' | 'pageSize'>, pageSize: number = 1000): Promise<T[]> {
    const allItems: T[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const items = await this.list({ ...params, page, pageSize });
      allItems.push(...items);

      if (items.length < pageSize) {
        hasMore = false;
      } else {
        page++;
      }
    }

    return allItems;
  }

  /**
   * Get a single item by ID
   */
  async get(id: number, params?: Pick<QueryParams, 'fields'>): Promise<T> {
    return this.http.get<T>(`${this.basePath}/${id}`, params);
  }

  /**
   * Create a new item
   */
  async create(data: TCreate): Promise<T> {
    return this.http.post<T>(this.basePath, data);
  }

  /**
   * Update an item using patch operations
   */
  async update(id: number, operations: PatchOperation[]): Promise<T> {
    return this.http.patch<T>(`${this.basePath}/${id}`, operations);
  }

  /**
   * Delete an item by ID
   */
  async delete(id: number): Promise<void> {
    return this.http.delete(`${this.basePath}/${id}`);
  }

  /**
   * Get the count of items matching the given conditions
   */
  async count(params?: Pick<QueryParams, 'conditions' | 'childConditions' | 'customFieldConditions'>): Promise<number> {
    const result = await this.http.get<CountResponse>(`${this.basePath}/count`, params);
    return result.count;
  }
}
