import styled, { css } from "styled-components";
import { ButtonTypes } from "./Button.types";

const bgColors = {
  green: css`
    background-color: ${({ theme }) => theme.color.success.normal};
  `,

  blue: css`
    background-color: ${({ theme }) => theme.color.primary};
  `,

  darkGreen: css`
    background-color: ${({ theme }) => theme.color.success.dark};
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

const Button = styled.button<Partial<ButtonTypes>>`
  padding: 1rem 3.1rem;
  max-width: 236px;
  border: none;
  ${({align}) => align && aligns[align]};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.color.light};
  border-radius: ${({theme}) => theme.radius.normal};
  line-height: ${({theme}) => theme.font.line.s};
  font-weight: ${({theme}) => theme.font.weight.bold};
  ${({ bgColor }) => bgColor && bgColors[bgColor]};
  font-style: italic;
  cursor: pointer;
  box-shadow: ${({theme}) => theme.shadow["box-shadow"]};
  
  ${({theme}) => theme.media.md} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;

export default { Button };
