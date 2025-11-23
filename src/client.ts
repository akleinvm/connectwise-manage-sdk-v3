// Auto-generated ConnectWise client
// Do not edit manually

import { HttpClient, type ClientConfig } from './http.js';
import * as Namespaces from './namespaces/generated.js';

/**
 * ConnectWise Manage API Client
 *
 * @example
 * ```typescript
 * const client = new ConnectWiseClient({
 *   baseUrl: 'https://your-instance.com/v4_6_release/apis/3.0',
 *   auth: { username: 'company+publicKey', password: 'privateKey' },
 *   clientId: 'your-client-id'
 * });
 *
 * // List tickets
 * const tickets = await client.service.tickets.list({ conditions: "status/name='Open'" });
 *
 * // Get a company
 * const company = await client.company.companies.get(123);
 * ```
 */
export class ConnectWiseClient {
  private readonly http: HttpClient;

  private _finance?: Namespaces.FinanceNamespace;
  private _procurement?: Namespaces.ProcurementNamespace;
  private _service?: Namespaces.ServiceNamespace;
  private _company?: Namespaces.CompanyNamespace;
  private _system?: Namespaces.SystemNamespace;
  private _marketing?: Namespaces.MarketingNamespace;
  private _project?: Namespaces.ProjectNamespace;
  private _schedule?: Namespaces.ScheduleNamespace;
  private _time?: Namespaces.TimeNamespace;
  private _expense?: Namespaces.ExpenseNamespace;
  private _sales?: Namespaces.SalesNamespace;

  constructor(config: ClientConfig) {
    this.http = new HttpClient(config);
  }

  /**
   * Access finance API operations
   */
  get finance(): Namespaces.FinanceNamespace {
    if (!this._finance) {
      this._finance = new Namespaces.FinanceNamespace(this.http);
    }
    return this._finance;
  }

  /**
   * Access procurement API operations
   */
  get procurement(): Namespaces.ProcurementNamespace {
    if (!this._procurement) {
      this._procurement = new Namespaces.ProcurementNamespace(this.http);
    }
    return this._procurement;
  }

  /**
   * Access service API operations
   */
  get service(): Namespaces.ServiceNamespace {
    if (!this._service) {
      this._service = new Namespaces.ServiceNamespace(this.http);
    }
    return this._service;
  }

  /**
   * Access company API operations
   */
  get company(): Namespaces.CompanyNamespace {
    if (!this._company) {
      this._company = new Namespaces.CompanyNamespace(this.http);
    }
    return this._company;
  }

  /**
   * Access system API operations
   */
  get system(): Namespaces.SystemNamespace {
    if (!this._system) {
      this._system = new Namespaces.SystemNamespace(this.http);
    }
    return this._system;
  }

  /**
   * Access marketing API operations
   */
  get marketing(): Namespaces.MarketingNamespace {
    if (!this._marketing) {
      this._marketing = new Namespaces.MarketingNamespace(this.http);
    }
    return this._marketing;
  }

  /**
   * Access project API operations
   */
  get project(): Namespaces.ProjectNamespace {
    if (!this._project) {
      this._project = new Namespaces.ProjectNamespace(this.http);
    }
    return this._project;
  }

  /**
   * Access schedule API operations
   */
  get schedule(): Namespaces.ScheduleNamespace {
    if (!this._schedule) {
      this._schedule = new Namespaces.ScheduleNamespace(this.http);
    }
    return this._schedule;
  }

  /**
   * Access time API operations
   */
  get time(): Namespaces.TimeNamespace {
    if (!this._time) {
      this._time = new Namespaces.TimeNamespace(this.http);
    }
    return this._time;
  }

  /**
   * Access expense API operations
   */
  get expense(): Namespaces.ExpenseNamespace {
    if (!this._expense) {
      this._expense = new Namespaces.ExpenseNamespace(this.http);
    }
    return this._expense;
  }

  /**
   * Access sales API operations
   */
  get sales(): Namespaces.SalesNamespace {
    if (!this._sales) {
      this._sales = new Namespaces.SalesNamespace(this.http);
    }
    return this._sales;
  }
}
