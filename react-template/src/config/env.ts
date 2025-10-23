import { z } from "zod";
import "dotenv/config";

const EnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
});

export const env = (() => {
  const parsed = EnvSchema.safeParse({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  });

  if (!parsed.success) {
    throw new Error(
      `Invalid env provided.\nThe following variables are invalid:\n${Object.entries(
        parsed.error.flatten().fieldErrors,
      )
        .map(([key, value]) => `- ${key}: ${value?.join(", ")}`)
        .join("\n")}`,
    );
  }

  return {
    nodeEnv: process.env.NODE_ENV ?? "development",
    apiUrl: parsed.data.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "",
  } as const;
})();
