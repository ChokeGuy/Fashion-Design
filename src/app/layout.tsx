import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section>
            <Nav />

            <main>{children}</main>

            <footer>
              <span>Learn </span>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                href="https://redux.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                href="https://redux-toolkit.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              <span>, </span>
              <a
                href="https://react-redux.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
              ,<span> and </span>
              <a
                href="https://reselect.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reselect
              </a>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
