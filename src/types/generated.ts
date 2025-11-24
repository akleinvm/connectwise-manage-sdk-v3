// Auto-generated types from sample data
// Do not edit manually

export interface Agreement {
  id?: number;
  name?: string;
  type?: {
    id?: number;
    name?: string;
  };
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  contact?: {
    id?: number;
    name?: string;
  };
  site?: {
    id?: number;
    name?: string;
  };
  parentAgreement?: {
    id?: number;
    name?: string;
  };
  location?: {
    id?: number;
    name?: string;
  };
  department?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  restrictLocationFlag?: boolean;
  restrictDepartmentFlag?: boolean;
  startDate?: string;
  noEndingDateFlag?: boolean;
  cancelledFlag?: boolean;
  applicationUnits?: string;
  applicationLimit?: number;
  applicationCycle?: string;
  applicationUnlimitedFlag?: boolean;
  oneTimeFlag?: boolean;
  coverAgreementTime?: boolean;
  coverAgreementProduct?: boolean;
  coverAgreementExpense?: boolean;
  coverSalesTax?: boolean;
  carryOverUnused?: boolean;
  allowOverruns?: boolean;
  expireWhenZero?: boolean;
  chargeToFirm?: boolean;
  employeeCompRate?: string;
  employeeCompNotExceed?: string;
  compHourlyRate?: number;
  compLimitAmount?: number;
  billingCycle?: {
    id?: number;
    name?: string;
  };
  billOneTimeFlag?: boolean;
  invoicingCycle?: string;
  billToCompany?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  billToContact?: {
    id?: number;
    name?: string;
  };
  billToSite?: {
    id?: number;
    name?: string;
  };
  billAmount?: number;
  taxable?: boolean;
  billStartDate?: string;
  taxCode?: {
    id?: number;
    name?: string;
  };
  restrictDownPayment?: boolean;
  prorateFlag?: boolean;
  invoiceProratedAdditionsFlag?: boolean;
  invoiceDescription?: string;
  topComment?: boolean;
  bottomComment?: boolean;
  billTime?: string;
  billExpenses?: string;
  billProducts?: string;
  billableTimeInvoice?: boolean;
  billableExpenseInvoice?: boolean;
  billableProductInvoice?: boolean;
  currency?: {
    id?: number;
    symbol?: string;
    currencyCode?: string;
    decimalSeparator?: string;
    numberOfDecimals?: number;
    thousandsSeparator?: string;
    negativeParenthesesFlag?: boolean;
    displaySymbolFlag?: boolean;
    currencyIdentifier?: string;
    displayIdFlag?: boolean;
    rightAlign?: boolean;
    name?: string;
  };
  autoInvoiceFlag?: boolean;
  nextInvoiceDate?: string;
  companyLocation?: {
    id?: number;
    name?: string;
  };
  shipToCompany?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  shipToSite?: {
    id?: number;
    name?: string;
  };
  agreementStatus?: string;
}

export interface Addition {
  id?: number;
  product?: {
    id?: number;
    identifier?: string;
  };
  quantity?: number;
  lessIncluded?: number;
  unitPrice?: number;
  unitCost?: number;
  billCustomer?: string;
  effectiveDate?: string;
  taxableFlag?: boolean;
  invoiceDescription?: string;
  purchaseItemFlag?: boolean;
  specialOrderFlag?: boolean;
  agreementId?: number;
  description?: string;
  billedQuantity?: number;
  uom?: string;
  extPrice?: number;
  extCost?: number;
  sequenceNumber?: number;
  margin?: number;
  prorateCost?: number;
  proratePrice?: number;
  extendedProrateCost?: number;
  extendedProratePrice?: number;
  prorateCurrentPeriodFlag?: boolean;
  agreementStatus?: string;
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    value?: boolean;
    connectWiseId?: string;
  }[];
}

export interface CatalogItem {
  id?: number;
  identifier?: string;
  description?: string;
  inactiveFlag?: boolean;
  subcategory?: {
    id?: number;
    name?: string;
  };
  type?: {
    id?: number;
    name?: string;
  };
  productClass?: string;
  serializedFlag?: boolean;
  serializedCostFlag?: boolean;
  phaseProductFlag?: boolean;
  unitOfMeasure?: {
    id?: number;
    name?: string;
  };
  minStockLevel?: number;
  price?: number;
  cost?: number;
  taxableFlag?: boolean;
  dropShipFlag?: boolean;
  specialOrderFlag?: boolean;
  customerDescription?: string;
  manufacturer?: {
    id?: number;
    name?: string;
  };
  manufacturerPartNumber?: string;
  vendor?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  vendorSku?: string;
  notes?: string;
  recurringFlag?: boolean;
  recurringOneTimeFlag?: boolean;
  dateEntered?: string;
  calculatedPriceFlag?: boolean;
  calculatedCostFlag?: boolean;
  category?: {
    id?: number;
    name?: string;
  };
  connectWiseID?: string;
  markupFlag?: boolean;
  autoUpdateUnitCostFlag?: boolean;
  autoUpdateUnitPriceFlag?: boolean;
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    connectWiseId?: string;
  }[];
}

