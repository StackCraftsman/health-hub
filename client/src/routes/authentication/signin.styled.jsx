import styled, { css } from "styled-components";
import { devices } from "../../assets/breakpoint";
import img from "../../assets/images/login-bg.jpg";

export const LoginContainer = styled.div`
  display: flex;
`;

export const Section = styled.section`
  width: 50%;
  height: 100vh;
  padding: 30px;

@media ${devices.mobileL} {
        width: 100%;
      }
  ${(props) =>
    props.left &&
    css`
      background-image: url("${img}");
      background-position: center;
      background-size: cover;
      backround-repeat: norepeatg;

      @media ${devices.mobileL} {
        display: none;
      }
    `}
`;
