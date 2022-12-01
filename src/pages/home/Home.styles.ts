import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray.light};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1130px;
  height: 100vh;
  padding: 11px 26px;
  background-color: ${({ theme }) => theme.color.light};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 73.983rem;
  margin-top: 87px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.color.gray.dark};
  border-radius: ${({ theme }) => theme.radius.large};
  backdrop-filter: blur(280px);
  box-shadow: ${({ theme }) => theme.shadow["box-shadow"]};

  img {
    display: block;
    border-radius: ${({ theme }) => theme.radius.medium};
  }
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2.639rem 0;
  width: 333px;
`;

const Icons = styled.div `
  display: flex;
  column-gap: 1.444rem;
  position: absolute;
  right: -80px;
`

const Properties = styled.div`
  width: 333px;
`;
export default { Wrapper, Container, Header, Content, Name, Properties, Icons };