export interface Product {
  id?: number;
  catalogItem?: {
    id?: number;
    identifier?: string;
  };
  description?: string;
  sequenceNumber?: number;
  quantity?: number;
  unitOfMeasure?: {
    id?: number;
    name?: string;
  };
  price?: number;
  cost?: number;
  extPrice?: number;
  extCost?: number;
  discount?: number;
  margin?: number;
  billableOption?: string;
  locationId?: number;
  location?: {
    id?: number;
    name?: string;
  };
  businessUnitId?: number;
  businessUnit?: {
    id?: number;
    name?: string;
  };
  vendor?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  taxableFlag?: boolean;
  dropshipFlag?: boolean;
  specialOrderFlag?: boolean;
  phaseProductFlag?: boolean;
  cancelledFlag?: boolean;
  quantityCancelled?: number;
  customerDescription?: string;
  productSuppliedFlag?: boolean;
  subContractorAmountLimit?: number;
  opportunity?: {
    id?: number;
    name?: string;
  };
  calculatedPriceFlag?: boolean;
  calculatedCostFlag?: boolean;
  forecastDetailId?: number;
  taxCode?: {
    id?: number;
    name?: string;
  };
  listPrice?: number;
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  forecastStatus?: {
    id?: number;
    name?: string;
  };
  productClass?: string;
  needToPurchaseFlag?: boolean;
  minimumStockFlag?: boolean;
  poApprovedFlag?: boolean;
  uom?: string;
}

export interface Board {
  id?: number;
  name?: string;
  location?: {
    id?: number;
    name?: string;
  };
  department?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  inactiveFlag?: boolean;
  signOffTemplate?: {
    id?: number;
    name?: string;
  };
  sendToContactFlag?: boolean;
  sendToResourceFlag?: boolean;
  projectFlag?: boolean;
  boardIcon?: {
    id?: number;
    name?: string;
  };
  billTicketsAfterClosedFlag?: boolean;
  billTicketSeparatelyFlag?: boolean;
  billUnapprovedTimeExpenseFlag?: boolean;
  overrideBillingSetupFlag?: boolean;
  dispatchMember?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  serviceManagerMember?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  dutyManagerMember?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  oncallMember?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  workRole?: {
    id?: number;
    name?: string;
  };
  workType?: {
    id?: number;
    name?: string;
  };
  billTime?: string;
  billExpense?: string;
  billProduct?: string;
  autoAssignNewTicketsFlag?: boolean;
  autoAssignNewECTicketsFlag?: boolean;
  autoAssignNewPortalTicketsFlag?: boolean;
  discussionsLockedFlag?: boolean;
  timeEntryLockedFlag?: boolean;
  notifyEmailFrom?: string;
  notifyEmailFromName?: string;
  closedLoopDiscussionsFlag?: boolean;
  closedLoopResolutionFlag?: boolean;
  closedLoopInternalAnalysisFlag?: boolean;
  timeEntryDiscussionFlag?: boolean;
  timeEntryResolutionFlag?: boolean;
  timeEntryInternalAnalysisFlag?: boolean;
  problemSort?: string;
  resolutionSort?: string;
  internalAnalysisSort?: string;
  emailConnectorAllowReopenClosedFlag?: boolean;
  emailConnectorReopenStatus?: {
    id?: number;
    name?: string;
  };
  emailConnectorReopenResourcesFlag?: boolean;
  emailConnectorNewTicketNoMatchFlag?: boolean;
  emailConnectorNeverReopenByDaysFlag?: boolean;
  emailConnectorReopenDaysLimit?: number;
  emailConnectorNeverReopenByDaysClosedFlag?: boolean;
  emailConnectorReopenDaysClosedLimit?: number;
  useMemberDisplayNameFlag?: boolean;
  sendToCCFlag?: boolean;
  autoAssignTicketOwnerFlag?: boolean;
  autoAssignLimitFlag?: boolean;
  autoAssignLimitAmount?: number;
  closedLoopAllFlag?: boolean;
  percentageCalculation?: string;
  allSort?: string;
  markFirstNoteIssueFlag?: boolean;
  restrictBoardByDefaultFlag?: boolean;
  sendToBundledFlag?: boolean;
}

export interface BoardStatus {
  id?: number;
  name?: string;
  board?: {
    id?: number;
    name?: string;
  };
  sortOrder?: number;
  displayOnBoard?: boolean;
  inactive?: boolean;
  closedStatus?: boolean;
  timeEntryNotAllowed?: boolean;
  roundRobinCatchall?: boolean;
  defaultFlag?: boolean;
  escalationStatus?: string;
  customerPortalFlag?: boolean;
  emailTemplate?: {
    id?: number;
    identifier?: string;
  };
  saveTimeAsNote?: boolean;
}

export interface BoardType {
  id?: number;
  name?: string;
  category?: string;
  defaultFlag?: boolean;
  inactiveFlag?: boolean;
  requestForChangeFlag?: boolean;
  board?: {
    id?: number;
    name?: string;
  };
  location?: {
    id?: number;
    name?: string;
  };
  department?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
}

export interface BoardSubtype {
  id?: number;
  name?: string;
  inactiveFlag?: boolean;
  typeAssociationIds?: number[];
  board?: {
    id?: number;
    name?: string;
  };
}

