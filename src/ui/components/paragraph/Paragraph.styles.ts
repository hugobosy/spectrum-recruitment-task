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
    font-size: ${({ theme }) => theme.font.size.xs};

    ${({ theme }) => theme.media.md} {
      font-size: ${({ theme }) => theme.font.size.s};
    }
  `,

  medium: css`
    font-size: ${({ theme }) => theme.font.size.s};

    ${({ theme }) => theme.media.md} {
      font-size: ${({ theme }) => theme.font.size.m};
    }
  `,

  large: css`
    font-size: ${({ theme }) => theme.font.size.s};

    ${({ theme }) => theme.media.md} {
      font-size: ${({ theme }) => theme.font.size.l};
    }
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

const aligns = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
};

const Paragraph = styled.p<Partial<ParagraphTypes>>`
  ${({font}) => font && fonts[font]};
  ${({size}) => size && sizes[size]};
  ${({weight}) => weight && weights[weight]};
  ${({align}) => align && aligns[align]};
  ${({isItalic}) =>
      isItalic &&
      css`
        font-style: italic;
      `};
  ${({isUppercase}) =>
      isUppercase &&
      css`
        text-transform: uppercase;
      `};
  ${({letterSpacing}) =>
      letterSpacing &&
      css`
        letter-spacing: ${letterSpacing}em;
      `};
`;

export default { Paragraph };
