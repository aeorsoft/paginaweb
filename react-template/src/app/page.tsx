import { Suspense } from "react";
import { Hero } from "@/components/marketing/hero";
import { IndexTaskList } from "@/features/tasks/components/index-task-list";

export default function Home() {
  return (
    <div className="space-y-14">
      <Hero />
      <section className="space-y-4">
        <header className="space-y-1">
          <h2 className="text-xl font-semibold">Recently assigned tasks</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            This section lives in the tasks feature module and showcases how to
            integrate feature-specific APIs, hooks, and components.
          </p>
        </header>
        <Suspense fallback={<p className="text-sm text-gray-500">Loading tasks…</p>}>
          <IndexTaskList />
        </Suspense>
      </section>
    </div>
  );
}