export interface Company {
  id?: number;
  identifier?: string;
  name?: string;
  status?: {
    id?: number;
    name?: string;
  };
  country?: {
    id?: number;
    name?: string;
  };
  phoneNumber?: string;
  faxNumber?: string;
  territory?: {
    id?: number;
    name?: string;
  };
  dateAcquired?: string;
  annualRevenue?: number;
  timeZoneSetup?: {
    id?: number;
    name?: string;
  };
  leadFlag?: boolean;
  taxCode?: {
    id?: number;
    name?: string;
  };
  billingTerms?: {
    id?: number;
    name?: string;
  };
  billToCompany?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  invoiceDeliveryMethod?: {
    id?: number;
    name?: string;
  };
  deletedFlag?: boolean;
  mobileGuid?: string;
  isVendorFlag?: boolean;
  types?: {
    id?: number;
    name?: string;
  }[];
  site?: {
    id?: number;
    name?: string;
  };
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    connectWiseId?: string;
    value?: string;
  }[];
}

export interface CompanyGroup {
  id?: number;
  group?: {
    id?: number;
    name?: string;
  };
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  defaultContactFlag?: boolean;
  allContactsFlag?: boolean;
  unsubscribeFlag?: boolean;
  contactIds?: number[];
}

export interface CompanySite {
  id?: number;
  name?: string;
  country?: {
    id?: number;
    name?: string;
  };
  addressFormat?: string;
  phoneNumber?: string;
  phoneNumberExt?: string;
  faxNumber?: string;
  expenseReimbursement?: number;
  primaryAddressFlag?: boolean;
  defaultShippingFlag?: boolean;
  defaultBillingFlag?: boolean;
  defaultMailingFlag?: boolean;
  inactiveFlag?: boolean;
  billSeparateFlag?: boolean;
  mobileGuid?: string;
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    connectWiseId?: string;
  }[];
}

export interface CompanyStatus {
  id?: number;
  name?: string;
  defaultFlag?: boolean;
  inactiveFlag?: boolean;
  notifyFlag?: boolean;
  disallowSavingFlag?: boolean;
  customNoteFlag?: boolean;
  cancelOpenTracksFlag?: boolean;
}

export interface CompanyType {
  id?: number;
  name?: string;
  defaultFlag?: boolean;
  vendorFlag?: boolean;
  serviceAlertFlag?: boolean;
}

export interface Configuration {
  id?: number;
  name?: string;
  type?: {
    id?: number;
    name?: string;
  };
  status?: {
    id?: number;
    name?: string;
  };
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  contact?: {
    id?: number;
    name?: string;
  };
  site?: {
    id?: number;
    name?: string;
  };
  locationId?: number;
  location?: {
    id?: number;
    name?: string;
  };
  businessUnitId?: number;
  department?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  notes?: string;
  billFlag?: boolean;
  backupSuccesses?: number;
  backupIncomplete?: number;
  backupFailed?: number;
  backupRestores?: number;
  backupBillableSpaceGb?: number;
  backupYear?: number;
  backupMonth?: number;
  questions?: {
    answerId?: number;
    questionId?: number;
    question?: string;
    sequenceNumber?: number;
    numberOfDecimals?: number;
    fieldType?: string;
    requiredFlag?: boolean;
  }[];
  activeFlag?: boolean;
  mobileGuid?: string;
  companyLocationId?: number;
  showRemoteFlag?: boolean;
  showAutomateFlag?: boolean;
  needsRenewalFlag?: boolean;
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    connectWiseId?: string;
  }[];
}

export interface Contact {
  id?: number;
  firstName?: string;
  lastName?: string;
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  site?: {
    id?: number;
    name?: string;
  };
  addressLine1?: string;
  city?: string;
  state?: string;
  zip?: string;
  inactiveFlag?: boolean;
  title?: string;
  marriedFlag?: boolean;
  childrenFlag?: boolean;
  portalSecurityLevel?: number;
  disablePortalLoginFlag?: boolean;
  unsubscribeFlag?: boolean;
  mobileGuid?: string;
  defaultBillingFlag?: boolean;
  defaultFlag?: boolean;
  companyLocation?: {
    id?: number;
    name?: string;
  };
  communicationItems?: {
    id?: number;
    type?: {
      id?: number;
      name?: string;
    };
    value?: string;
    defaultFlag?: boolean;
    domain?: string;
    communicationType?: string;
  }[];
  types?: unknown[];
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    connectWiseId?: string;
  }[];
  ignoreDuplicates?: boolean;
}

export interface ContactGroup {
  id?: number;
  group?: {
    id?: number;
    name?: string;
  };
  contact?: {
    id?: number;
    name?: string;
  };
  description?: string;
  unsubscribeFlag?: boolean;
  companyUnsubcribedEmailMessage?: string;
  companyGroupUnsubscribedEmailMessage?: string;
  contactUnsubscribedEmailMessage?: string;
  contactGroupUnsubscribedEmailMessage?: string;
}

export interface ContactType {
  id?: number;
  description?: string;
  defaultFlag?: boolean;
  serviceAlertFlag?: boolean;
}

export interface Department {
  id?: number;
  identifier?: string;
  name?: string;
}

export interface Group {
  id?: number;
  name?: string;
  publicFlag?: boolean;
  inactiveFlag?: boolean;
}

