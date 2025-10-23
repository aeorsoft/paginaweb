"use client";

import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FeatureFlagProvider } from "@/lib/feature-flags";
import { ThemeProvider } from "@/lib/theme";
import { queryConfig } from "@/lib/react-query";

export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: queryConfig }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <FeatureFlagProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FeatureFlagProvider>
    </QueryClientProvider>
  );
}

export default AppProviders;
