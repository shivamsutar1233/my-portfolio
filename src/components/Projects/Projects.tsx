import { MdOutlineOpenInNew } from "react-icons/md";
import Reveal from "@/components/shared/Reveal";
import { cardClass, sectionHeadingClass } from "@/lib/styles";
import ProjectEmbed from "./ProjectEmbed";

type Project = {
  title: string;
  url: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Lean Angle Studio",
    url: "https://leananglestudio.shop/",
    description:
      "A full-stack gear rental e-commerce platform featuring role-based dashboards, real-time inventory and order management, secure document verification, and integrated payment processing.",
  },
  {
    title: "Isro web",
    url: "https://isro.alphasquare.in/",
    description:
      "It is a website that provides information about ISRO. It is a simple website that showcases the achievements and missions of ISRO.",
  },
  {
    title: "Car Rental",
    url: "https://www.car-rental.alphasquare.in/",
    description:
      "It is a website that provides car rental services. It is a simple website that showcases the cars available for rent.",
  },
];

const Projects = () => {
  return (
    <section className=" w-full sm:p-10 px-5 py-10 flex flex-col gap-5">
      <h2 id="projects-heading" className={sectionHeadingClass}>
        Projects
      </h2>
      {projects.map((project, index) => (
        <Reveal key={project.title} delay={index * 0.1}>
          <section className={`flex flex-col gap-5 p-5 sm:p-6 ${cardClass}`}>
            <section className="flex flex-col gap-2">
              <h3 className="text-xl text-cyan-700 dark:text-cyan-400 font-semibold flex  items-center gap-1">
                {project.title}
                <a
                  href={project.url}
                  className="cursor-pointer rounded transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} in a new tab`}
                >
                  <MdOutlineOpenInNew className="text-cyan-700 dark:text-cyan-400" />
                </a>
              </h3>
              <p className="max-w-2xl leading-relaxed text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </section>
            <ProjectEmbed src={project.url} title={project.title} />
          </section>
        </Reveal>
      ))}
    </section>
  );
};

export default Projects;
