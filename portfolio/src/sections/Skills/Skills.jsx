import { Icon } from "@iconify/react";
import React from "react";
import Card from "../../components/Header/Card/Card";
import "./style.scss";

export default function Skills() {
  const skills = [
    {
      title: "Languages",
      skills: [
        {
          icon: { iconify_code: "mdi:language-cpp", iconify_width: "30px" },
          text: "C++",
        },
        {
          icon: { iconify_code: "mdi:language-c", iconify_width: "30px" },
          text: "C",
        },
        {
          icon: {
            iconify_code: "mdi:language-javascript",
            iconify_width: "30px",
          },
          text: "JavaScript",
        },
        {
          icon: { iconify_code: "mdi:language-html5", iconify_width: "30px" },
          text: "HTML",
        },
        {
          icon: { iconify_code: "mdi:language-css3", iconify_width: "30px" },
          text: "CSS",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          icon: { iconify_code: "simple-icons:mongodb", iconify_width: "30px" },
          text: "MongoDB",
        },
        {
          icon: { iconify_code: "cib:mysql", iconify_width: "30px" },
          text: "MySQL",
        },
      ],
    },
    {
      title: "Technologies",
      skills: [
        {
          icon: { iconify_code: "mdi:react", iconify_width: "30px" },
          text: "React JS",
        },
        {
          icon: { iconify_code: "mdi:nodejs", iconify_width: "30px" },
          text: "Node JS",
        },
        {
          icon: { iconify_code: "simple-icons:express", iconify_width: "30px" },
          text: "Express JS",
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          icon: { iconify_code: "mdi:git", iconify_width: "30px" },
          text: "Git",
        },
        {
          icon: { iconify_code: "mdi:wordpress", iconify_width: "30px" },
          text: "WordPress",
        },
      ],
    },
  ];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div id="skills-card-grid">
        {skills.map((ele, ind) => {
          return <SkillsCard data={ele} key={ind} />;
        })}
      </div>
    </section>
  );
}

function SkillsCard({ data }) {
  return (
    <Card>
      <div className="skills-card">
        <h4>{data.title}</h4>
        <div className="skills-list">
          {data.skills.map((ele, ind) => {
            return (
              <div className="skill" key={ind}>
                <div className="icon">
                  <Icon
                    icon={ele.icon.iconify_code}
                    width={ele.icon.iconify_width}
                  />
                </div>
                <div className="text">{ele.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
