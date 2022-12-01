import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.gray.light};
`;

const Container = styled.div`
  width: 1130px;
  background-color: ${({ theme }) => theme.color.light};
`;

export default { Wrapper, Container };
