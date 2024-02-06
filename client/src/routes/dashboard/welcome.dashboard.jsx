import React from "react";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { ImNewspaper } from "react-icons/im";
import { FaCloudSunRain } from "react-icons/fa";
import { Icon } from "../../components/icon/icon.styled";
import { Section } from "../../containers/container.styled";
import { Link } from "react-router-dom";

const WelcomeDashboard = ({ job_type, appointment = null }) => {
  const date = new Date().toUTCString();
  return (
    <Section center>
      <h3>
        Hello {job_type}{" "}
        {localStorage.getItem("fullname") === null
          ? "user"
          : localStorage.getItem("fullname")}
        , Welcome to your Dashboard
      </h3>
      <p>
        Today is {date} and you have {appointment === null ? 0 : appointment}{" "} appointments
        today.
      </p>
      <Icon welcome>
        <a href="https://news.google.com" target="_blank" rel="noreferrer">
          <ImNewspaper title="News" />
        </a>
        <a href="https://weather.com/" target="_blank" rel="noreferrer">
          <FaCloudSunRain title="Weather" />
        </a>
        <Link to="/dashboard/appointment">
          <BsCalendar2WeekFill title="Appointments" />
        </Link>
      </Icon>
    </Section>
  );
};

export default WelcomeDashboard;
