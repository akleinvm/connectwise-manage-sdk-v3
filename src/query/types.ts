/**
 * Common query parameters for ConnectWise API requests
 */
export interface QueryParams {
  /**
   * Search results based on the fields returned in a GET.
   *
   * @example
   * ```
   * board/name='Integration'
   * summary='xyz'
   * board/id in (3,2,4)
   * lastUpdated > [2016-08-20T18:04:26Z]
   * ```
   *
   * Only fields returned in a GET request can be used.
   *
   * **Operators:** `=`, `!=`, `<`, `<=`, `>`, `>=`, `contains`, `like`, `in`, `not`
   *
   * **Data types:**
   * - Strings: Must be surrounded by quotes, e.g. `summary = 'This is my string'` (Accepts *'s for Wild Cards)
   * - Integers: No formatting required, e.g. `board/id = 123`
   * - Boolean: Must be `true` or `false`, e.g. `closedFlag = true`
   * - Datetimes: Must be surrounded by square brackets, e.g. `lastUpdated = [2016-08-20T18:04:26Z]`
   *
   * **Logic Operators:** `and`, `or`
   *
   * @example
   * ```
   * board/name='integration' and summary='xyz'
   * board/name='integration' or board/name='professional services'
   * ```
   *
   * **Reference:** Must have a `/` followed by the field under the reference, e.g. `manufacturer/name`
   */
  conditions?: string;

  /**
   * Allows searching arrays on endpoints that list childConditions under parameters.
   *
   * @example
   * ```
   * communicationItems/value like 'john@Outlook.com' AND communicationItems/communicationType='Email'
   * ```
   *
   * **Operators:** `=`, `!=`, `<`, `<=`, `>`, `>=`, `contains`, `like`, `not`
   */
  childConditions?: string;

  /**
   * Allows searching custom fields when customFieldConditions is listed in the parameters.
   *
   * @example
   * ```
   * caption='TomNumber' AND value != null
   * ```
   *
   * **Operators:** `=`, `!=`, `<`, `<=`, `>`, `>=`, `contains`, `like`, `not`
   */
  customFieldConditions?: string;

  /**
   * Choose which field to sort the results by.
   *
   * @example
   * ```
   * contact/name asc
   * ```
   *
   * **Operators:** `asc` or `desc`
   */
  orderBy?: string;

  /**
   * Limits which information is returned in the response.
   *
   * @example
   * ```
   * id,name,status/id
   * ```
   */
  fields?: string;

  /**
   * Starting with page 1, is the number of pages available based on the current pageSize.
   */
  page?: number;

  /**
   * The number of results returned by each call. Defaulted to 25 and has a maximum of 1,000.
   */
  pageSize?: number;
}

/**
 * Patch operation for updating resources
 */
export interface PatchOperation {
  /**
   * The operation type
   */
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';

  /**
   * The JSON path to the property
   */
  path: string;

  /**
   * The value to set
   */
  value?: unknown;
}

/**
 * Count response from the API
 */
export interface CountResponse {
  /**
   * The count of items
   */
  count: number;
}
