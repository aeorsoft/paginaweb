import type { Metadata } from "next";
import { IndexTaskList } from "@/features/tasks/components/index-task-list";

export const metadata: Metadata = {
  title: "Tasks",
};

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Team tasks</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          An example feature module built with the Bulletproof React guidelines.
          Replace this with your future production features.
        </p>
      </header>
      <IndexTaskList />
    </div>
  );
}
