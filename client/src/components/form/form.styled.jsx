import styled, { css } from "styled-components";

export const Form = styled.form`
  margin: 30px auto;
  color: #84878c;
  width: 80%;
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  outline: none;
  border: none;
  margin-top: 30px;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  background-color: unset;
  border: 1px solid #84878c;
  outline-color: #84878c;
  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  background-color: unset;
  border: 1px solid #84878c;
  outline-color: #84878c;
  border-radius: 5px;
  ${(props) =>
    props.submit &&
    css`
      display: block;
      background-color: #0765fe;
      border-color: #0765fe;
      color: #fff;
      font-size: 1.05rem;
      margin: 30px 0;
      &:hover {
        opacity: 80%;
      }
    `}
`;
