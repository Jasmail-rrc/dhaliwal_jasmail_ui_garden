import React from "react";
import styled from "styled-components";
import { CardProps } from "./Button.types";

const StyledCard = styled.div`
  width: 280px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const CardTitle = styled.h3`
  margin-top: 0;
  color: #222;
`;

const CardDescription = styled.p`
  color: #555;
  line-height: 1.5;
`;

const Card = ({ title, description }: CardProps) => {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </StyledCard>
  );
};

export default Card;
