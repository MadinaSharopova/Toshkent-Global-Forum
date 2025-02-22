import React from "react";
import styled from "styled-components";

interface IInput {
  children?: string;
  typee?: "submit";
  pe?: boolean;
  onClick?: any;
  handleSumbit?: void;
}

export default function Button({ children, typee,  pe, handleSumbit, onClick }: IInput) {
  return <Styledboot
  onClick={handleSumbit} handleSumbit={handleSumbit} pe={pe} type={typee}>{children}</Styledboot>;
}
const Styledboot = styled.button<IInput>`
  border-radius: 8px;
  width: 189px;
  padding: 11px 0;
  border: none;
  background: ${(props) => (props.pe ? " #f6f6f6" : "#4340da")};
  border-radius: 8px;
  color: ${(props) => (props.pe ? "#4340da": "white")};
  cursor: pointer;
`;