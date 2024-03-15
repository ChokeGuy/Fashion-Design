"use client";
import React, { useState } from "react";
import { Nav } from "../components/Nav";

type Props = {
  children: React.ReactNode;
};

const HomePageLayout = ({ children }: Props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <section>
      <div className="bg-banner-color text-white text-center grid place-content-center relative z-20">
        <p className="text-ssm px-8 py-2.5">
          SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY
          - OFF 50%!
        </p>
      </div>
      <Nav openSearch={openSearch} handleOpenSearch={handleOpenSearch} />

      {!openSearch && (
        <React.Fragment>
          <main className="h-screen container animate-appear">{children}</main>

          {/* Add your footer component here */}
          <footer className="animate-appear">
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
        </React.Fragment>
      )}
    </section>
  );
};

export default HomePageLayout;
