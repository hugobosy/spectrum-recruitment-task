import styled, {css} from "styled-components";
import { ContainerTypes } from "./Container.types";

const Container = styled.div<Partial<ContainerTypes>>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1130px;
  height: 100%;
  padding: 11px 26px;
  background-color: ${({ theme }) => theme.color.light};
  ${({paddingTop}) => paddingTop && css`padding-top: ${paddingTop}px`};
  ${({paddingLeft}) => paddingLeft && css`padding-left: ${paddingLeft}px`};
  ${({paddingRight}) => paddingRight && css`padding-right: ${paddingRight}px`};
  ${({paddingBottom}) => paddingBottom && css`padding-bottom: ${paddingBottom}px`};
`;

export default { Container };
