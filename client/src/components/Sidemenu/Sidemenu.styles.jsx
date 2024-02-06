import styled, { css } from "styled-components";
import { devices } from "../../assets/breakpoint"; 

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  top: 60px;
  bottom: 0;
  z-index: 10;
  display: none;

  @media ${devices.mobileL} {
    display: block;

    ${(props) => {
      switch (props.$mode) {
        case "open":
          return css`
            left: 0;
            right: 0;
          `;
        default:
          return css`
            right: -100%;
          `;
      }
    }}
  }
  @media ${devices.tablet} {
    display: block;

    ${(props) => {
      switch (props.$mode) {
        case "open":
          return css`
            left: 0;
            right: 0;
          `;
        default:
          return css`
            right: -100%;
          `;
      }
    }}
  }
`;

export const SidebarC = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  width: 80%;
  background-color: #fff;
  position: fixed;
  top: 60px;
  bottom: 0;
  transition: 800ms;

  ${(props) => {
    switch (props.$mode) {
      case "open":
        return css`
          right: 0;
        `;
      default:
        return css`
          right: -80%;
        `;
    }
  }}

  @media ${devices.mobileL} {
  }
`;
