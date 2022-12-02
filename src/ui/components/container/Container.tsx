import React from "react";
import { ContainerTypes } from "./Container.types";
import S from "./Container.styles";

export const Container: React.FC<ContainerTypes> = ({
  children,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
}) => (
  <S.Container
    paddingTop={paddingTop}
    paddingLeft={paddingLeft}
    paddingBottom={paddingBottom}
    paddingRight={paddingRight}
  >
    {children}
  </S.Container>
);
