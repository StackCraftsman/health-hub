import React from "react";
import {
  MdKeyboardBackspace,
  MdOutlineEmail,
} from "react-icons/md";
// import { GiDna1 } from "react-icons/gi";
// import { TbDisabled } from "react-icons/tb";
// import { RiVirusLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { SubHeading } from "../../components/heading/heading.component";
import { Figure, Img } from "../../components/img/img.styled";
import { Section } from "../../containers/container.styled";
// import avi from '../../assets/images/user-avatar.png'
import avi from "../../assets/images/img1.jpg";
import { Banner, Div } from "./detail.style";
import { Icon } from "../../components/icon/icon.styled";
import {
  BsFillPlusCircleFill,
  BsGenderAmbiguous,
  BsQuestionSquare,
  BsTelephone,
} from "react-icons/bs";
import { useProfileById } from "../../services/queries/req.query";
import { ProfileHeadLoader } from "../../components/Loader/loaders";

const StaffDetail = () => {
  const { profileId } = useParams();
  const { isLoading, data } = useProfileById(profileId);
   if (isLoading) {
     return <ProfileHeadLoader />;
   }
  
  return (
    <Section>
      <Banner>
        <Link to="/dashboard/staff">
          {" "}
          <MdKeyboardBackspace style={{ fontSize: "1.8rem", color: "black" }} />
        </Link>
      </Banner>
      <Div banner>
        <Figure detail>
          <Img src={avi} alt="user's avatar" />
        </Figure>
        <div>
          <div>
            <h2>
              {data?.first_name} {data?.last_name}
            </h2>
            <SubHeading bio>{data?.file_no}</SubHeading>
          </div>
          <Div bio>
            <div>
              <a href={`mailto:${data?.email}`}>
                <Div icon>
                  <Icon detail>
                    <MdOutlineEmail />
                  </Icon>
                  <SubHeading bio>{data?.email}</SubHeading>
                </Div>
              </a>
              <a href={`tel:${data?.phone}`}>
                <Div icon>
                  <Icon detail>
                    <BsTelephone />
                  </Icon>
                  <SubHeading bio>{data?.phone}</SubHeading>
                </Div>
              </a>
              {/* <Div icon>
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
              </Div> */}
            </div>
            <div>
              <Div icon>
                <Icon detail>
                  <BsGenderAmbiguous />
                </Icon>
                <SubHeading bio>Sex: {data?.sex}</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <BsQuestionSquare />
                </Icon>
                <SubHeading bio>Status: {data?.status ? "off duty": "on duty"}</SubHeading>
              </Div>
            </div>
          </Div>
        </div>
      </Div>
      <hr />
      <Link to="new_entry">
        <Icon add>
          <BsFillPlusCircleFill title="New Entry" />
        </Icon>
      </Link>
    </Section>
  );
};

export default StaffDetail;
