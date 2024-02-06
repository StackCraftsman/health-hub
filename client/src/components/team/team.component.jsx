import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SubHeading } from "../heading/heading.component";
import { Icon } from "../icon/icon.styled";
import { Figure, TeamContainer } from "./team.styled";

const TeamComponent = () => {
  return (
    <TeamContainer>
      <div>
        <Figure team1></Figure>
        <SubHeading>Lemikan samuel</SubHeading>
        <p>Software Engineer - Backend Expert</p>
        <TeamContainer member>
          <Icon team>
            <a
              href="https://github.com/codercruiser"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub title="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/engr-sam-b9846415a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin title="Linkedin" />
            </a>
            <a
              href="https://twitter.com/st_Pardon"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter title="Linkedin" />
            </a>
          </Icon>
        </TeamContainer>
      </div>
      
    </TeamContainer>
  );
};

export default TeamComponent;
