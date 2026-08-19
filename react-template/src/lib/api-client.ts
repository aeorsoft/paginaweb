import ky, { type KyInstance, type Options } from "ky";
import { env } from "@/config/env";

function resolveUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const trimmedPath = path.replace(/^\/+/, "");

  if (!env.apiUrl) {
    return `/${trimmedPath}`;
  }

  const base = env.apiUrl.endsWith("/") ? env.apiUrl : `${env.apiUrl}/`;
  return new URL(trimmedPath, base).toString();
}

const defaultClient: KyInstance = ky.create({
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

type RequestOptions = Options;

export const apiClient = {
  get<T>(url: string, options?: RequestOptions) {
    return defaultClient.get(resolveUrl(url), options).json<T>();
  },
  post<T>(url: string, json?: unknown, options?: RequestOptions) {
    return defaultClient.post(resolveUrl(url), { ...options, json }).json<T>();
  },
  put<T>(url: string, json?: unknown, options?: RequestOptions) {
    return defaultClient.put(resolveUrl(url), { ...options, json }).json<T>();
  },
  patch<T>(url: string, json?: unknown, options?: RequestOptions) {
    return defaultClient.patch(resolveUrl(url), { ...options, json }).json<T>();
  },
  delete<T>(url: string, options?: RequestOptions) {
    return defaultClient.delete(resolveUrl(url), options).json<T>();
  },
  extend(createOptions?: Options) {
    return defaultClient.extend(createOptions || {});
  },
};

export type ApiClient = typeof apiClient;
