"use client";
import React, { useState } from "react";
import { Nav } from "../components/Nav";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/src/assests";
import Banner from "../components/Banner";

type Props = {
  children: React.ReactNode;
};

const HomePageLayout = ({ children }: Props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    //Nav section
    <section>
      <div className="bg-banner-color text-white text-center grid place-content-center relative z-20">
        <p className="text-ssm px-8 py-2.5">
          SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY
          - OFF 50%!
        </p>
      </div>
      <Nav openSearch={openSearch} handleOpenSearch={handleOpenSearch} />

      {/* Banner Section */}
      <Banner />

      {!openSearch && (
        <React.Fragment>
          {/* Main Section */}
          <main className="h-screen container animate-appear">{children}</main>

          {/* Footer Section */}
          <footer className="lg:container sssm:px-4 animate-appear ">
            <div className="grid grid-cols-12 gap-x-8 xl:gap-x-[9rem] gap-y-8 border-b border-border-color py-[3.75rem]">
              <div className="col-span-full md:col-span-4 xl:col-span-3 text-sm flex flex-col md:gap-y-4 lg:gap-y-4">
                <Link href="/">
                  <Image
                    className="w-[9rem] aspect-[148/33]"
                    src={logo}
                    alt="Logo"
                  />
                </Link>
                <p>
                  Chào mừng bạn đến với cửa hàng thời trang này. Chúng tôi cung
                  cấp một loạt trang phục thời trang chất lượng xứng đáng với
                  giá tiền.
                </p>
                <span className="whitespace-nowrap">
                  0376399721 – anngo2002@gmail.com
                </span>
              </div>
              <div className="col-span-full md:col-span-3 xl:col-span-2 flex justify-between flex-col">
                <h3 className="text-lg font-bold mb-3">Information</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/returns-privacy">Returns Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-full md:col-span-3 xl:col-span-2 flex justify-between flex-col">
                <h3 className="text-lg font-bold mb-3">Account</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/register">Regsiter</Link>
                  </li>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/orders">My Orders</Link>
                  </li>
                  <li>
                    <Link href="/profiles">Account Details</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-full md:col-span-2 xl:col-span-2 flex justify-between flex-col">
                <h3 className="text-lg font-bold mb-3">Categories</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/men">Men</Link>
                  </li>
                  <li>
                    <Link href="/women">Women</Link>
                  </li>
                  <li>
                    <Link href="/kid">Kid</Link>
                  </li>
                  <li>
                    <Link href="/accessories">Accessories</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-8 text-center text-secondary-color">
              &copy; 2024 Bản quyền thuộc về ngô thừa ân và nguyễn ngọc thắng.
              Vui lòng không sao chép dưới mọi hình thức
            </div>
          </footer>
        </React.Fragment>
      )}
    </section>
  );
};

export default HomePageLayout;
