/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./Navbar.css";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      {/* <img src={logo} height={50} alt="" /> */}
      <h2>
        Portfo<span>lio.</span>
      </h2>
      <img src={menu_open} onClick={openMenu} className="nav-open" alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-close"
        />
        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className="AnchorLink" offset={20} href="#home">
            <p
              onClick={() => {
                setMenu("home");
                closeMenu();
              }}
            >
              Home
            </p>
          </AnchorLink>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink className="AnchorLink" offset={25} href="#about">
            <p
              onClick={() => {
                setMenu("about");
                closeMenu();
              }}
            >
              About me
            </p>
          </AnchorLink>
        </li>
        <li className={menu === "services" ? "active" : ""}>
          <AnchorLink className="AnchorLink" offset={25} href="#services">
            <p
              onClick={() => {
                setMenu("services");
                closeMenu();
              }}
            >
              Services
            </p>
          </AnchorLink>
        </li>
        <li className={menu === "portfolio" ? "active" : ""}>
          <AnchorLink className="AnchorLink" offset={25} href="#portfolio">
            <p
              onClick={() => {
                setMenu("portfolio");
                closeMenu();
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className="AnchorLink" offset={25} href="#contact">
            <p
              onClick={() => {
                setMenu("contact");
                closeMenu();
              }}
            >
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="AnchorLink" offset={25} href="#contact">
          Contact With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
