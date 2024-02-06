import { useState } from "react";
import { Button } from "../components/button/button.styled";
import { Link } from "react-router-dom";
import {
  Footer,
  FooterTop,
  Hamburger,
  HeroContainer,
  HeroPara,
  HeroText,
  Item,
  Li,
  Main,
  Nav,
  Navlink,
  Para,
  Section,
  Service,
  ServicesContainer,
  WhyUs,
} from "./landingPage.styled";
import logoDark from "../assets/logo/health-hub-logo-dark.png";
import logoLite from "../assets/logo/health-hub-logo-lite.png";
import doc from "../assets/illustration/doctors-illustration.svg";
import img1 from "../assets/images/img1.jpg";
import { Figure, Img } from "../components/img/img.styled";
import {
  FaCommentMedical,
  FaHandHoldingMedical,
  FaNotesMedical,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import {
  SecHeading,
  SubHeading,
} from "../components/heading/heading.component";
import { Header } from "../components/header/header.styled";
import { Icon } from "../components/icon/icon.styled";
import TeamComponent from "../components/team/team.component";
import ProductComponent from "../components/product/product.component";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import Sidemenu from "../components/Sidemenu/Sidemenu.component";

const LandingPage = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Header lp>
        <Link to="/">
          <Figure logo>
            <Img src={logoDark} alt="Health hub logo dark" />
          </Figure>
        </Link>
        <Hamburger>
          {menu ? (
            <MdClose onClick={openMenu} />
          ) : (
            <RiMenu4Fill onClick={openMenu} />
          )}
        </Hamburger>
        <Sidemenu display={menu} closeBar={openMenu} />
        <Nav>
          <Navlink href="#home">
            <p>Home</p>
          </Navlink>
          <Navlink href="#services">
            <p>Service</p>
          </Navlink>
          <Navlink href="#about-us">
            <p>About Us</p>
          </Navlink>
          <Navlink href="#contact-us">
            <p>Contact Us</p>
          </Navlink>
          <Link to="/signin">
            <Button primary>Get Started</Button>
          </Link>
        </Nav>
      </Header>
      <Main>
        <Section home id="home">
          <div>
            <HeroText>
              Access your Medical Record,
              <br />
              Anytime Anywhere
            </HeroText>
            <HeroPara>
              Creating faster hospital access for patients in Africa and beyond.
            </HeroPara>
            <HeroContainer>
              <Link to='signin'><Button primary>Get Started</Button></Link>
              <a href="#about-us">
                <p>Learn more</p>
              </a>
            </HeroContainer>
          </div>
          <Figure hero>
            <Img src={doc} alt="undraw doctor illustration" />
          </Figure>
        </Section>
        <Section peek>
          <SecHeading peek>Take a Peek</SecHeading>
          <Para peek>
            Health Hub goal is to create a seamless experience for both patients and
            doctor.
          </Para>
          <ProductComponent />
        </Section>
        <section id="services">
          <SecHeading center>Our Services</SecHeading>
          <ServicesContainer>
            <Service>
              <Icon service>
                <FaCommentMedical />
              </Icon>
              <SubHeading>Consultation</SubHeading>
              <Para>
                Access doctor via chat or video conference for fantastic
                service.
              </Para>
            </Service>
            <Service>
              <Icon service>
                <FaHandHoldingMedical />
              </Icon>
              <SubHeading>Counselling</SubHeading>
              <Para>
                One-on-one matching experience to support your well being.
              </Para>
            </Service>
            <Service>
              <Icon service>
                <FaNotesMedical />
              </Icon>
              <SubHeading>Checkup</SubHeading>
              <Para>
                Keep track of your health to identify stress related dieseas.
              </Para>
            </Service>
          </ServicesContainer>
          <WhyUs>
            <Figure whyus>
              <Img src={img1} alt="doctor showing medical report to patient" />
            </Figure>
            <div>
              <SubHeading>What makes us unique?</SubHeading>
              <ul style={{ padding: "5px 0 15px 0" }}>
                <Li>Top qualified doctors</Li>
                <Li>24/7 customer services</Li>
                <Li>Guaranteed health care</Li>
                <Li>Free consultation</Li>
                <Li>Discount available</Li>
              </ul>
              <Link to="/signin">
                <Button>Get Started</Button>
              </Link>
            </div>
          </WhyUs>
        </section>
        <section id="about-us" style={{ margin: "50px 0" }}>
          <SecHeading center>About Us</SecHeading>
          <Para about>
            Inspired by the need to transform the hospital system from the
            card-file technique which is not only slow but often lead to loss of
            medical records, we came up with this web app to fix that problem
            and help local and under funded hospital around Afica and other 3rd
            world properly manage patient records and information
          </Para>
          <div style={{ margin: "50px 0" }}>
            <SecHeading center>Meet The Team</SecHeading>
            <TeamComponent />
          </div>
        </section>
      </Main>
      <Footer>
        <FooterTop>
          <div>
            <Figure logo>
              <Img src={logoLite} alt="health-hub logo lite" />
            </Figure>
            <p style={{ padding: "20px 0" }}>
            Health Hub is a MedTech company that is committed to
              <br />
              creating healtier hospital experience for patients
            </p>
            <Button alt>Request Demo</Button>
          </div>
          <div>
            <h3>Quick Link</h3>
            <nav>
              <Navlink ft href="#home">
                <Item>Home</Item>
              </Navlink>
              <Navlink ft href="#service">
                <Item>Service</Item>
              </Navlink>
              <Navlink ft href="#about-us">
                <Item>About Us</Item>
              </Navlink>
              <Navlink ft href="#contact-us">
                <Item>Contact Us</Item>
              </Navlink>
            </nav>
          </div>
          <div>
            <h3>Services</h3>
            <Item>Counselling</Item>
            <Item>Counsulting</Item>
            <Item>Dentistry</Item>
          </div>
          <div>
            <h3>Support</h3>
            <Item>Help center</Item>
            <Item>Terms and Condition</Item>
            <Item>Privacy</Item>
          </div>
          <div>
            <h3>Contact</h3>
            <Navlink ft href="mailto:info@Healt-hub.com">
              <Item>info@health-hub.com</Item>
            </Navlink>
            <Navlink ft href="tel:+2348552345678">
              <Item>+234 855 234 5678</Item>
            </Navlink>
            <Item>somewhere in lagos</Item>
            <Item>FAQ</Item>
            <ServicesContainer>
              <Icon ft>
                <TiSocialTwitterCircular />
              </Icon>
              <Icon ft>
                <TiSocialFacebookCircular />
              </Icon>
              <Icon ft>
                <TiSocialLinkedinCircular />
              </Icon>
              <Icon ft>
                <IoLogoInstagram />
              </Icon>
            </ServicesContainer>
          </div>
        </FooterTop>
        <section style={{ textAlign: "center", padding: "10px 0" }}>
          Health hub &copy; 2022. All Right Reversed
        </section>
      </Footer>
    </>
  );
};

export default LandingPage;
