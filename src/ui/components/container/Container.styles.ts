import styled, {css} from "styled-components";
import { ContainerTypes } from "./Container.types";

const Container = styled.div<Partial<ContainerTypes>>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1130px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.light};
  ${({paddingTop}) => paddingTop && css`
    ${({theme}) => theme.media.md} {
      padding-top: ${paddingTop}px;
    }`};
  ${({paddingLeft}) => paddingLeft && css`padding-left: ${paddingLeft}px`};
  ${({paddingRight}) => paddingRight && css`padding-right: ${paddingRight}px`};
  ${({paddingBottom}) => paddingBottom && css`padding-bottom: ${paddingBottom}px`};
`;

export default { Container };
