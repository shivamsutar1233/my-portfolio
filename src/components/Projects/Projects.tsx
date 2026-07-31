import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import Reveal from "@/components/shared/Reveal";
import { secondaryButtonClass, sectionHeadingClass } from "@/lib/styles";
import ProjectCard from "./ProjectCard";
import { featuredProjects, projects } from "./projectsData";

const Projects = () => {
  return (
    <section className=" w-full sm:p-10 px-5 py-10 flex flex-col gap-5">
      <h2 id="projects-heading" className={sectionHeadingClass}>
        Projects
      </h2>
      {featuredProjects.map((project, index) => (
        <Reveal key={project.title} delay={index * 0.1}>
          <ProjectCard {...project} />
        </Reveal>
      ))}
      <Reveal delay={featuredProjects.length * 0.1}>
        <div className="flex justify-center pt-2">
          <Link href="/projects" className={secondaryButtonClass}>
            See all {projects.length} projects
            <MdArrowForward aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;
