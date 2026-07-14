import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.disabled ? "gray" : "#007bff")};
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Button = ({ label, disabled = false }: ButtonProps) => {
  return <StyledButton disabled={disabled}>{label}</StyledButton>;
};

export default Button;
