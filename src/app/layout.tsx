import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import { jost } from "./fonts";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
