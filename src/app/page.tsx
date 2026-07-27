import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";
import NavigationLine from "@/components/Navigation/NavigationLine";
import Projects from "@/components/Projects/Projects";
import Start from "@/components/Start/Start";
import Reveal from "@/components/shared/Reveal";

export default function Home() {
  return (
    <div className="app-container h-full min-h-screen bg-white text-black dark:bg-black dark:text-white relative">
      <Navbar />
      <main className="pb-24">
        {/* section for start */}
        <section
          id="Start"
          aria-labelledby="start-heading"
          className="scroll-mt-24 relative lg:pl-48 md:pl-28 sm:pl-20 pl-10"
        >
          <NavigationLine title={"Start"} />
          <section className="flex justify-center pt-10 ">
            <Start />
          </section>
        </section>
        {/* section for projects */}
        <section
          id="Projects"
          aria-labelledby="projects-heading"
          className="scroll-mt-24 relative lg:pl-48 md:pl-28 sm:pl-20 pl-10"
        >
          <NavigationLine title={"Projects"} />
          <section className="flex justify-center pt-10 ">
            <Projects />
          </section>
        </section>
        {/* section for about */}
        <section
          id="About"
          aria-labelledby="about-heading"
          className="scroll-mt-24 relative lg:pl-28 md:pl-10 sm:pl-0 "
        >
          <NavigationLine title={"About"} />
          <section className="flex justify-center pt-10">
            <Reveal>
              <About />
            </Reveal>
          </section>
        </section>
        {/* section for contact */}
        <section
          id="Contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-24 relative lg:pl-48 md:pl-28 sm:pl-20 pl-10"
        >
          <NavigationLine title={"Contact"} />
          <section className="flex justify-center pt-10">
            <Reveal>
              <Contact />
            </Reveal>
          </section>
        </section>
      </main>
    </div>
  );
}
