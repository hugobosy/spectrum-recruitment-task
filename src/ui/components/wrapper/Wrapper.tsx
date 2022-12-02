import React from "react";
import { WrapperTypes } from "./Wrapper.types";
import S from "./Wrapper.styles";

export const Wrapper: React.FC<WrapperTypes> = ({ children }) => (
  <S.Wrapper>{children}</S.Wrapper>
);
