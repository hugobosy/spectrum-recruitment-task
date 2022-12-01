import React from "react";
import { ButtonTypes } from "./Button.types";
import S from "./Button.style";

export const Button: React.FC<ButtonTypes> = ({
  text,
  bgColor,
  handleClick,
}) => {
  return (
    <S.Button bgColor={bgColor} onClick={handleClick}>
      {text}
    </S.Button>
  );
};
