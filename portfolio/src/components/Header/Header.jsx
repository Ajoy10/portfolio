import React from "react";
import "./style.scss";
import logo from "../../logo.svg";

import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img src={logo} alt="Ajoy, logo" />
      </div>
      <div id="mobile-menu">
        <Icon icon={"ant-design:menu-outlined"} height="38" />
      </div>
    </header>
  );
}
