// Auto-generated namespace modules
// Do not edit manually

import type { HttpClient } from '../http.js';
import * as Resources from '../resources/generated.js';

/**
 * Finance API namespace
 */
export class FinanceNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _agreements?: Resources.AgreementsResource;

  /**
   * Access agreements operations
   */
  get agreements(): Resources.AgreementsResource {
    if (!this._agreements) {
      this._agreements = new Resources.AgreementsResource(this.http);
    }
    return this._agreements;
  }


  /**
   * Get additions for a specific parent
   */
  additions(parentId: number): Resources.AdditionsResource {
    return new Resources.AdditionsResource(this.http, parentId);
  }

}


/**
 * Procurement API namespace
 */
export class ProcurementNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _catalogItems?: Resources.CatalogItemsResource;

  /**
   * Access catalogItems operations
   */
  get catalogItems(): Resources.CatalogItemsResource {
    if (!this._catalogItems) {
      this._catalogItems = new Resources.CatalogItemsResource(this.http);
    }
    return this._catalogItems;
  }


  private _products?: Resources.ProductsResource;

  /**
   * Access products operations
   */
  get products(): Resources.ProductsResource {
    if (!this._products) {
      this._products = new Resources.ProductsResource(this.http);
    }
    return this._products;
  }


  private _purchaseOrders?: Resources.PurchaseOrdersResource;

  /**
   * Access purchaseOrders operations
   */
  get purchaseOrders(): Resources.PurchaseOrdersResource {
    if (!this._purchaseOrders) {
      this._purchaseOrders = new Resources.PurchaseOrdersResource(this.http);
    }
    return this._purchaseOrders;
  }


  /**
   * Get purchaseOrderLineItems for a specific parent
   */
  purchaseOrderLineItems(parentId: number): Resources.PurchaseOrderLineItemsResource {
    return new Resources.PurchaseOrderLineItemsResource(this.http, parentId);
  }

}


/**
 * Service API namespace
 */
export class ServiceNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _boards?: Resources.BoardsResource;

  /**
   * Access boards operations
   */
  get boards(): Resources.BoardsResource {
    if (!this._boards) {
      this._boards = new Resources.BoardsResource(this.http);
    }
    return this._boards;
  }


  /**
   * Get boardStatuses for a specific parent
   */
  boardStatuses(parentId: number): Resources.BoardStatusesResource {
    return new Resources.BoardStatusesResource(this.http, parentId);
  }


  /**
   * Get boardTypes for a specific parent
   */
  boardTypes(parentId: number): Resources.BoardTypesResource {
    return new Resources.BoardTypesResource(this.http, parentId);
  }


  /**
   * Get boardSubtypes for a specific parent
   */
  boardSubtypes(parentId: number): Resources.BoardSubtypesResource {
    return new Resources.BoardSubtypesResource(this.http, parentId);
  }


  private _tickets?: Resources.TicketsResource;

  /**
   * Access tickets operations
   */
  get tickets(): Resources.TicketsResource {
    if (!this._tickets) {
      this._tickets = new Resources.TicketsResource(this.http);
    }
    return this._tickets;
  }


  /**
   * Get ticketNotes for a specific parent
   */
  ticketNotes(parentId: number): Resources.TicketNotesResource {
    return new Resources.TicketNotesResource(this.http, parentId);
  }


  private _priorities?: Resources.PrioritiesResource;

  /**
   * Access priorities operations
   */
  get priorities(): Resources.PrioritiesResource {
    if (!this._priorities) {
      this._priorities = new Resources.PrioritiesResource(this.http);
    }
    return this._priorities;
  }

}


/**
 * Company API namespace
 */
