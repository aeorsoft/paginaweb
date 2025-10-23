import type { DefaultOptions, UseMutationOptions } from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;

export type ApiFnReturnType<Fn extends (...args: unknown[]) => Promise<unknown>> =
  Awaited<ReturnType<Fn>>;

export type QueryConfig<TFactory extends (...args: unknown[]) => unknown> = Omit<
  ReturnType<TFactory>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<
  Fn extends (...args: unknown[]) => Promise<unknown>,
> = UseMutationOptions<ApiFnReturnType<Fn>, Error, Parameters<Fn>[0]>;
