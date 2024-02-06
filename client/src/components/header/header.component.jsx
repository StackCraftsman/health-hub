import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Figure, Img } from "../img/img.styled";
import { Dropdown, Header, Nav } from "./header.styled";
import img from "../../assets/logo/health-hub-logo-dark.png";
import avi from "../../assets/images/user-avatar.png";
import { BsQuestion } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Icon } from "../icon/icon.styled";
const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setOpen(!open);
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <Header dashboard>
      <Figure logo>
        <Link to="/dashboard">
          <Img src={img} alt="Health Hub logo" />
        </Link>
      </Figure>
      <Nav>
        <Icon header>
          <BsQuestion title="help" />
        </Icon>
        <Icon header>
          <IoMdNotificationsOutline title="notification" />
        </Icon>
        <Nav avatar onClick={() => setOpen(!open)}>
          <Figure avi>
            <Img src={avi} alt="avatar" />
          </Figure>
          <p>{localStorage.getItem("fullname")}</p>
        </Nav>
        {open ? (
          <Dropdown>
            <Link to="/profile" onClick={() => setOpen(!open)}>
              <p>Profile</p>
            </Link>
            <p
              style={{ color: "red", cursor: "pointer" }}
              onClick={handleLogout}
            >
              Sign Out
            </p>
          </Dropdown>
        ) : null}
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
