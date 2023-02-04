import { Icon } from "@iconify/react";
import React from "react";
import Card from "../../components/Card/Card";
import {
  github_link,
  hacker_rank_link,
  linkedin_link,
} from "../../utils/links";

import "./style.scss";

export default function Socials() {
  return (
    <section id="socials">
      <h2>Socials</h2>
      <Card>
        <a
          href={github_link}
          className="social-link"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="ant-design:github-filled" className="icon" />
          <p>Github</p>
        </a>
        <a
          href={linkedin_link}
          className="social-link"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="ant-design:linkedin-filled" className="icon" />
          <p>Linkedin</p>
        </a>
        <a
          href={hacker_rank_link}
          className="social-link"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="simple-icons:hackerrank" className="icon" />
          <p>HackerRank</p>
        </a>
      </Card>
    </section>
  );
}
