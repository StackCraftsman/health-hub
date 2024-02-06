import React from "react";
import { Container } from "./widgets.styled";

const SummaryWidget = ({ children }) => {
  return <Container> {children}</Container>;
};

export default SummaryWidget;
