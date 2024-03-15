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
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 2,
    top: 2,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0",
  },
}));

const NAV_LINKS = ["WOMEN", "MEN", "KID", "ACCESSORIES", "BLOG", "CONTACT"];

export const Nav = () => {
  const pathname = usePathname();
  const [openSearch, setOpenSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = debounce(() => {
    // Call your API here with the searchInput value
  }, 300);

  useEffect(() => {
    handleSearch();
    // Cleanup the debounced function on unmount
    return () => {
      handleSearch.cancel();
    };
  }, [searchInput, handleSearch]);

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
                return (
                  <Link
                    key={link}
                    className="font-semibold"
                    href={`/${link.toLowerCase()}`}
                  >
                    {link}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex gap-x-4 items-center">
            <Link href={"/login"}>
              <PersonOutlineIcon className="text-[1.75rem]" />
            </Link>
            <div className="" onClick={handleOpenSearch}>
              {!openSearch ? (
                <SearchIcon className="cursor-pointer text-[1.75rem] animate-appear" />
              ) : (
                <CloseIcon className="cursor-pointer text-[1.75rem] animate-appear" />
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
                <NotificationsNoneIcon className="text-[1.75rem]" />
              </StyledBadge>
            </div>
            <div>
              <Link href={"/cart"}>
                <StyledBadge badgeContent={0} color="error" showZero max={999}>
                  <WorkOutlineIcon className="text-[1.75rem]" />
                </StyledBadge>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:hidden items-center gap-x-4 md:gap-x-8  justify-center flex">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                key={link}
                className="font-semibold"
                href={`/${link.toLowerCase()}`}
              >
                {link}
              </Link>
            );
          })}
        </div>
      </nav>
      {openSearch && (
        <div className="pt-[124px] bg-white absolute bottom-0 left-0 right-0 z-10 h-screen animate-appear">
          <div className="container pt-7">
            <div className="">
              <p className="mb-2.5 flex justify-between items-center">
                What are you looking for?{" "}
                <span>
                  <CloseIcon
                    onClick={handleOpenSearch}
                    className="cursor-pointer text-[1.25rem] font-bold animate-appear"
                  />
                </span>
              </p>
              <form className="relative ">
                <input
                  type="text"
                  value={searchInput}
                  placeholder="Search your favorite products..."
                  className="w-full border-0 border-b-2 border-border-color focus:border-text-light-color
                   py-4 text-sm focus:outline-0 focus:ring-0"
                  onChange={(e) => handleChange(e)}
                />
                <SearchIcon className="cursor-pointer text-[2rem] absolute right-2 top-[25%]" />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
