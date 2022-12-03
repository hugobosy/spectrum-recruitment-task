import styled from "styled-components";
import { ContainerTypes } from "./Container.types";

const Container = styled.div<Partial<ContainerTypes>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1130px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.light};
`;

export default { Container };
