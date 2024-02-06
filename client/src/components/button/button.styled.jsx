import styled, {css} from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0765fe;
  color: #0765fe;

  padding: 0.50rem 1rem;

  ${(props) =>
    props.primary &&
    css`
      background: #0765fe;
      color: white;
    `}
  ${(props) =>
    props.alt &&
    css`
      color: #0765fe;
      background-color: white;
      border-color: white;
    `}
`;