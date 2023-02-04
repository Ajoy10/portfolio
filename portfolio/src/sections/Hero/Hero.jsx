import { Icon } from "@iconify/react";
import React from "react";
import { github_link, linkedin_link } from "../../utils/links";
import "./style.scss";

export default function Hero() {
  return (
    <main>
      <h1>
        Hello,
        <br />
        I am Ajoy,
        <br />
        <span id="highlight">Full Stack Web Developer</span>
        <br />
      </h1>
      <div className="cta">
        <div className="buttons">
          <a href="#projects" className="button primary">
            Projects
          </a>
          <a href="#contact" className="button secondary">
            Contact
          </a>
        </div>
        <div className="socials">
          <a
            href={github_link}
            target="_blank"
            rel="noreferrer"
            className="button social"
          >
            <Icon icon="ant-design:github-filled" height="36" />
          </a>
          <a
            href={linkedin_link}
            target="_blank"
            rel="noreferrer"
            className="button social"
          >
            <Icon icon="ant-design:linkedin-filled" height="36" />
          </a>
        </div>
      </div>
    </main>
  );
}
