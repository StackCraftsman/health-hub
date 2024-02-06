import styled, {css} from "styled-components";

export const RecordContainer = styled.div`
  padding: 30px;
  border-bottom: 1px solid #84878c;
`;

export const Para = styled.p`
  padding: 4px 0;
  color: #84878c;

  ${(props) =>
    props.comment &&
    css`
      width: 80%;
    `}
`;

export const Span = styled.span`
  color: #565555;
  font-weight: 600;
`;