import React from "react";
import { ContainerTypes } from "./Container.types";
import S from "./Container.styles";

export const Container: React.FC<ContainerTypes> = ({ children }) => (
  <S.Container>{children}</S.Container>
);
