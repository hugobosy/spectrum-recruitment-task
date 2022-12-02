import React from "react";
import { ButtonTypes } from "./Button.types";
import S from "./Button.style";

export const Button: React.FC<ButtonTypes> = ({
  text,
  bgColor,
  handleClick,
  align,
  type,
}) => {
  return (
    <S.Button bgColor={bgColor} onClick={handleClick} align={align} type={type}>
      {text}
    </S.Button>
  );
};
