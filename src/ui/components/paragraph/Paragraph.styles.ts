import styled, { css } from "styled-components";
import { ParagraphTypes } from "./Paragraph.types";

const fonts = {
  lato: css`
    font-family: ${({ theme }) => theme.font.family.secondary};
  `,

  inter: css`
    font-family: ${({ theme }) => theme.font.family.primary};
  `,
};

const sizes = {
  small: css`
    font-size: ${({ theme }) => theme.font.size.s};
  `,

  medium: css`
    font-size: ${({ theme }) => theme.font.size.m};
  `,

  large: css`
    font-size: ${({ theme }) => theme.font.size.l};
  `,
};

const weights = {
  100: css`
    font-weight: ${({ theme }) => theme.font.weight.thin};
  `,

  400: css`
    font-weight: ${({ theme }) => theme.font.weight.regular};
  `,

  800: css`
    font-weight: ${({ theme }) => theme.font.weight["extra-bold"]};
  `,
};

const Paragraph = styled.p<Partial<ParagraphTypes>>`
  ${({font}) => font && fonts[font]};
  ${({size}) => size && sizes[size]};
  ${({weight}) => weight && weights[weight]};
`;

export default { Paragraph };
