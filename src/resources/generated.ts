// Auto-generated resources
// Do not edit manually

import { BaseResource, NestedResource } from './base.js';
import type { HttpClient } from '../http.js';
import type * as Types from '../types/generated.js';

/**
 * Resource for managing agreements
 */
export class AgreementsResource extends BaseResource<Types.Agreement> {
  constructor(http: HttpClient) {
    super(http, '/finance/agreements');
  }
}


/**
 * Resource for managing additions
 */
export class AdditionsResource extends NestedResource<Types.Addition> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/finance/agreements/${parentId}/additions`, parentId);
  }
}


/**
 * Resource for managing catalogitems
 */
export class CatalogItemsResource extends BaseResource<Types.CatalogItem> {
  constructor(http: HttpClient) {
    super(http, '/procurement/catalog');
  }
}


/**
 * Resource for managing products
 */
export class ProductsResource extends BaseResource<Types.Product> {
  constructor(http: HttpClient) {
    super(http, '/procurement/products');
  }
}


/**
 * Resource for managing boards
 */
export class BoardsResource extends BaseResource<Types.Board> {
  constructor(http: HttpClient) {
    super(http, '/service/boards');
  }
}


/**
 * Resource for managing boardstatuses
 */
export class BoardStatusesResource extends NestedResource<Types.BoardStatus> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/service/boards/${parentId}/statuses`, parentId);
  }
}


/**
 * Resource for managing boardtypes
 */
export class BoardTypesResource extends NestedResource<Types.BoardType> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/service/boards/${parentId}/types`, parentId);
  }
}


/**
 * Resource for managing boardsubtypes
 */
export class BoardSubtypesResource extends NestedResource<Types.BoardSubtype> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/service/boards/${parentId}/subtypes`, parentId);
  }
}


/**
 * Resource for managing companies
 */
export class CompaniesResource extends BaseResource<Types.Company> {
  constructor(http: HttpClient) {
    super(http, '/company/companies');
  }
}


/**
 * Resource for managing companygroups
 */
export class CompanyGroupsResource extends NestedResource<Types.CompanyGroup> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/company/companies/${parentId}/groups`, parentId);
  }
}


/**
 * Resource for managing companysites
 */
export class CompanySitesResource extends NestedResource<Types.CompanySite> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/company/companies/${parentId}/sites`, parentId);
  }
}


/**
 * Resource for managing companystatuses
 */
export class CompanyStatusesResource extends BaseResource<Types.CompanyStatus> {
  constructor(http: HttpClient) {
    super(http, '/company/companies/statuses');
  }
}


/**
 * Resource for managing companytypes
 */
export class CompanyTypesResource extends BaseResource<Types.CompanyType> {
  constructor(http: HttpClient) {
    super(http, '/company/companies/types');
  }
}


/**
 * Resource for managing configurations
 */
export class ConfigurationsResource extends BaseResource<Types.Configuration> {
  constructor(http: HttpClient) {
    super(http, '/company/configurations');
  }
}


/**
 * Resource for managing contacts
 */
export class ContactsResource extends BaseResource<Types.Contact> {
  constructor(http: HttpClient) {
    super(http, '/company/contacts');
  }
}


/**
 * Resource for managing contactgroups
 */
export class ContactGroupsResource extends NestedResource<Types.ContactGroup> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/company/contacts/${parentId}/groups`, parentId);
  }
}


/**
 * Resource for managing contacttypes
 */
export class ContactTypesResource extends BaseResource<Types.ContactType> {
  constructor(http: HttpClient) {
    super(http, '/company/contacts/types');
  }
}


/**
 * Resource for managing departments
 */
export class DepartmentsResource extends BaseResource<Types.Department> {
  constructor(http: HttpClient) {
    super(http, '/system/departments');
  }
}


/**
 * Resource for managing groups
 */
export class GroupsResource extends BaseResource<Types.Group> {
  constructor(http: HttpClient) {
    super(http, '/marketing/groups');
  }
}


/**
 * Resource for managing locations
 */
export class LocationsResource extends BaseResource<Types.Location> {
  constructor(http: HttpClient) {
    super(http, '/system/locations');
  }
}


/**
 * Resource for managing members
 */
export class MembersResource extends BaseResource<Types.Member> {
  constructor(http: HttpClient) {
    super(http, '/system/members');
  }
}


/**
 * Resource for managing projects
 */
export class ProjectsResource extends BaseResource<Types.Project> {
  constructor(http: HttpClient) {
    super(http, '/project/projects');
  }
}


/**
 * Resource for managing projectteammembers
 */
export class ProjectTeamMembersResource extends NestedResource<Types.ProjectTeamMember> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/project/projects/${parentId}/teamMembers`, parentId);
  }
}