export interface Location {
  id?: number;
  ownerLevelId?: number;
  structureLevel?: {
    id?: number;
    name?: string;
  };
  name?: string;
  manager?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  reportsTo?: {
    id?: number;
    name?: string;
  };
  timeZoneSetup?: {
    id?: number;
    name?: string;
  };
  calendar?: {
    id?: number;
    name?: string;
  };
  overrideAddressLine1?: string;
  overrideCity?: string;
  overrideState?: string;
  overrideZip?: string;
  overrideCountry?: {
    id?: number;
    name?: string;
  };
  overridePhoneNumber?: string;
  owaUrl?: string;
  locationFlag?: boolean;
  clientFlag?: boolean;
  workRoleIds?: number[];
  departmentIds?: number[];
}

export interface Member {
  id?: number;
  identifier?: string;
  disableOnlineFlag?: boolean;
  licenseClass?: string;
  enableMobileGpsFlag?: boolean;
  inactiveFlag?: boolean;
  lastLogin?: string;
  firstName?: string;
  lastName?: string;
  hireDate?: string;
  officeEmail?: string;
  mobileEmail?: string;
  homeEmail?: string;
  defaultEmail?: string;
  primaryEmail?: string;
  officePhone?: string;
  officeExtension?: string;
  mobilePhone?: string;
  mobileExtension?: string;
  homePhone?: string;
  homeExtension?: string;
  defaultPhone?: string;
  securityRole?: {
    id?: number;
    name?: string;
  };
  calendarSyncIntegrationFlag?: boolean;
  timebasedOneTimePasswordActivated?: boolean;
  enableLdapAuthenticationFlag?: boolean;
  directionalSync?: {
    id?: number;
    name?: string;
  };
  signature?: string;
  phoneIntegrationType?: string;
  useBrowserLanguageFlag?: boolean;
  title?: string;
  enableMobileFlag?: boolean;
  timeZone?: {
    id?: number;
    name?: string;
  };
  partnerPortalFlag?: boolean;
  stsUserAdminUrl?: string;
  toastNotificationFlag?: boolean;
  memberPersonas?: unknown[];
  adminFlag?: boolean;
  structureLevel?: {
    id?: number;
    name?: string;
  };
  securityLocation?: {
    id?: number;
    name?: string;
  };
  defaultLocation?: {
    id?: number;
    name?: string;
  };
  defaultDepartment?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  restrictLocationFlag?: boolean;
  restrictDepartmentFlag?: boolean;
  workRole?: {
    id?: number;
    name?: string;
  };
  workType?: {
    id?: number;
    name?: string;
  };
  timeApprover?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  expenseApprover?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  hourlyCost?: number;
  includeInUtilizationReportingFlag?: boolean;
  requireExpenseEntryFlag?: boolean;
  requireTimeSheetEntryFlag?: boolean;
  requireStartAndEndTimeOnTimeEntryFlag?: boolean;
  allowInCellEntryOnTimeSheet?: boolean;
  enterTimeAgainstCompanyFlag?: boolean;
  allowExpensesEnteredAgainstCompaniesFlag?: boolean;
  timeReminderEmailFlag?: boolean;
  timeSheetStartDate?: string;
  serviceDefaultLocation?: {
    id?: number;
    name?: string;
  };
  serviceDefaultDepartment?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  serviceDefaultBoard?: {
    id?: number;
    name?: string;
  };
  restrictServiceDefaultLocationFlag?: boolean;
  restrictServiceDefaultDepartmentFlag?: boolean;
  excludedServiceBoardIds?: unknown[];
  teams?: unknown[];
  serviceBoardTeamIds?: unknown[];
  projectDefaultLocation?: {
    id?: number;
    name?: string;
  };
  projectDefaultDepartment?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  projectDefaultBoard?: {
    id?: number;
    name?: string;
  };
  restrictProjectDefaultLocationFlag?: boolean;
  restrictProjectDefaultDepartmentFlag?: boolean;
  excludedProjectBoardIds?: unknown[];
  scheduleDefaultLocation?: {
    id?: number;
    name?: string;
  };
  restrictScheduleFlag?: boolean;
  hideMemberInDispatchPortalFlag?: boolean;
  salesDefaultLocation?: {
    id?: number;
    name?: string;
  };
  restrictDefaultSalesTerritoryFlag?: boolean;
  restrictDefaultWarehouseFlag?: boolean;
  restrictDefaultWarehouseBinFlag?: boolean;
  companyActivityTabFormat?: string;
  invoiceTimeTabFormat?: string;
  invoiceScreenDefaultTabFormat?: string;
  invoicingDisplayOptions?: string;
  agreementInvoicingDisplayOptions?: string;
  autoStartStopwatch?: boolean;
  autoPopupQuickNotesWithStopwatch?: boolean;
  globalSearchDefaultTicketFilter?: string;
  globalSearchDefaultSort?: string;
  phoneSource?: string;
  copyPodLayouts?: boolean;
  copySharedDefaultViews?: boolean;
  copyColumnLayoutsAndFilters?: boolean;
  fromMemberRecId?: number;
  fromMemberTemplateRecId?: number;
}

