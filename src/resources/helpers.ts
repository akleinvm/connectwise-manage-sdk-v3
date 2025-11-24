import type { QueryParams } from '../query/types.js';

/**
 * Helper function for paginated listing that automatically fetches all pages
 * @param listFn - The list function to call for each page
 * @param params - Query parameters (excluding page/pageSize)
 * @param pageSize - Number of items per page (default: 1000, max: 1000)
 * @returns Array of all items across all pages
 */
export async function listAllHelper<T>(
  listFn: (params: QueryParams) => Promise<T[]>,
  params?: Omit<QueryParams, 'page' | 'pageSize'>,
  pageSize: number = 1000
): Promise<T[]> {
  const allItems: T[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const items = await listFn({ ...params, page, pageSize });
    allItems.push(...items);

    if (items.length < pageSize) {
      hasMore = false;
    } else {
      page++;
    }
  }

  return allItems;
}
