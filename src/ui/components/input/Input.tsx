import React from "react";
import { InputTypes } from "./Input.types";
import S from "./Input.styles";

export const Input: React.FC<InputTypes> = ({
  value,
  change,
  type,
  text,
  id,
  error,
  required,
}) => (
  <S.Wrapper>
    <S.Label htmlFor={id}>{text}</S.Label>
    <input
      type={type}
      value={value}
      onChange={change}
      id={id}
      style={error ? { borderBottomColor: "#FF0000" } : {}}
      required={required}
    />
    <S.Error>{error}</S.Error>
  </S.Wrapper>
);
