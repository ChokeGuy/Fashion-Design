"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logo } from "@/src/assests";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Badge, { BadgeProps } from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useCallback, useState } from "react";
import { debounce } from "lodash";
import TemporaryDrawer from "./Drawer";
import CircularIndeterminate from "./Progress";
import { productApi } from "../apis/productApi";
import { ProductType } from "@/src/models";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dropdown from "./Dropdown";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 2,
    top: 2,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0",
  },
}));

const NAV_LINKS = ["WOMEN", "MEN", "KID", "ACCESSORIES", "BLOG", "CONTACT"];
let input: string;

interface NavProps {
  openSearch: boolean;
  handleOpenSearch: () => void;
}

export const Nav = ({ openSearch, handleOpenSearch }: NavProps) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState<ProductType[] | undefined>([]); // Set the initial state to an empty array
  const [showProducts, setShowProducts] = useState(false); //Show products when focused on search input

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    handleSearch(e.target.value);
    setShowProducts(true);
  };

  const handleFocus = () => {
    setShowProducts(true);
  };

  const handleBlur = () => {
    setShowProducts(false);
  };

  const handleSearch = useCallback(
    debounce(async (name: string) => {
      input = name;
      setIsLoading(true); // Set isLoading to true before making the API call
      try {
        const result = await productApi.getAllProductsByName(name);
        setProducts(result?.result); // Use nullish coalescing operator to handle undefined result
      } finally {
        setIsLoading(false); // Set isLoading to false after the API call is complete
      }
    }, 600),
    []
  );

  return (
    <>
      <nav className="border border-border-color relative z-20">
        <div className="flex items-center lg:h-[5.25rem] h-[4.25rem] container justify-between max-lg:gap-x-8">
          <div className="flex gap-x-12 max-md:flex-col max-md:gap-y-2 items-center">
            <div>
              <Link href={"/"}>
                <Image className="w-[7.5rem]" src={logo} alt="Logo"></Image>
              </Link>
            </div>
            <div className="hidden items-center gap-x-8 justify-between lg:flex">
              {NAV_LINKS.map((link) => {
                if (link === "BLOG" || link === "CONTACT") {
                  return (
                    <Link
                      className="font-bold"
                      key={link}
                      href={`/${link.toLowerCase()}`}
                    >
                      {link}
                    </Link>
                  );
                }
                return (
                  <Link key={link} href={`/${link.toLowerCase()}`}>
                    <Dropdown
                      hoverChildren={
                        <div className="flex gap-x-1 items-center">
                          {link}
                          <div className="pb-1 max-md:hidden">
                            <KeyboardArrowDownIcon />
                          </div>
                        </div>
                      }
                      children={
                        <>
                          <Link href="/hello">Link 1</Link>
                          <Link href="/hello">Link 2</Link>
                          <Link href="/hello">Link 3</Link>
                          <Link href="/hello">Link 4</Link>
                        </>
                      }
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex gap-x-4 items-center max-sm:hidden">
            <Link href={"/login"}>
              <PersonOutlineIcon
                sx={{ fill: "rgba(0,0,0,0.7)" }}
                className="text-[1.75rem]"
              />
            </Link>
            <div onClick={handleOpenSearch}>
              {!openSearch ? (
                <SearchIcon
                  sx={{ fill: "rgba(0,0,0,0.7)" }}
                  className="cursor-pointer text-[1.75rem] animate-fadeIn"
                />
              ) : (
                <CloseIcon
                  sx={{ fill: "rgba(0,0,0,0.7)" }}
                  className="cursor-pointer text-[1.75rem] animate-fadeOut"
                />
              )}
            </div>
            <div>
              <StyledBadge
                badgeContent={0}
                color="error"
                showZero
                max={999}
                className="cursor-pointer"
              >
                <NotificationsNoneIcon
                  sx={{ fill: "rgba(0,0,0,0.7)" }}
                  className="text-[1.75rem]"
                />
              </StyledBadge>
            </div>
            <div>
              <Link href={"/cart"}>
                <StyledBadge badgeContent={0} color="error" showZero max={999}>
                  <WorkOutlineIcon
                    sx={{ fill: "rgba(0,0,0,0.7)" }}
                    className="text-[1.75rem]"
                  />
                </StyledBadge>
              </Link>
            </div>
          </div>
          <div className="hidden max-sm:block cursor-pointer">
            <TemporaryDrawer search={handleOpenSearch} />
          </div>
        </div>
        <div className="lg:hidden items-center gap-x-4 md:gap-x-8  justify-center flex pb-1">
          {NAV_LINKS.map((link) => {
            if (link === "BLOG" || link === "CONTACT") {
              return (
                <Link
                  className="font-bold"
                  key={link}
                  href={`/${link.toLowerCase()}`}
                >
                  {link}
                </Link>
              );
            }
            return (
              <Link key={link} href={`/${link.toLowerCase()}`}>
                <Dropdown
                  hoverChildren={
                    <div className="flex gap-x-1 items-center">
                      {link}
                      <div className="pb-1 max-md:hidden">
                        <KeyboardArrowDownIcon />
                      </div>
                    </div>
                  }
                  children={
                    <>
                      <Link href="/hello">Link 1</Link>
                      <Link href="/hello">Link 2</Link>
                      <Link href="/hello">Link 3</Link>
                      <Link href="/hello">Link 4</Link>
                    </>
                  }
                />
              </Link>
            );
          })}
        </div>
      </nav>
      {openSearch && (
        <div className="pt-[132px] bg-white absolute bottom-0 left-0 right-0 z-10 h-screen animate-appear">
          <div className="container pt-7">
            <div className="">
              <p className="mb-2.5 flex justify-between items-center">
                What are you looking for?{" "}
                <span>
                  <CloseIcon
                    sx={{ fill: "rgba(0,0,0,0.7)" }}
                    onClick={handleOpenSearch}
                    className="cursor-pointer text-[1.25rem] animate-appear"
                  />
                </span>
              </p>
              <form className="relative">
                <input
                  type="text"
                  value={searchInput}
                  placeholder="Search your favorite products..."
                  className="w-full border-0 border-b-2 border-border-color focus:border-text-light-color
                   py-4 text-sm focus:outline-0 focus:ring-0"
                  onChange={(e) => handleChange(e)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {showProducts && (
                  <div
                    className={`absolute z-10 bg-white w-full max-h-[200px] overflow-auto 
                  ${
                    (!products || products.length > 0) &&
                    "border border-border-color"
                  }`}
                  >
                    {products ? (
                      products.map((product) => (
                        <Link
                          href={`/product/${product.name}`}
                          className="p-2 flex items-center justify-between bg-white shadow-md"
                          key={product.id}
                        >
                          <div className="flex items-center gap-x-4">
                            <div
                              className="rounded-md p-1"
                              style={{ backgroundColor: `${product.color}` }}
                            >
                              <Image
                                width={40}
                                height={40}
                                className="size-10"
                                src={product.image}
                                alt={`product-image-${product.id}`}
                              ></Image>
                            </div>
                            <span className="font-bold text-base">
                              {product.name}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-text-color">
                            ${product.price}
                          </span>
                        </Link>
                      ))
                    ) : (
                      <p className="p-2">
                        No products found for {`"${input}"`}
                      </p>
                    )}
                  </div>
                )}
                {!isLoading ? (
                  <SearchIcon
                    sx={{ fill: "rgba(0,0,0,0.7)" }}
                    className="cursor-pointer text-[2rem] absolute right-2 top-[25%] animate-appear"
                  />
                ) : (
                  <CircularIndeterminate />
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
