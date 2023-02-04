import React, { useEffect } from "react";
import "./style.scss";
import logo from "../../logo.svg";

import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const OnSidebarCloseHandler = () => {
    setSideBarOpen(false);
  };

  const OnSidebarOpenHandler = () => {
    setSideBarOpen(true);
  };

  // Disabling scrollign once sidebar is open
  useEffect(() => {
    if (sideBarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sideBarOpen]);

  return (
    <header>
      <div id="logo">
        <img src={logo} alt="Ajoy, logo" />
      </div>
      <div
        id="mobile-menu"
        className="hide-on-desktop"
        onClick={OnSidebarOpenHandler}
      >
        <Icon icon={"ant-design:menu-outlined"} height="32" />
      </div>
      {sideBarOpen ? <Sidebar onCloseHandler={OnSidebarCloseHandler} /> : <></>}
      <NavLinks className="hide-on-mobile" />
    </header>
  );
}

const NavLinks = ({ className, onCloseHandler = null }) => {
  return (
    <nav className={className || ""}>
      <div className="nav-link" onClick={onCloseHandler}>
        <a href="#skills">Skills</a>
      </div>
      <div className="nav-link" onClick={onCloseHandler}>
        <a href="#projects">Projects</a>
      </div>
      <div className="nav-link" onClick={onCloseHandler}>
        <a href="#">Resume</a>
      </div>
      <div className="nav-link" onClick={onCloseHandler}>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

const Sidebar = ({ onCloseHandler }) => {
  return (
    <div
      className="sidebar-wrapper"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onCloseHandler();
        }
      }}
    >
      <div className="sidebar hide-on-desktop">
        <div id="sidebar-top">
          <Icon
            icon={"ant-design:close-outlined"}
            height="32"
            onClick={onCloseHandler}
          />
        </div>
        <div className="sidebar-content">
          <NavLinks onCloseHandler={onCloseHandler} />
        </div>
      </div>
    </div>
  );
};