export class CompanyNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _companies?: Resources.CompaniesResource;

  /**
   * Access companies operations
   */
  get companies(): Resources.CompaniesResource {
    if (!this._companies) {
      this._companies = new Resources.CompaniesResource(this.http);
    }
    return this._companies;
  }


  /**
   * Get companyGroups for a specific parent
   */
  companyGroups(parentId: number): Resources.CompanyGroupsResource {
    return new Resources.CompanyGroupsResource(this.http, parentId);
  }


  /**
   * Get companySites for a specific parent
   */
  companySites(parentId: number): Resources.CompanySitesResource {
    return new Resources.CompanySitesResource(this.http, parentId);
  }


  private _companyStatuses?: Resources.CompanyStatusesResource;

  /**
   * Access companyStatuses operations
   */
  get companyStatuses(): Resources.CompanyStatusesResource {
    if (!this._companyStatuses) {
      this._companyStatuses = new Resources.CompanyStatusesResource(this.http);
    }
    return this._companyStatuses;
  }


  private _companyTypes?: Resources.CompanyTypesResource;

  /**
   * Access companyTypes operations
   */
  get companyTypes(): Resources.CompanyTypesResource {
    if (!this._companyTypes) {
      this._companyTypes = new Resources.CompanyTypesResource(this.http);
    }
    return this._companyTypes;
  }


  private _configurations?: Resources.ConfigurationsResource;

  /**
   * Access configurations operations
   */
  get configurations(): Resources.ConfigurationsResource {
    if (!this._configurations) {
      this._configurations = new Resources.ConfigurationsResource(this.http);
    }
    return this._configurations;
  }


  private _contacts?: Resources.ContactsResource;

  /**
   * Access contacts operations
   */
  get contacts(): Resources.ContactsResource {
    if (!this._contacts) {
      this._contacts = new Resources.ContactsResource(this.http);
    }
    return this._contacts;
  }


  /**
   * Get contactGroups for a specific parent
   */
  contactGroups(parentId: number): Resources.ContactGroupsResource {
    return new Resources.ContactGroupsResource(this.http, parentId);
  }


  private _contactTypes?: Resources.ContactTypesResource;

  /**
   * Access contactTypes operations
   */
  get contactTypes(): Resources.ContactTypesResource {
    if (!this._contactTypes) {
      this._contactTypes = new Resources.ContactTypesResource(this.http);
    }
    return this._contactTypes;
  }

}


/**
 * System API namespace
 */
export class SystemNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _departments?: Resources.DepartmentsResource;

  /**
   * Access departments operations
   */
  get departments(): Resources.DepartmentsResource {
    if (!this._departments) {
      this._departments = new Resources.DepartmentsResource(this.http);
    }
    return this._departments;
  }


  private _locations?: Resources.LocationsResource;

  /**
   * Access locations operations
   */
  get locations(): Resources.LocationsResource {
    if (!this._locations) {
      this._locations = new Resources.LocationsResource(this.http);
    }
    return this._locations;
  }


  private _members?: Resources.MembersResource;

  /**
   * Access members operations
   */
  get members(): Resources.MembersResource {
    if (!this._members) {
      this._members = new Resources.MembersResource(this.http);
    }
    return this._members;
  }


  private _documents?: Resources.DocumentsResource;

  /**
   * Access documents operations
   */
  get documents(): Resources.DocumentsResource {
    if (!this._documents) {
      this._documents = new Resources.DocumentsResource(this.http);
    }
    return this._documents;
  }


  private _systemInfo?: Resources.SystemInfoResource;

  /**
   * Access systemInfo operations
   */
  get systemInfo(): Resources.SystemInfoResource {
    if (!this._systemInfo) {
      this._systemInfo = new Resources.SystemInfoResource(this.http);
    }
    return this._systemInfo;
  }

}


/**
 * Marketing API namespace
 */
export class MarketingNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _groups?: Resources.GroupsResource;

  /**
   * Access groups operations
   */
  get groups(): Resources.GroupsResource {
    if (!this._groups) {
      this._groups = new Resources.GroupsResource(this.http);
    }
    return this._groups;
  }

}


/**
 * Project API namespace
 */
