"use client";

import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import type { JSX } from "react/jsx-runtime";

export function StoreProvider({ children }: { children: ReactNode }): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
