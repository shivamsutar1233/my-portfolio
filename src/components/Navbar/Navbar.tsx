"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { MdLightMode, MdDarkMode, MdMenu } from "react-icons/md";
import { Divider, SwipeableDrawer } from "@mui/material";
import StyledLink from "./StyledLink";
import { useTheme } from "@/context/ThemeContext";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = ["Start", "Projects", "About", "Contact"];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [showSideBar, setShowSideBar] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const getNavLinks = () => (
    <Fragment>
      {SECTION_IDS.map((title) => (
        <StyledLink
          key={title}
          title={title}
          onClick={setShowSideBar}
          isActive={activeId === title}
        />
      ))}
    </Fragment>
  );

  const getThemeIcon = () => (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-300 dark:hover:bg-gray-700 hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
    >
      {theme === "light" ? (
        <MdDarkMode className="text-black md:text-3xl sm:text-xl text-lg" />
      ) : (
        <MdLightMode className=" dark:text-white md:text-3xl sm:text-xl text-lg" />
      )}
    </button>
  );

  return (
    <header className="sticky top-0 z-10 flex justify-between items-center p-4 text-2xl bg-white/80 text-black backdrop-blur-md border-b border-black/5 dark:border-white/10 dark:bg-black/80 dark:text-white">
      <Link
        href="/"
        className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
      >
        <span className="flex items-baseline lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold space-x-2">
          {"<"}Shivam Sutar{"/>"}
        </span>
      </Link>
      <nav
        aria-label="Primary"
        className="sm:flex items-center space-x-2 text-sm  hidden"
      >
        {getNavLinks()}
      </nav>
      <section className="hidden  sm:block">{getThemeIcon()}</section>
      <button
        onClick={() => setShowSideBar(true)}
        aria-label="Open navigation menu"
        className="sm:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 rounded"
      >
        <MdMenu className="md:text-3xl sm:text-xl text-lg sm:hidden cursor-pointer" />
      </button>
      <SwipeableDrawer
        anchor="top"
        key={"top"}
        open={showSideBar}
        onClose={() => setShowSideBar(false)}
        onOpen={() => setShowSideBar(true)}
        className="sm:hidden block "
      >
        <nav
          aria-label="Primary"
          className="flex flex-col gap-2 p-2 bg-white text-black dark:text-white dark:bg-black"
        >
          {getNavLinks()}
          <Divider />
          {getThemeIcon()}
        </nav>
      </SwipeableDrawer>
    </header>
  );
};

export default Navbar;