export interface Project {
  id?: number;
  actualEnd?: string;
  actualHours?: number;
  actualStart?: string;
  billExpenses?: string;
  billingAmount?: number;
  billingMethod?: string;
  billingRateType?: string;
  billingTerms?: {
    id?: number;
    name?: string;
  };
  billProducts?: string;
  billProjectAfterClosedFlag?: boolean;
  billTime?: string;
  billToCompany?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  billToContact?: {
    id?: number;
    name?: string;
  };
  billToSite?: {
    id?: number;
    name?: string;
  };
  billUnapprovedTimeAndExpense?: boolean;
  board?: {
    id?: number;
    name?: string;
  };
  budgetAnalysis?: string;
  budgetFlag?: boolean;
  budgetHours?: number;
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  contact?: {
    id?: number;
    name?: string;
  };
  description?: string;
  currency?: {
    id?: number;
    symbol?: string;
    currencyCode?: string;
    decimalSeparator?: string;
    numberOfDecimals?: number;
    thousandsSeparator?: string;
    negativeParenthesesFlag?: boolean;
    displaySymbolFlag?: boolean;
    currencyIdentifier?: string;
    displayIdFlag?: boolean;
    rightAlign?: boolean;
    name?: string;
  };
  downpayment?: number;
  estimatedEnd?: string;
  percentComplete?: number;
  estimatedExpenseRevenue?: number;
  estimatedHours?: number;
  estimatedProductRevenue?: number;
  estimatedStart?: string;
  estimatedTimeRevenue?: number;
  includeDependenciesFlag?: boolean;
  includeEstimatesFlag?: boolean;
  location?: {
    id?: number;
    name?: string;
  };
  department?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  manager?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  name?: string;
  opportunity?: {
    id?: number;
    name?: string;
  };
  restrictDownPaymentFlag?: boolean;
  scheduledEnd?: string;
  scheduledHours?: number;
  scheduledStart?: string;
  shipToCompany?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  shipToSite?: {
    id?: number;
    name?: string;
  };
  site?: {
    id?: number;
    name?: string;
  };
  status?: {
    id?: number;
    name?: string;
  };
  closedFlag?: boolean;
  type?: {
    id?: number;
    name?: string;
  };
  doNotDisplayInPortalFlag?: boolean;
  poAmount?: number;
  estimatedTimeCost?: number;
  estimatedExpenseCost?: number;
  estimatedProductCost?: number;
  companyLocation?: {
    id?: number;
    name?: string;
  };
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    connectWiseId?: string;
  }[];
}

export interface ProjectTeamMember {
  id?: number;
  projectId?: number;
  hours?: number;
  member?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  projectRole?: {
    id?: number;
    identifier?: string;
  };
  workRole?: {
    id?: number;
    name?: string;
  };
}

export interface ProjectPhase {
  id?: number;
  projectId?: number;
  description?: string;
  board?: {
    id?: number;
    name?: string;
  };
  status?: {
    id?: number;
    name?: string;
  };
  opportunity?: {
    id?: number;
    name?: string;
  };
  department?: {
    id?: number;
    name?: string;
  };
  wbsCode?: string;
  billTime?: string;
  billExpenses?: string;
  billProducts?: string;
  markAsMilestoneFlag?: boolean;
  notes?: string;
  billSeparatelyFlag?: boolean;
  billingMethod?: string;
  scheduledHours?: number;
  actualHours?: number;
  actualStart?: string;
  actualEnd?: string;
  budgetHours?: number;
  locationId?: number;
  businessUnitId?: number;
  hourlyRate?: number;
  billPhaseClosedFlag?: boolean;
  billProjectClosedFlag?: boolean;
  downpayment?: number;
  poNumber?: string;
  poAmount?: number;
  estimatedTimeCost?: number;
  estimatedExpenseCost?: number;
  estimatedProductCost?: number;
  estimatedTimeRevenue?: number;
  estimatedExpenseRevenue?: number;
  estimatedProductRevenue?: number;
  currency?: {
    id?: number;
    symbol?: string;
    currencyCode?: string;
    decimalSeparator?: string;
    numberOfDecimals?: number;
    thousandsSeparator?: string;
    negativeParenthesesFlag?: boolean;
    displaySymbolFlag?: boolean;
    currencyIdentifier?: string;
    displayIdFlag?: boolean;
    rightAlign?: boolean;
    name?: string;
  };
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    connectWiseId?: string;
  }[];
}

export interface ProjectTicket {
  id?: number;
  summary?: string;
  isIssueFlag?: boolean;
  board?: {
    id?: number;
    name?: string;
  };
  status?: {
    id?: number;
    name?: string;
    Sort?: number;
  };
  workRole?: {
    id?: number;
    name?: string;
  };
  workType?: {
    id?: number;
    name?: string;
  };
  project?: {
    id?: number;
    name?: string;
  };
  phase?: {
    id?: number;
    name?: string;
  };
  wbsCode?: string;
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  site?: {
    id?: number;
    name?: string;
  };
  siteName?: string;
  addressLine1?: string;
  city?: string;
  stateIdentifier?: string;
  zip?: string;
  country?: {
    id?: number;
    name?: string;
  };
  contact?: {
    id?: number;
    name?: string;
  };
  contactName?: string;
  contactPhoneNumber?: string;
  contactEmailAddress?: string;
  owner?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  priority?: {
    id?: number;
    name?: string;
    sort?: number;
  };
  serviceLocation?: {
    id?: number;
    name?: string;
  };
  source?: {
    id?: number;
    name?: string;
  };
  opportunity?: {
    id?: number;
    name?: string;
  };
  allowAllClientsPortalView?: boolean;
  customerUpdatedFlag?: boolean;
  automaticEmailContactFlag?: boolean;
  automaticEmailResourceFlag?: boolean;
  automaticEmailCcFlag?: boolean;
  closedFlag?: boolean;
  approved?: boolean;
  subBillingMethod?: string;
  resources?: string;
  billTime?: string;
  billExpenses?: string;
  billProducts?: string;
  location?: {
    id?: number;
    name?: string;
  };
  department?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  scheduleStartDate?: string;
  scheduleEndDate?: string;
  mobileGuid?: string;
  currency?: {
    id?: number;
    symbol?: string;
    currencyCode?: string;
    decimalSeparator?: string;
    numberOfDecimals?: number;
    thousandsSeparator?: string;
    negativeParenthesesFlag?: boolean;
    displaySymbolFlag?: boolean;
    currencyIdentifier?: string;
    displayIdFlag?: boolean;
    rightAlign?: boolean;
    name?: string;
  };
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    connectWiseId?: string;
  }[];
}

