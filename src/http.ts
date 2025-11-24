import {
  ConnectWiseError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
  ConfigurationError,
} from './errors.js';
import type { QueryParams, PatchOperation } from './query/types.js';

/**
 * Configuration options for the ConnectWise client
 */
export interface ClientConfig {
  /**
   * The base URL of your ConnectWise instance
   * @example 'https://your-instance.com' or 'your-instance.com'
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

  /**
   * Optional CORS proxy URL for browser-based usage
   * When set, all requests will be sent to this proxy with the original request details in the body
   */
  corsProxyUrl?: string;
}

/**
 * HTTP client for making requests to the ConnectWise API
 */
export class HttpClient {
  private baseUrl: string = '';
  private authHeader: string = '';
  private clientId?: string;
  private corsProxyUrl?: string;
  private configured: boolean = false;

  constructor(config?: ClientConfig) {
    if (config) {
      this.configure(config);
    }
  }

  /**
   * Configure the HTTP client with connection details
   */
  configure(config: ClientConfig): void {
    let baseUrl = config.baseUrl.trim();

    // Ensure URL has protocol
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
      baseUrl = 'https://' + baseUrl;
    }

    // Remove trailing slash
    baseUrl = baseUrl.replace(/\/$/, '');

    // Append API path if not present
    if (!baseUrl.includes('/v4_6_release/apis/3.0')) {
      baseUrl = `${baseUrl}/v4_6_release/apis/3.0`;
    }

    this.baseUrl = baseUrl;
    this.authHeader = 'Basic ' + btoa(`${config.auth.username}:${config.auth.password}`);
    this.clientId = config.clientId;
    this.corsProxyUrl = config.corsProxyUrl;
    this.configured = true;
  }

  /**
   * Check if the client is configured
   */
  isConfigured(): boolean {
    return this.configured;
  }

  private ensureConfigured(): void {
    if (!this.configured) {
      throw new ConfigurationError();
    }
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

  private async request<T>(method: string, url: string, body?: unknown): Promise<T> {
    let response: Response;

    if (this.corsProxyUrl) {
      // Use CORS proxy
      const proxyHeaders: Record<string, string> = {
        'Authorization': this.authHeader,
        'Content-Type': 'application/json',
      };

      if (this.clientId) {
        proxyHeaders['clientId'] = this.clientId;
      }

      response = await fetch(this.corsProxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          method: method,
          url: url,
          headers: proxyHeaders,
          body: body,
        }),
      });
    } else {
      // Direct request
      response = await fetch(url, {
        method: method,
        headers: this.getHeaders(),
        body: body ? JSON.stringify(body) : undefined,
      });
    }

    return this.handleResponse<T>(response);
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
    this.ensureConfigured();
    const url = this.buildUrl(path, params);
    return this.request<T>('GET', url);
  }

  /**
   * Make a POST request
   */
  async post<T>(path: string, body?: unknown): Promise<T> {
    this.ensureConfigured();
    const url = this.buildUrl(path);
    return this.request<T>('POST', url, body);
  }

  /**
   * Make a PATCH request
   */
  async patch<T>(path: string, operations: PatchOperation[]): Promise<T> {
    this.ensureConfigured();
    const url = this.buildUrl(path);
    return this.request<T>('PATCH', url, operations);
  }

  /**
   * Make a DELETE request
   */
  async delete(path: string): Promise<void> {
    this.ensureConfigured();
    const url = this.buildUrl(path);
    await this.request<void>('DELETE', url);
  }
}
