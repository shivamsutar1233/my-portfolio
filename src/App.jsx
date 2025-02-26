import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Modal from "./components/Contact/Modal";
import Navbar from "./components/Navbar/Navbar";
import NavigationLine from "./components/Navigation/NavigationLine";
import Projects from "./components/Projects/Projects";
import Start from "./components/Start/Start";
import React, { useMemo } from "react";
function App() {
  const [theme, setTheme] = React.useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light"
  );
  const [show, setShow] = React.useState(false);

  useMemo(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <section className="app-container h-full min-h-screen bg-white text-black dark:bg-black dark:text-white relative">
      <Navbar setTheme={setTheme} theme={theme} />
      {/* section for start */}
      <section
        id="Start"
        className=" relative lg:pl-48 md:pl-28 sm:pl-20 pl-10"
      >
        <NavigationLine title={"Start"} />
        <section className="flex justify-center pt-10 ">
          <Start />
        </section>
      </section>
      {/* section for projects */}
      <section
        id="Projects"
        className=" relative lg:pl-48 md:pl-28 sm:pl-20 pl-10"
      >
        <NavigationLine title={"Projects"} />
        <section className="flex justify-center pt-10 ">
          <Projects />
        </section>
      </section>
      {/* section for about */}
      <section id="About" className=" relative lg:pl-28 md:pl-10 sm:pl-0 ">
        <NavigationLine title={"About"} />
        <section className="flex justify-center pt-10">
          <About theme={theme} />
        </section>
      </section>
      {/* section for contact */}
      <section
        id="Contact"
        className=" relative lg:pl-48 md:pl-28 sm:pl-20 pl-10"
      >
        <NavigationLine title={"Contact"} />
        <section className="flex justify-center pt-10">
          <Contact setShow={setShow} />
        </section>
      </section>
      <section className="min-h-10 lg:pl-56 md:pl-32 sm:pl-24 pl-12">
        {"Made with </> by Shivam Sutar. Inspired by "}
        <a
          href="https://yasio.dev/"
          target="_blank"
          className="text-cyan-400 dark:text-cyan-800"
        >
          Yasio.dev
        </a>
      </section>
      {show && <Modal setShow={setShow} />}
    </section>
  );
}

export default App;