export interface ProjectTicketNote {
  id?: number;
  ticketId?: number;
  text?: string;
  detailDescriptionFlag?: boolean;
  internalAnalysisFlag?: boolean;
  resolutionFlag?: boolean;
  issueFlag?: boolean;
  member?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  internalFlag?: boolean;
  externalFlag?: boolean;
}

export interface Schedule {
  id?: number;
  objectId?: number;
  name?: string;
  member?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  dateStart?: string;
  dateEnd?: string;
  reminder?: {
    id?: number;
    name?: string;
  };
  status?: {
    id?: number;
    name?: string;
  };
  type?: {
    id?: number;
    identifier?: string;
  };
  span?: {
    id?: number;
    identifier?: string;
  };
  doneFlag?: boolean;
  acknowledgedFlag?: boolean;
  ownerFlag?: boolean;
  meetingFlag?: boolean;
  mobileGuid?: string;
  hours?: number;
}

export interface Ticket {
  id?: number;
  summary?: string;
  recordType?: string;
  board?: {
    id?: number;
    name?: string;
  };
  status?: {
    id?: number;
    name?: string;
    Sort?: number;
  };
  workRole?: {
    id?: number;
    name?: string;
  };
  workType?: {
    id?: number;
    name?: string;
  };
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  site?: {
    id?: number;
    name?: string;
  };
  siteName?: string;
  addressLine1?: string;
  city?: string;
  stateIdentifier?: string;
  zip?: string;
  country?: {
    id?: number;
    name?: string;
  };
  contact?: {
    id?: number;
    name?: string;
  };
  contactName?: string;
  contactPhoneNumber?: string;
  contactEmailAddress?: string;
  team?: {
    id?: number;
    name?: string;
  };
  priority?: {
    id?: number;
    name?: string;
    sort?: number;
  };
  serviceLocation?: {
    id?: number;
    name?: string;
  };
  source?: {
    id?: number;
    name?: string;
  };
  agreement?: {
    id?: number;
    name?: string;
  };
  severity?: string;
  impact?: string;
  allowAllClientsPortalView?: boolean;
  customerUpdatedFlag?: boolean;
  automaticEmailContactFlag?: boolean;
  automaticEmailResourceFlag?: boolean;
  automaticEmailCcFlag?: boolean;
  closedFlag?: boolean;
  approved?: boolean;
  estimatedExpenseCost?: number;
  estimatedExpenseRevenue?: number;
  estimatedProductCost?: number;
  estimatedProductRevenue?: number;
  estimatedTimeCost?: number;
  estimatedTimeRevenue?: number;
  billingMethod?: string;
  subBillingMethod?: string;
  resolveMinutes?: number;
  resPlanMinutes?: number;
  respondMinutes?: number;
  isInSla?: boolean;
  hasChildTicket?: boolean;
  hasMergedChildTicketFlag?: boolean;
  billTime?: string;
  billExpenses?: string;
  billProducts?: string;
  location?: {
    id?: number;
    name?: string;
  };
  department?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  mobileGuid?: string;
  sla?: {
    id?: number;
    name?: string;
  };
  slaStatus?: string;
  currency?: {
    id?: number;
    symbol?: string;
    currencyCode?: string;
    decimalSeparator?: string;
    numberOfDecimals?: number;
    thousandsSeparator?: string;
    negativeParenthesesFlag?: boolean;
    displaySymbolFlag?: boolean;
    currencyIdentifier?: string;
    displayIdFlag?: boolean;
    rightAlign?: boolean;
    name?: string;
  };
  escalationStartDateUTC?: string;
  escalationLevel?: number;
  minutesBeforeWaiting?: number;
  respondedSkippedMinutes?: number;
  resplanSkippedMinutes?: number;
  respondedHours?: number;
  resplanHours?: number;
  resolutionHours?: number;
  minutesWaiting?: number;
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    connectWiseId?: string;
  }[];
}

export interface TicketNote {
  id?: number;
  ticketId?: number;
  text?: string;
  detailDescriptionFlag?: boolean;
  internalAnalysisFlag?: boolean;
  resolutionFlag?: boolean;
  issueFlag?: boolean;
  contact?: {
    id?: number;
    name?: string;
  };
  dateCreated?: string;
  createdBy?: string;
  internalFlag?: boolean;
  externalFlag?: boolean;
}

