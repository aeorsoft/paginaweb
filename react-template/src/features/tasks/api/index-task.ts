import { queryOptions, useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";
import type { QueryConfig } from "@/lib/react-query";
import type { Task } from "../types/task";

const FALLBACK_TASKS: Task[] = [
  {
    id: "1",
    title: "Draft architecture proposal",
    status: "in-progress",
    dueDate: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Review pull requests",
    status: "todo",
  },
  {
    id: "3",
    title: "Plan product roadmap",
    status: "done",
  },
];

export async function indexTasks(): Promise<Task[]> {
  try {
    const response = await apiClient.get<{ data: Task[] }>("/api/tasks");
    return response.data;
  } catch (error) {
    console.warn("Falling back to mock tasks", error);
    return FALLBACK_TASKS;
  }
}

export const indexTasksQueryOptions = () =>
  queryOptions({
    queryKey: ["tasks"],
    queryFn: indexTasks,
  });

type UseIndexTasksOptions = {
  queryConfig?: QueryConfig<typeof indexTasksQueryOptions>;
};

export function useIndexTasks({ queryConfig }: UseIndexTasksOptions = {}) {
  return useQuery({
    ...indexTasksQueryOptions(),
    ...queryConfig,
  });
}
