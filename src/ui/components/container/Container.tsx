import React from "react";
import { ContainerTypes } from "./Container.types";
import S from "./Container.styles";

export const Container: React.FC<ContainerTypes> = ({
  children,
  page
}) => (
  <S.Container
   page={page}
  >
    {children}
  </S.Container>
);
