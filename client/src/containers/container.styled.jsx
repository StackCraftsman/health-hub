import styled, { css } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  width: 100%;
  gap: 20px;
  overflow-y: scroll;
  padding: 10px;

  ${(props) =>
    props.detail &&
    css`
      display: block;
    `}
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;

  ${(props) =>
    props.right &&
    css`
      justify-content: flex-end;
    `}
`;

export const Entry = styled.div`
  text-align: left;
  margin: 20px 0;
  //   color: #84878c;
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;
export const Thead = styled.thead`
  background: #0765fe;
  color: #fff;
`;

export const Th = styled.th`
  padding: 8px;
`;

export const Td = styled.td`
  padding: 8px;
`;

export const Ul = styled.ul`
  padding-left: 30px;
  text-align: left;
`;
