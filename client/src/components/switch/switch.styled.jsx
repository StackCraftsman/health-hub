import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: inline-block;
  background-color: #f1f2f6;
//   padding: 2px;
  width: 50%;
`;

export const Span = styled.span`
  background-color: #fcffff;
  padding: 15px 0;
  color: #686868;
  display: inline-block;
  text-align: center;
  width: 100%;
  border-radius: 5px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Span} {
    background-color: #09469f;
    color: #f1f2f6;
  }
`;
