import styled, { css } from "styled-components";
import { devices } from "../../assets/breakpoint";

export const Header = styled.header`
  background-color: unset;
  display: flex;
  align-items: center;
  width: 100%;

  ${(props) =>
    props.lp &&
    css`
      justify-content: space-around;
      
      @media ${devices.mobileL} {
        justify-content: space-between;
      }
    `}

  ${(props) =>
    props.dashboard &&
    css`
      background-color: #ffffff;
      padding: 0 20px;
      justify-content: space-between;
    `}
`;

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  ${(props) =>
    props.avatar &&
    css`
      cursor: pointer;
    `}
`;

export const Dropdown = styled.div`
  position: absolute;
  width: 120px;
  padding: 20px 10px;
  right: 0;
  background-color: #fff;
  box-shadow: 3px 3px 7px 4px rgba(0, 0, 0, 0.25);
  top: 70px;
`;
