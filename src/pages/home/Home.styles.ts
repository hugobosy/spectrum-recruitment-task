import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray.light};
`;

const Container = styled.div`
  width: 1130px;
  padding: 11px 26px;
  background-color: ${({ theme }) => theme.color.light};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 800px;
  height: 73.983rem;
`;

export default { Wrapper, Container, Header, Content };
