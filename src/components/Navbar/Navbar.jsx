import { MdLightMode, MdDarkMode } from "react-icons/md";
import StyledLink from "./StyledLink";
const Navbar = ({ setTheme, theme }) => {
  return (
    <section className="flex justify-between items-center p-4 text-2xl">
      <a href="/">
        <section className="flex items-baseline space-x-2">
          {"<"}Shivam Sutar{"/>"}
        </section>
      </a>
      <section className="flex items-center space-x-2 text-sm">
        <StyledLink title={"Start"} />
        <StyledLink title={"About"} />
        <StyledLink title={"Projects"} />
        <StyledLink title={"Contact"} />
      </section>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 hover:cursor-pointer"
      >
        {theme === "light" ? (
          <MdDarkMode className="text-black " />
        ) : (
          <MdLightMode className=" dark:text-white" />
        )}
      </button>
    </section>
  );
};

export default Navbar;