/**
 * Resource for managing projectphases
 */
export class ProjectPhasesResource extends NestedResource<Types.ProjectPhase> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/project/projects/${parentId}/phases`, parentId);
  }
}


/**
 * Resource for managing projecttickets
 */
export class ProjectTicketsResource extends BaseResource<Types.ProjectTicket> {
  constructor(http: HttpClient) {
    super(http, '/project/tickets');
  }
}


/**
 * Resource for managing projectticketnotes
 */
export class ProjectTicketNotesResource extends NestedResource<Types.ProjectTicketNote> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/project/tickets/${parentId}/notes`, parentId);
  }
}


/**
 * Resource for managing schedules
 */
export class SchedulesResource extends BaseResource<Types.Schedule> {
  constructor(http: HttpClient) {
    super(http, '/schedule/entries');
  }
}


/**
 * Resource for managing tickets
 */
export class TicketsResource extends BaseResource<Types.Ticket> {
  constructor(http: HttpClient) {
    super(http, '/service/tickets');
  }
}


/**
 * Resource for managing ticketnotes
 */
export class TicketNotesResource extends NestedResource<Types.TicketNote> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/service/tickets/${parentId}/notes`, parentId);
  }
}


/**
 * Resource for managing tickettasks
 */
export class TicketTasksResource extends NestedResource<Types.TicketTask> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/project/tickets/${parentId}/tasks`, parentId);
  }
}


/**
 * Resource for managing timesheets
 */
export class TimesheetsResource extends BaseResource<Types.Timesheet> {
  constructor(http: HttpClient) {
    super(http, '/time/sheets');
  }
}


/**
 * Resource for managing timeentries
 */
export class TimeEntriesResource extends BaseResource<Types.TimeEntry> {
  constructor(http: HttpClient) {
    super(http, '/time/entries');
  }
}


/**
 * Resource for managing expenseentries
 */
export class ExpenseEntriesResource extends BaseResource<Types.ExpenseEntry> {
  constructor(http: HttpClient) {
    super(http, '/expense/entries');
  }
}


/**
 * Resource for managing expensetypes
 */
export class ExpenseTypesResource extends BaseResource<Types.ExpenseType> {
  constructor(http: HttpClient) {
    super(http, '/expense/types');
  }
}


/**
 * Resource for managing classifications
 */
export class ClassificationsResource extends BaseResource<Types.Classification> {
  constructor(http: HttpClient) {
    super(http, '/expense/classifications');
  }
}


/**
 * Resource for managing paymenttypes
 */
export class PaymentTypesResource extends BaseResource<Types.PaymentType> {
  constructor(http: HttpClient) {
    super(http, '/expense/paymentTypes');
  }
}


/**
 * Resource for managing workroles
 */
export class WorkRolesResource extends BaseResource<Types.WorkRole> {
  constructor(http: HttpClient) {
    super(http, '/time/workRoles');
  }
}


/**
 * Resource for managing worktypes
 */
export class WorkTypesResource extends BaseResource<Types.WorkType> {
  constructor(http: HttpClient) {
    super(http, '/time/workTypes');
  }
}


/**
 * Resource for managing priorities
 */
export class PrioritiesResource extends BaseResource<Types.Priority> {
  constructor(http: HttpClient) {
    super(http, '/service/priorities');
  }
}


/**
 * Resource for managing documents
 */
export class DocumentsResource extends BaseResource<Types.Document> {
  constructor(http: HttpClient) {
    super(http, '/system/documents');
  }
}


/**
 * Resource for managing salesorders
 */
export class SalesOrdersResource extends BaseResource<Types.SalesOrder> {
  constructor(http: HttpClient) {
    super(http, '/sales/orders');
  }
}


/**
 * Resource for managing purchaseorders
 */
export class PurchaseOrdersResource extends BaseResource<Types.PurchaseOrder> {
  constructor(http: HttpClient) {
    super(http, '/procurement/purchaseOrders');
  }
}


/**
 * Resource for managing purchaseorderlineitems
 */
export class PurchaseOrderLineItemsResource extends NestedResource<Types.PurchaseOrderLineItem> {
  constructor(http: HttpClient, parentId: number) {
    super(http, `/procurement/purchaseOrders/${parentId}/lineItems`, parentId);
  }
}

