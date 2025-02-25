import Navbar from "./components/Navbar/Navbar";
import NavigationLine from "./components/Navigation/NavigationLine";
import React, { useMemo } from "react";
function App() {
  const [theme, setTheme] = React.useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light"
  );

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
      {/* <NavigationLine /> */}
      {/* section for start */}
      <section id="Start" className=" relative">
        <NavigationLine title={"Start"} />
        <section className="flex justify-center items-center h-screen">
          <section className="text-3xl">Start</section>
        </section>
      </section>
      {/* section for about */}
      <section id="About" className=" relative">
        <NavigationLine title={"About"} />
        <section className="flex justify-center items-center h-screen">
          <section className="text-3xl">About</section>
        </section>
      </section>
      {/* section for projects */}
      <section id="Projects" className=" relative">
        <NavigationLine title={"Projects"} />
        <section className="flex justify-center items-center h-screen">
          <section className="text-3xl">Projects</section>
        </section>
      </section>
      {/* section for contact */}
      <section id="Contact" className=" relative">
        <NavigationLine title={"Contact"} />
        <section className="flex justify-center items-center h-screen">
          <section className="text-3xl">Contact</section>
        </section>
      </section>
    </section>
  );
}

export default App;
