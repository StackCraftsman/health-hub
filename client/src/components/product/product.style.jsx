import styled from "styled-components";
import { devices } from "../../assets/breakpoint";

export const Video = styled.video`
  display: block;
  max-width: 1000px;
  margin: 20px auto;
  width: 95%;

  @media ${devices.mobileL} {
      width: 90%;
      margin-bottom: 0;
  }
`;
