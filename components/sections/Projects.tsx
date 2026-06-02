"use client";

import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

/**
 * Projects Section Component
 * 
 * Displays portfolio projects in a grid:
 * - Project cards with images
 * - Tech stack tags
 * - Links to live demos and GitHub
 */
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects I&apos;ve worked on recently"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

