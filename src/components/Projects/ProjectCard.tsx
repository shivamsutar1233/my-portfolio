import { MdOutlineOpenInNew } from "react-icons/md";
import { cardClass } from "@/lib/styles";
import ProjectEmbed from "./ProjectEmbed";
import type { Project } from "./projectsData";

/**
 * One project card — shared by the home page section and the /projects page
 * so both stay visually identical.
 */
const ProjectCard = ({ title, url, description }: Project) => {
  return (
    <section className={`flex flex-col gap-5 p-5 sm:p-6 ${cardClass}`}>
      <section className="flex flex-col gap-2">
        <h3 className="text-xl text-cyan-700 dark:text-cyan-400 font-semibold flex  items-center gap-1">
          {title}
          <a
            href={url}
            className="cursor-pointer rounded transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} in a new tab`}
          >
            <MdOutlineOpenInNew className="text-cyan-700 dark:text-cyan-400" />
          </a>
        </h3>
        <p className="max-w-2xl leading-relaxed text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </section>
      <ProjectEmbed src={url} title={title} />
    </section>
  );
};

export default ProjectCard;
