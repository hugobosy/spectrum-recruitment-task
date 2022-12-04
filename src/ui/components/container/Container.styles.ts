import styled, { css } from "styled-components";
import { ContainerTypes } from "./Container.types";

const pages = {
  home: css`
    padding: 10px 30px;

    ${({ theme }) => theme.media.md} {
      padding: 10px 26px;
    }
  `,

  regForm: css``,
};

const Container = styled.div<Partial<ContainerTypes>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1130px;
  min-height: 1200px;
  background-color: ${({ theme }) => theme.color.light};
  ${({ page }) => page && pages[page]};
`;

export default { Container };
