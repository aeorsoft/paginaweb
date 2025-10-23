import { NextResponse } from "next/server";
import type { Task } from "@/features/tasks/types/task";

const TASKS: Task[] = [
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

export async function GET() {
  return NextResponse.json({ data: TASKS });
}
