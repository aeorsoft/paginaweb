export type ApiResponse<TData> = {
  data: TData;
  error?: string;
};

export type WithId = {
  id: string;
};
