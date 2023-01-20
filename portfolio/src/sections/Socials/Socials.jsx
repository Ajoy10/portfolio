import { Icon } from "@iconify/react";
import React from "react";
import Card from "../../components/Card/Card";

import "./style.scss";

export default function Socials() {
  return (
    <section id="socials">
      <h2>Socials</h2>
      <Card>
        <a href="#" className="social-link">
          <Icon icon="ant-design:github-filled" className="icon" />
          <p>Github</p>
        </a>
        <a href="#" className="social-link">
          <Icon icon="ant-design:linkedin-filled" className="icon" />
          <p>Linkedin</p>
        </a>
        <a href="#" className="social-link">
          <Icon icon="simple-icons:hackerrank" className="icon" />
          <p>HackerRank</p>
        </a>
      </Card>
    </section>
  );
}
