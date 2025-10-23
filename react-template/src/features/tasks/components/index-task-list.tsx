"use client";

import { useIndexTasks } from "../api/index-task";
import { ShowTaskCard } from "./show-task-card";

export function IndexTaskList() {
  const { data: tasks = [], isPending, error, refetch } = useIndexTasks();

  if (isPending) {
    return <p className="text-sm text-gray-500">Loading tasks…</p>;
  }

  if (error) {
    return (
      <div className="space-y-2">
        <p className="text-sm text-red-600">{error.message}</p>
        <button
          type="button"
          onClick={() => refetch()}
          className="text-sm font-medium text-blue-600 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (tasks.length === 0) {
    return <p className="text-sm text-gray-500">No tasks created yet.</p>;
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <ShowTaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
