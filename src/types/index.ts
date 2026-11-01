/**
 * Global shared TypeScript types.
 * Business-agnostic, reusable across features.
 */

/** Generic async operation state */
export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/** Pagination metadata */
export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

/** Paginated response wrapper */
export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
}

/** API response wrapper */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

/** API error response */
export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}

/** Generic key-value option (for select menus, filters) */
export interface SelectOption<T = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

/** Generic named entity */
export interface NamedEntity {
  id: string;
  name: string;
}

/** Contact form base */
export interface ContactBase {
  name: string;
  email: string;
  phone: string;
  message: string;
}
