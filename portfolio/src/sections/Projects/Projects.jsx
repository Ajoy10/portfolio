import { Icon } from "@iconify/react";
import React from "react";
import Card from "../../components/Card/Card";
import { projects } from "../../utils/projects";

import "./style.scss";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="project">
      <div className="project-image">
        <img
          src={
            project.img_src
              ? project.img_src
              : "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
          }
          alt={project.name + " image"}
        />
      </div>
      <div className="project-details">
        <div className="project-title">{project.name}</div>
        <div className="project-description">{project.description}</div>
        <div className="project-links">
          {project.links &&
            project.links.map((link, index) => {
              return (
                <a href={link.url} key={index}>
                  <Icon icon={link.iconify_code} width="24px" />
                </a>
              );
            })}
        </div>
      </div>
    </Card>
  );
}
