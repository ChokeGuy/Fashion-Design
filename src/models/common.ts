type PaginationParams = {
  _limit: number;
  _page: number;
  _totalRows: number;
};

export type ListResponse<T> = {
  success: boolean;
  result: T[];
  statusCode: number;
  message: string;
  pagination: PaginationParams;
};
export type SingleResponse<T> = {
  success: boolean;
  result: T;
  statusCode: number;
  message: string;
  pagination: PaginationParams;
};
