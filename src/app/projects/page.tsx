import type { Metadata } from "next";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Navbar from "@/components/Navbar/Navbar";
import ProjectCard from "@/components/Projects/ProjectCard";
import { projects } from "@/components/Projects/projectsData";
import Reveal from "@/components/shared/Reveal";
import { secondaryButtonClass } from "@/lib/styles";
import { siteConfig } from "@/lib/site-config";

const description =
  "Every project I've built and shipped — full-stack SaaS platforms, WhatsApp commerce, lead management, and web apps built with Next.js, React, Node, and Postgres.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/projects`,
    title: `Projects | ${siteConfig.name}`,
    description,
    siteName: siteConfig.name,
  },
};

export default function ProjectsPage() {
  return (
    <div className="app-container h-full min-h-screen bg-white text-black dark:bg-black dark:text-white relative">
      <Navbar />
      <main className="pb-24">
        <section className="mx-auto w-full max-w-5xl px-5 py-10 sm:p-10 flex flex-col gap-5">
          <Reveal>
            <div className="flex flex-col gap-4">
              <Link
                href="/#Projects"
                className={`${secondaryButtonClass} self-start`}
              >
                <MdArrowBack aria-hidden="true" />
                Back to home
              </Link>
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  All Projects
                </h1>
                <p className="max-w-2xl leading-relaxed text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </div>
            </div>
          </Reveal>

          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </section>
      </main>
    </div>
  );
}