export interface TicketTask {
  id?: number;
  ticketId?: number;
  notes?: string;
  closedFlag?: boolean;
  priority?: number;
  summary?: string;
}

export interface Timesheet {
  id?: number;
  member?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  year?: number;
  period?: number;
  dateStart?: string;
  dateEnd?: string;
  status?: string;
  hours?: number;
  deadline?: string;
}

export interface TimeEntry {
  id?: number;
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  companyType?: string;
  chargeToId?: number;
  chargeToType?: string;
  member?: {
    id?: number;
    identifier?: string;
    name?: string;
    dailyCapacity?: number;
  };
  locationId?: number;
  businessUnitId?: number;
  businessGroupDesc?: string;
  workType?: {
    id?: number;
    name?: string;
    utilizationFlag?: boolean;
  };
  workRole?: {
    id?: number;
    name?: string;
  };
  territory?: string;
  timeStart?: string;
  timeEnd?: string;
  hoursDeduct?: number;
  actualHours?: number;
  billableOption?: string;
  notes?: string;
  addToDetailDescriptionFlag?: boolean;
  addToInternalAnalysisFlag?: boolean;
  addToResolutionFlag?: boolean;
  emailResourceFlag?: boolean;
  emailContactFlag?: boolean;
  emailCcFlag?: boolean;
  emailCc?: string;
  hoursBilled?: number;
  invoiceHours?: number;
  hourlyCost?: string;
  enteredBy?: string;
  dateEntered?: string;
  mobileGuid?: string;
  hourlyRate?: number;
  agreementHours?: number;
  agreementAmount?: number;
  agreementAdjustment?: number;
  adjustment?: number;
  invoiceReady?: number;
  timeSheet?: {
    id?: number;
    name?: string;
  };
  status?: string;
  ticket?: {
    id?: number;
    summary?: string;
  };
  ticketBoard?: string;
  ticketStatus?: string;
  ticketType?: string;
  invoiceFlag?: boolean;
  extendedInvoiceAmount?: number;
  locationName?: string;
  taxCode?: {
    id?: number;
    name?: string;
  };
}

export interface ExpenseEntry {
  id?: number;
  expenseReport?: {
    id?: number;
    name?: string;
  };
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  chargeToId?: number;
  chargeToType?: string;
  type?: {
    id?: number;
    name?: string;
  };
  member?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  paymentMethod?: {
    id?: number;
    name?: string;
  };
  classification?: {
    id?: number;
    name?: string;
  };
  amount?: number;
  billableOption?: string;
  date?: string;
  locationId?: number;
  businessUnitId?: number;
  notes?: string;
  invoiceAmount?: number;
  mobileGuid?: string;
  currency?: {
    id?: number;
    symbol?: string;
    currencyCode?: string;
    decimalSeparator?: string;
    numberOfDecimals?: number;
    thousandsSeparator?: string;
    negativeParenthesesFlag?: boolean;
    displaySymbolFlag?: boolean;
    currencyIdentifier?: string;
    displayIdFlag?: boolean;
    rightAlign?: boolean;
    name?: string;
  };
  status?: string;
  billAmount?: number;
  agreementAmount?: number;
  ticket?: {
    id?: number;
    summary?: string;
  };
  project?: {
    id?: number;
    name?: string;
  };
  phase?: {
    id?: number;
    name?: string;
  };
}

export interface ExpenseType {
  id?: number;
  name?: string;
  amountCaption?: string;
  reimbursementRate?: number;
  billExpenses?: string;
  invoiceMarkupOption?: string;
  invoiceMarkupAmount?: number;
  advancedAmountFlag?: boolean;
  mileageFlag?: boolean;
  quantityFlag?: boolean;
  inactiveFlag?: boolean;
  maxAmount?: number;
  defaultFlag?: boolean;
}

export interface Classification {
  id?: number;
  name?: string;
  multiplier?: number;
  defaultFlag?: boolean;
  companyFlag?: boolean;
  employeeFlag?: boolean;
}

export interface PaymentType {
  id?: number;
  name?: string;
  classification?: {
    id?: number;
    name?: string;
  };
  defaultFlag?: boolean;
  companyFlag?: boolean;
}

export interface WorkRole {
  id?: number;
  name?: string;
  hourlyRate?: number;
  inactiveFlag?: boolean;
  locationIds?: number[];
}

export interface WorkType {
  id?: number;
  name?: string;
  billTime?: string;
  rateType?: string;
  rate?: number;
  hoursMin?: number;
  hoursMax?: number;
  inactiveFlag?: boolean;
  overallDefaultFlag?: boolean;
  activityDefaultFlag?: boolean;
  utilizationFlag?: boolean;
  costMultiplier?: number;
}

export interface Priority {
  id?: number;
  name?: string;
  color?: string;
  sortOrder?: number;
  defaultFlag?: boolean;
  imageLink?: string;
  urgencySortOrder?: string;
}

export interface Document {
  id?: number;
  title?: string;
  fileName?: string;
  serverFileName?: string;
  owner?: string;
  linkFlag?: boolean;
  imageFlag?: boolean;
  publicFlag?: boolean;
  htmlTemplateFlag?: boolean;
  readOnlyFlag?: boolean;
  size?: number;
  urlFlag?: boolean;
  createdOnDate?: string;
  documentType?: {
    id?: number;
    name?: string;
  };
  guid?: string;
}

