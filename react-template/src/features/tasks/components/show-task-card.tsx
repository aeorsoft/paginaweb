import type { Task } from "../types/task";
import { formatTaskStatus } from "../utils/format-task-status";

export function ShowTaskCard({ task }: { task: Task }) {
  return (
    <article className="space-y-2 rounded-lg border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black">
      <h3 className="text-base font-semibold">{task.title}</h3>
      <dl className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-300">
        <div>
          <dt className="font-medium text-gray-700 dark:text-gray-100">Status</dt>
          <dd>{formatTaskStatus(task.status)}</dd>
        </div>
        {task.dueDate ? (
          <div>
            <dt className="font-medium text-gray-700 dark:text-gray-100">Due</dt>
            <dd>{new Date(task.dueDate).toLocaleDateString()}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}
