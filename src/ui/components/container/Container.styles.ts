import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1130px;
  height: 100%;
  padding: 11px 26px;
  background-color: ${({ theme }) => theme.color.light};
`;

export default { Container };