export interface SalesOrder {
  id?: number;
  company?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  contact?: {
    id?: number;
    name?: string;
  };
  phone?: string;
  email?: string;
  site?: {
    id?: number;
    name?: string;
  };
  status?: {
    id?: number;
    name?: string;
  };
  opportunity?: {
    id?: number;
    name?: string;
  };
  orderDate?: string;
  billingTerms?: {
    id?: number;
    name?: string;
  };
  taxCode?: {
    id?: number;
    name?: string;
  };
  poNumber?: string;
  location?: {
    id?: number;
    name?: string;
  };
  department?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  salesRep?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  notes?: string;
  billClosedFlag?: boolean;
  billShippedFlag?: boolean;
  restrictDownpaymentFlag?: boolean;
  description?: string;
  topCommentFlag?: boolean;
  bottomCommentFlag?: boolean;
  shipToCompany?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  shipToSite?: {
    id?: number;
    name?: string;
  };
  billToCompany?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  billToContact?: {
    id?: number;
    name?: string;
  };
  billToSite?: {
    id?: number;
    name?: string;
  };
  productIds?: number[];
  documentIds?: number[];
  invoiceIds?: number[];
  total?: number;
  taxTotal?: number;
  currency?: {
    id?: number;
    symbol?: string;
    currencyCode?: string;
    decimalSeparator?: string;
    numberOfDecimals?: number;
    thousandsSeparator?: string;
    negativeParenthesesFlag?: boolean;
    displaySymbolFlag?: boolean;
    currencyIdentifier?: string;
    displayIdFlag?: boolean;
    rightAlign?: boolean;
    name?: string;
  };
  companyLocation?: {
    id?: number;
    name?: string;
  };
  subTotal?: number;
}

export interface PurchaseOrder {
  id?: number;
  businessUnitId?: number;
  businessUnit?: {
    id?: number;
    name?: string;
  };
  closedFlag?: boolean;
  customerCity?: string;
  customerCompany?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  customerContact?: {
    id?: number;
    name?: string;
  };
  customerCountry?: {
    id?: number;
    name?: string;
  };
  customerName?: string;
  customerPhone?: string;
  customerSite?: {
    id?: number;
    name?: string;
  };
  customerSiteName?: string;
  customerState?: string;
  customerStreetLine1?: string;
  customerStreetLine2?: string;
  customerZip?: string;
  dropShipCustomerFlag?: boolean;
  enteredBy?: string;
  freightTaxTotal?: number;
  internalNotes?: string;
  locationId?: number;
  location?: {
    id?: number;
    name?: string;
  };
  poDate?: string;
  poNumber?: string;
  salesTax?: number;
  status?: {
    id?: number;
    name?: string;
  };
  subTotal?: number;
  taxFreightFlag?: boolean;
  taxPoFlag?: boolean;
  terms?: {
    id?: number;
    name?: string;
  };
  total?: number;
  trackingNumber?: string;
  vendorCompany?: {
    id?: number;
    identifier?: string;
    name?: string;
  };
  vendorContact?: {
    id?: number;
    name?: string;
  };
  vendorSite?: {
    id?: number;
    name?: string;
  };
  currency?: {
    id?: number;
    symbol?: string;
    currencyCode?: string;
    decimalSeparator?: string;
    numberOfDecimals?: number;
    thousandsSeparator?: string;
    negativeParenthesesFlag?: boolean;
    displaySymbolFlag?: boolean;
    currencyIdentifier?: string;
    displayIdFlag?: boolean;
    rightAlign?: boolean;
    name?: string;
  };
  customFields?: {
    id?: number;
    caption?: string;
    type?: string;
    entryMethod?: string;
    numberOfDecimals?: number;
    connectWiseId?: string;
  }[];
}

export interface PurchaseOrderLineItem {
  id?: number;
  backorderedFlag?: boolean;
  canceledFlag?: boolean;
  closedFlag?: boolean;
  description?: string;
  displayInternalNotesFlag?: boolean;
  internalNotes?: string;
  lineNumber?: number;
  packingSlip?: string;
  product?: {
    id?: number;
    identifier?: string;
  };
  purchaseOrderId?: number;
  purchaseOrderNumber?: string;
  quantity?: number;
  receivedQuantity?: number;
  serialNumbers?: string;
  shipDate?: string;
  shipmentMethod?: {
    id?: number;
    name?: string;
  };
  tax?: number;
  trackingNumber?: string;
  unitCost?: number;
  unitOfMeasure?: {
    id?: number;
    name?: string;
  };
  vendorOrderNumber?: string;
  vendorSku?: string;
  dateReceived?: string;
  receivedStatus?: string;
  extCost?: number;
  expectedArrivalDate?: string;
  isDetachAvailable?: boolean;
  batchedFlag?: boolean;
  salesOrder?: {
    id?: number;
    identifier?: string;
  }[];
  ticket?: {
    id?: number;
  };
  invoice?: {
    id?: number;
    invoiceNo?: string;
  };
  project?: {
    id?: number;
    name?: string;
  };
}

export interface SystemInfo {
  version?: string;
  isCloud?: boolean;
  serverTimeZone?: string;
  licenseBits?: {
    name?: string;
    activeFlag?: boolean;
  }[];
  cloudRegion?: string;
  maxWorkFlowRecordsAllowed?: number;
}