export class ProjectNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _projects?: Resources.ProjectsResource;

  /**
   * Access projects operations
   */
  get projects(): Resources.ProjectsResource {
    if (!this._projects) {
      this._projects = new Resources.ProjectsResource(this.http);
    }
    return this._projects;
  }


  /**
   * Get projectTeamMembers for a specific parent
   */
  projectTeamMembers(parentId: number): Resources.ProjectTeamMembersResource {
    return new Resources.ProjectTeamMembersResource(this.http, parentId);
  }


  /**
   * Get projectPhases for a specific parent
   */
  projectPhases(parentId: number): Resources.ProjectPhasesResource {
    return new Resources.ProjectPhasesResource(this.http, parentId);
  }


  private _projectTickets?: Resources.ProjectTicketsResource;

  /**
   * Access projectTickets operations
   */
  get projectTickets(): Resources.ProjectTicketsResource {
    if (!this._projectTickets) {
      this._projectTickets = new Resources.ProjectTicketsResource(this.http);
    }
    return this._projectTickets;
  }


  /**
   * Get projectTicketNotes for a specific parent
   */
  projectTicketNotes(parentId: number): Resources.ProjectTicketNotesResource {
    return new Resources.ProjectTicketNotesResource(this.http, parentId);
  }


  /**
   * Get ticketTasks for a specific parent
   */
  ticketTasks(parentId: number): Resources.TicketTasksResource {
    return new Resources.TicketTasksResource(this.http, parentId);
  }

}


/**
 * Schedule API namespace
 */
export class ScheduleNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _schedules?: Resources.SchedulesResource;

  /**
   * Access schedules operations
   */
  get schedules(): Resources.SchedulesResource {
    if (!this._schedules) {
      this._schedules = new Resources.SchedulesResource(this.http);
    }
    return this._schedules;
  }

}


/**
 * Time API namespace
 */
export class TimeNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _timesheets?: Resources.TimesheetsResource;

  /**
   * Access timesheets operations
   */
  get timesheets(): Resources.TimesheetsResource {
    if (!this._timesheets) {
      this._timesheets = new Resources.TimesheetsResource(this.http);
    }
    return this._timesheets;
  }


  private _timeEntries?: Resources.TimeEntriesResource;

  /**
   * Access timeEntries operations
   */
  get timeEntries(): Resources.TimeEntriesResource {
    if (!this._timeEntries) {
      this._timeEntries = new Resources.TimeEntriesResource(this.http);
    }
    return this._timeEntries;
  }


  private _workRoles?: Resources.WorkRolesResource;

  /**
   * Access workRoles operations
   */
  get workRoles(): Resources.WorkRolesResource {
    if (!this._workRoles) {
      this._workRoles = new Resources.WorkRolesResource(this.http);
    }
    return this._workRoles;
  }


  private _workTypes?: Resources.WorkTypesResource;

  /**
   * Access workTypes operations
   */
  get workTypes(): Resources.WorkTypesResource {
    if (!this._workTypes) {
      this._workTypes = new Resources.WorkTypesResource(this.http);
    }
    return this._workTypes;
  }

}


/**
 * Expense API namespace
 */
export class ExpenseNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _expenseEntries?: Resources.ExpenseEntriesResource;

  /**
   * Access expenseEntries operations
   */
  get expenseEntries(): Resources.ExpenseEntriesResource {
    if (!this._expenseEntries) {
      this._expenseEntries = new Resources.ExpenseEntriesResource(this.http);
    }
    return this._expenseEntries;
  }


  private _expenseTypes?: Resources.ExpenseTypesResource;

  /**
   * Access expenseTypes operations
   */
  get expenseTypes(): Resources.ExpenseTypesResource {
    if (!this._expenseTypes) {
      this._expenseTypes = new Resources.ExpenseTypesResource(this.http);
    }
    return this._expenseTypes;
  }


  private _classifications?: Resources.ClassificationsResource;

  /**
   * Access classifications operations
   */
  get classifications(): Resources.ClassificationsResource {
    if (!this._classifications) {
      this._classifications = new Resources.ClassificationsResource(this.http);
    }
    return this._classifications;
  }


  private _paymentTypes?: Resources.PaymentTypesResource;

  /**
   * Access paymentTypes operations
   */
  get paymentTypes(): Resources.PaymentTypesResource {
    if (!this._paymentTypes) {
      this._paymentTypes = new Resources.PaymentTypesResource(this.http);
    }
    return this._paymentTypes;
  }

}


/**
 * Sales API namespace
 */
export class SalesNamespace {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private _salesOrders?: Resources.SalesOrdersResource;

  /**
   * Access salesOrders operations
   */
  get salesOrders(): Resources.SalesOrdersResource {
    if (!this._salesOrders) {
      this._salesOrders = new Resources.SalesOrdersResource(this.http);
    }
    return this._salesOrders;
  }

}

