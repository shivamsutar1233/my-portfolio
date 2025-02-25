import { MdOutlineOpenInNew } from "react-icons/md";
const Projects = () => {
  return (
    <section className=" w-full p-10 flex flex-col gap-5">
      <section className="flex flex-col gap-5">
        <section className="flex flex-col gap-2">
          <h1 className="text-xl text-cyan-400 dark:text-cyan-800 font-semibold flex  items-center gap-1">
            Isro web
            <a href="https://isro.alphasquare.in/" className="cursor-pointer">
              <MdOutlineOpenInNew className=" text-cyan-400 dark:text-cyan-800" />
            </a>
          </h1>
          {/* Short description of isro web project */}
          <p>
            It is a website that provides information about ISRO. It is a simple
            website that showcases the achievements and missions of ISRO.
          </p>
        </section>
        <iframe
          src="https://isro.alphasquare.in/"
          className="h-[35rem] w-full "
        ></iframe>
      </section>
      <section className="flex flex-col gap-5">
        <section className="flex flex-col gap-2">
          <h1 className="text-xl text-cyan-400 dark:text-cyan-800 font-semibold flex  items-center gap-1">
            Car Rental
            <a
              href="https://www.car-rental.alphasquare.in/"
              className="cursor-pointer"
            >
              <MdOutlineOpenInNew className=" text-cyan-400 dark:text-cyan-800" />
            </a>
          </h1>
          {/* Short description of car rental project */}
          <p>
            It is a website that provides car rental services. It is a simple
            website that showcases the cars available for rent.
          </p>
        </section>
        <iframe
          src="https://www.car-rental.alphasquare.in/"
          className="h-[35rem] w-full"
        ></iframe>
      </section>
    </section>
  );
};

export default Projects;
