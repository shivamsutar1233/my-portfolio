import { MdLightMode, MdDarkMode } from "react-icons/md";
import StyledLink from "./StyledLink";
import { IoIosMenu } from "react-icons/io";
import React from "react";
import { Divider, SwipeableDrawer } from "@mui/material";
const Navbar = ({ setTheme, theme }) => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  const getNavLinks = () => {
    return (
      <React.Fragment>
        <StyledLink title={"Start"} onClick={setShowSideBar} />
        <StyledLink title={"Projects"} onClick={setShowSideBar} />
        <StyledLink title={"About"} onClick={setShowSideBar} />
        <StyledLink title={"Contact"} onClick={setShowSideBar} />
      </React.Fragment>
    );
  };
  const getThemeIcon = () => {
    return (
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 hover:cursor-pointer "
      >
        {theme === "light" ? (
          <MdDarkMode className="text-black md:text-3xl sm:text-xl text-lg" />
        ) : (
          <MdLightMode className=" dark:text-white md:text-3xl sm:text-xl text-lg" />
        )}
      </button>
    );
  };
  return (
    <section className="flex justify-between items-center p-4 text-2xl">
      <a href="/">
        <section className="flex items-baseline lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold space-x-2">
          {"<"}Shivam Sutar{"/>"}
        </section>
      </a>
      <section className="sm:flex items-center space-x-2 text-sm  hidden">
        {getNavLinks()}
      </section>
      <section className="hidden  sm:block">{getThemeIcon()}</section>
      <button onClick={() => setShowSideBar(true)} className="sm:hidden">
        <IoIosMenu className="md:text-3xl sm:text-xl text-lg sm:hidden cursor-pointer" />
      </button>
      <SwipeableDrawer
        anchor="top"
        key={"top"}
        open={showSideBar}
        onClose={() => setShowSideBar(false)}
        onOpen={() => setShowSideBar(true)}
        className="sm:hidden block "
      >
        <section className="flex flex-col gap-2 p-2 bg-white text-black dark:text-white dark:bg-black">
          {getNavLinks()}
          <Divider />
          {getThemeIcon()}
        </section>
      </SwipeableDrawer>
    </section>
  );
};

export default Navbar;
