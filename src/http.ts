import {
  ConnectWiseError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
} from './errors.js';
import type { QueryParams, PatchOperation } from './query/types.js';

/**
 * Configuration options for the ConnectWise client
 */
export interface ClientConfig {
  /**
   * The base URL of your ConnectWise instance API
   * @example 'https://your-instance.com/v4_6_release/apis/3.0'
   */
  baseUrl: string;

  /**
   * Basic authentication credentials
   */
  auth: {
    /**
     * Company ID + API Member ID (e.g., 'company+publicKey')
     */
    username: string;

    /**
     * API private key
     */
    password: string;
  };

  /**
   * Client ID for API access (required by ConnectWise)
   */
  clientId?: string;
}

/**
 * HTTP client for making requests to the ConnectWise API
 */
export class HttpClient {
  private readonly baseUrl: string;
  private readonly authHeader: string;
  private readonly clientId?: string;

  constructor(config: ClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, '');
    this.authHeader = 'Basic ' + btoa(`${config.auth.username}:${config.auth.password}`);
    this.clientId = config.clientId;
  }

  private buildUrl(path: string, params?: QueryParams): string {
    const url = new URL(this.baseUrl + path);

    if (params) {
      if (params.conditions) url.searchParams.set('conditions', params.conditions);
      if (params.childConditions) url.searchParams.set('childConditions', params.childConditions);
      if (params.customFieldConditions) url.searchParams.set('customFieldConditions', params.customFieldConditions);
      if (params.orderBy) url.searchParams.set('orderBy', params.orderBy);
      if (params.fields) url.searchParams.set('fields', params.fields);
      if (params.page !== undefined) url.searchParams.set('page', params.page.toString());
      if (params.pageSize !== undefined) url.searchParams.set('pageSize', params.pageSize.toString());
    }

    return url.toString();
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Authorization': this.authHeader,
      'Content-Type': 'application/json',
    };

    if (this.clientId) {
      headers['clientId'] = this.clientId;
    }

    return headers;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    let data: unknown;

    try {
      const text = await response.text();
      data = text ? JSON.parse(text) : undefined;
    } catch {
      data = undefined;
    }

    if (!response.ok) {
      const message = typeof data === 'object' && data !== null && 'message' in data
        ? String((data as { message: string }).message)
        : `Request failed with status ${response.status}`;

      switch (response.status) {
        case 400:
          throw new ValidationError(message, data);
        case 401:
          throw new AuthenticationError(message, data);
        case 403:
          throw new ForbiddenError(message, data);
        case 404:
          throw new NotFoundError(message, data);
        default:
          throw new ConnectWiseError(message, response.status, response.statusText, data);
      }
    }

    return data as T;
  }

  /**
   * Make a GET request
   */
  async get<T>(path: string, params?: QueryParams): Promise<T> {
    const url = this.buildUrl(path, params);
    const response = await fetch(url, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Make a POST request
   */
  async post<T>(path: string, body?: unknown): Promise<T> {
    const url = this.buildUrl(path);
    const response = await fetch(url, {
      method: 'POST',
      headers: this.getHeaders(),
      body: body ? JSON.stringify(body) : undefined,
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Make a PATCH request
   */
  async patch<T>(path: string, operations: PatchOperation[]): Promise<T> {
    const url = this.buildUrl(path);
    const response = await fetch(url, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(operations),
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Make a DELETE request
   */
  async delete(path: string): Promise<void> {
    const url = this.buildUrl(path);
    const response = await fetch(url, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });

    await this.handleResponse<void>(response);
  }
}
