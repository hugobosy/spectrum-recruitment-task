import React from "react";
import { ButtonTypes } from "./Button.types";
import S from "./Button.style";

export const Button: React.FC<ButtonTypes> = ({ text, bgColor }) => {
  return <S.Button bgColor={bgColor}>{text}</S.Button>;
};
