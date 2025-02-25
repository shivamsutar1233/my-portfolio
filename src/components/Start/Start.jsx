import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
const Start = () => {
  return (
    <section className=" w-full p-10">
      {/* My name and what I do */}
      <section className="flex flex-col w-full items-start p-10">
        <h1 className="text-6xl font-bold p-5">Hi, I'm Shivam Sutar</h1>
        <p className="text-xl text-center px-5">I'm a full-stack developer</p>
        <p className="text-4xl text-center px-5 font-semibold">
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
            style={{ fontSize: "1.5em" }}
            repeat={Infinity}
          />
        </p>
      </section>
      <section className="p-10 px-15 grid grid-cols-12">
        <FaReact className="text-5xl" />
        <RiTailwindCssFill className="text-5xl" />
        <FaJs className="text-5xl" />
        <AiOutlineDotNet className="text-5xl" />
        <SiRedux className="text-5xl" />
      </section>
      <section className="p-10">
        <p className="text-2xl p-5 text-gray-400">Let me show you...</p>
      </section>
    </section>
  );
};

export default Start;
