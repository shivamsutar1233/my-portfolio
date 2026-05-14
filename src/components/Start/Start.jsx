import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../../assets/profile.png";

const Start = () => {
  return (
    <section className="relative w-full sm:p-10 overflow-hidden">
      {/* Blended Background Blobs */}
      <div className="absolute top-10 right-10 -z-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-20 left-10 -z-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-bounce [animation-duration:10s]"></div>

      {/* My name and what I do */}
      <section className="flex flex-col lg:flex-row w-full items-center lg:items-start sm:p-10 gap-10">
        <div className="flex-1">
          <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-black p-5 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-white dark:to-cyan-400">
            Hi, I'm Shivam Sutar
          </h1>
          <p className="text-xl px-5">I'm a full-stack developer</p>
          <p className="lg:text-6xl md:text-4xl sm:text-2xl text-xl text-center lg:text-left px-5 font-semibold">
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
              repeat={Infinity}
            />
          </p>
        </div>
        <div className="flex-shrink-0 p-5 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <img
                src={profileImg}
                alt="Shivam Sutar"
                className="w-64 md:w-72 h-auto max-h-[400px] object-cover rounded-xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sm:p-10 sm:px-15 px-5 grid grid-cols-12 gap-8 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 opacity-50 hover:opacity-100">
        <RiNextjsFill className="lg:text-5xl md:text-3xl sm:text-xl text-lg" />
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
