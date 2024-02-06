import React from "react";
import { Link } from "react-router-dom";
import { Overlay, SidebarC } from "./Sidemenu.styles";

const Sidemenu = ({ display, closeBar }) => {
  return (
    <Overlay $mode={display ? "open" : "close"} onClick={closeBar}>
      <SidebarC $mode={display ? "open" : "close"} onClick={closeBar}>
        <Link to="/" onClick={closeBar}>
          <p>Home</p>
        </Link>
        <a
          href="#services"
          onClick={() => {
            closeBar();
          }}
        >
          <p>Services</p>
        </a>
        <a
          href="#about-us"
          onClick={() => {
            closeBar();
          }}
        >
          <p>About Us</p>
        </a>
        <a
          href="#contact-us"
          onClick={() => {
            closeBar();
          }}
        >
          <p>Contact Us</p>
        </a>
      </SidebarC>
    </Overlay>
  );
};

export default Sidemenu;
