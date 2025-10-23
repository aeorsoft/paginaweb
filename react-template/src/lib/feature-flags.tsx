"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type FeatureName = "experimentalTasks" | "betaTheme";

type FeatureFlagState = Record<FeatureName, boolean>;

type FeatureFlagContextValue = {
  flags: FeatureFlagState;
  setFlag: (name: FeatureName, enabled: boolean) => void;
};

const FeatureFlagContext = createContext<FeatureFlagContextValue | undefined>(
  undefined,
);

const defaultFlags: FeatureFlagState = {
  experimentalTasks: true,
  betaTheme: false,
};

export function FeatureFlagProvider({ children }: { children: ReactNode }) {
  const [flags, setFlags] = useState<FeatureFlagState>(defaultFlags);

  const value = useMemo<FeatureFlagContextValue>(() => ({
    flags,
    setFlag: (name, enabled) =>
      setFlags((current) => ({
        ...current,
        [name]: enabled,
      })),
  }), [flags]);

  return (
    <FeatureFlagContext.Provider value={value}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export function useFeatureFlag(name: FeatureName) {
  const context = useContext(FeatureFlagContext);

  if (!context) {
    throw new Error("useFeatureFlag must be used within a FeatureFlagProvider");
  }

  return {
    enabled: context.flags[name],
    setEnabled: (enabled: boolean) => context.setFlag(name, enabled),
  } as const;
}
