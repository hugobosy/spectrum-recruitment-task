import React from "react";
import S from "./Paragraph.styles";
import { ParagraphTypes } from "./Paragraph.types";

export const Paragraph: React.FC<ParagraphTypes> = ({
  weight,
  size,
  font,
  text,
}) => (
  <S.Paragraph weight={weight} size={size} font={font}>
    {text}
  </S.Paragraph>
);