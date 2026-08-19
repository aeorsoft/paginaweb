import type { WithId } from "@/types";

export type TaskStatus = "todo" | "in-progress" | "done";

export type Task = WithId & {
  title: string;
  status: TaskStatus;
  dueDate?: string | null;
};
