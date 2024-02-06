import React from "react";
import { BsGenderAmbiguous, BsTelephone } from "react-icons/bs";
import { GiDna1 } from "react-icons/gi";
import {
  MdCalendarViewMonth,
  MdKeyboardBackspace,
  MdOutlineBloodtype,
  MdOutlineEmail,
  MdOutlineSick,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {
  SecHeading,
  SubHeading,
} from "../../components/heading/heading.component";
import { Icon } from "../../components/icon/icon.styled";
import { Figure, Img } from "../../components/img/img.styled";
import { Banner, Div } from "../Detail/detail.style";
import avi from "../../assets/images/img1.jpg";

const UserProfile = () => {
  return (
    <>
      {" "}
      <Banner>
        <Link to="/dashboard/overview">
          {" "}
          <MdKeyboardBackspace style={{ fontSize: "1.8rem", color: "black" }} />
        </Link>
      </Banner>
      <Div banner>
        <Figure detail>
          <Img src={avi} alt="user's avatar" />
        </Figure>
        <div style={{width: "80%"}}>
          <div style={{ paddingBottom: "20px" }}>
            <SecHeading name>Firstname Lastname</SecHeading>
            <SubHeading bio>S2022000034</SubHeading>
          </div>
          <div>
            <Div profile>
              <SubHeading profile>Contact Information</SubHeading>
              <a href="mailto:johndoe@gmail.com">
                <Div icon>
                  <Icon detail>
                    <MdOutlineEmail />
                  </Icon>
                  <SubHeading bio>johndoe@gmail.com</SubHeading>
                </Div>
              </a>
              <a href="tel:+234809237289">
                <Div icon>
                  <Icon detail>
                    <BsTelephone />
                  </Icon>
                  <SubHeading bio>+234 8092 37289</SubHeading>
                </Div>
              </a>
            </Div>
            <Div profile>
              <SubHeading profile>Basic Information</SubHeading>
              <Div icon>
                <Icon detail>
                  <BsGenderAmbiguous />
                </Icon>
                <SubHeading bio>Sex: Male</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <MdCalendarViewMonth />
                </Icon>
                <SubHeading bio>Date of Birth: 23rd March 2011</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <MdOutlineBloodtype />
                </Icon>
                <SubHeading bio>Blood Group: O+</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <GiDna1 />
                </Icon>
                <SubHeading bio>Genotype: AS</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <MdOutlineSick />
                </Icon>
                <SubHeading bio>Allegies: Penicillin</SubHeading>
              </Div>
            </Div>
            <Div profile>
              <SubHeading profile>Employment Information</SubHeading>
            </Div>
          </div>
        </div>
      </Div>
    </>
  );
};

export default UserProfile;
