import { Icon } from "@iconify/react";
import React from "react";
import Card from "../../components/Card/Card";

import "./style.scss";

export default function Projects() {
  const projects = [
    {
      name: "Project Name 1",
      description:
        "Lorem ipsum dolor sitamet consectetur adipisicing elit. Quidem ducimus, perferendis placeat in impedit rerum necessitatibus voluptate, rem quae suscipit eaque quod libero inventore magnam amet, neque iste expedita laborum!",
      links: [
        {
          url: "#",
          iconify_code: "ant-design:global-outlined",
        },
        {
          url: "#",
          iconify_code: "ant-design:github-outlined",
        },
      ],
      img_src:
        "https://images.unsplash.com/photo-1673968873206-ceb16421a803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Project Name 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid soluta voluptates dignissimos labore corporis magni eligendi excepturi reprehenderit omnis quo.",
    },
  ];
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
