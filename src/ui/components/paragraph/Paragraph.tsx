import React from "react";
import S from "./Paragraph.styles";
import { ParagraphTypes } from "./Paragraph.types";

export const Paragraph: React.FC<ParagraphTypes> = ({
  weight,
  size,
  font,
  text,
  isItalic,
  isUppercase,
  letterSpacing,
  align,
}) => (
  <S.Paragraph
    weight={weight}
    size={size}
    font={font}
    isItalic={isItalic}
    isUppercase={isUppercase}
    letterSpacing={letterSpacing}
    align={align}
  >
    {text}
  </S.Paragraph>
);
