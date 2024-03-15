import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import { jost } from "./fonts";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html className={`${jost.variable}`} lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
