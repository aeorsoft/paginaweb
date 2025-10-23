import type { TaskStatus } from "../types/task";

const STATUS_LABELS: Record<TaskStatus, string> = {
  todo: "To Do",
  "in-progress": "In Progress",
  done: "Done",
};

export function formatTaskStatus(status: TaskStatus) {
  return STATUS_LABELS[status];
}
