import { account } from "@/src/assests";
import Image from "next/image";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen w-full grid place-items-center">
      <div className="fixed inset-0 z-0">
        <Image
          width={1920}
          height={1080}
          className="size-full inset-0 object-cover object-center z-0"
          src={account}
          alt="account-img"
        ></Image>
      </div>
      <div className="relative z-10 -top-8">{children}</div>
    </main>
  );
};

export default Layout;
