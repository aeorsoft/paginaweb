import { renderToString } from "react-dom/server";
import type { ReactElement } from "react";
import { AppProviders } from "@/app/providers";

export function renderWithProviders(element: ReactElement) {
  return renderToString(<AppProviders>{element}</AppProviders>);
}
