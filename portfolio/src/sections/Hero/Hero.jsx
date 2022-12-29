import { Icon } from "@iconify/react";
import React from "react";
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
          <a href="#" className="button primary">
            Projects
          </a>
          <a href="#" className="button secondary">
            Contact
          </a>
        </div>
        <div className="socials">
          <a href="#" className="button social">
            <Icon icon="ant-design:linkedin-filled" height="36" />
          </a>
          <a href="#" className="button social">
            <Icon icon="ant-design:github-filled" height="36" />
          </a>
        </div>
      </div>
    </main>
  );
}
