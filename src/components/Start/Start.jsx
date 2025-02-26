import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
const Start = () => {
  return (
    <section className=" w-full sm:p-10">
      {/* My name and what I do */}
      <section className="flex flex-col w-full items-start sm:p-10">
        <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold p-5">
          Hi, I'm Shivam Sutar
        </h1>
        <p className="text-xl px-5">I'm a full-stack developer</p>
        <p className="lg:text-6xl md:text-4xl sm:text-2xl text-xltext-center px-5 font-semibold">
          <TypeAnimation
            sequence={[
              "I develop WebApps",
              1000,
              "I develop MobileApps",
              1000,
              "I develop APIs",
              1000,
              "I develop DesktopApps",
              1000,
            ]}
            speed={30}
            // style={{ fontSize: "1.5em" }}
            repeat={Infinity}
          />
        </p>
      </section>
      <section className="sm:p-10 sm:px-15 px-5 grid grid-cols-12 gap-8">
        <FaReact className="lg:text-5xl md:text-3xl sm:text-xl text-lg" />
        <RiTailwindCssFill className="lg:text-5xl md:text-3xl sm:text-xl text-lg" />
        <FaJs className="lg:text-5xl md:text-3xl sm:text-xl text-lg" />
        <AiOutlineDotNet className="lg:text-5xl md:text-3xl sm:text-xl text-lg" />
        <SiRedux className="lg:text-5xl md:text-3xl sm:text-xl text-lg" />
      </section>
      <section className="sm:px-10 p-5">
        <p className="lg:text-2xl md:text-xl sm:text-lg text-md sm:p-5 text-gray-400">
          Let me show you...
        </p>
      </section>
    </section>
  );
};

export default Start;
