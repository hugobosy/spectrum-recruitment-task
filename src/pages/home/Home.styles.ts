import styled from "styled-components";

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
  width: 100%;
  max-width: 800px;
  padding: 30px;
  margin-top: 87px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.color.gray.dark};
  border-radius: ${({ theme }) => theme.radius.large};
  box-shadow: ${({ theme }) => theme.shadow["box-shadow"]};

  img {
    width: 80%;
    max-width: 534px;
    border-radius: ${({ theme }) => theme.radius.medium};
    translate: 30px;

    ${({theme}) => theme.media.md} {
      width: 60%;
    }
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: space-around;
  align-items: center;
  padding: 2.639rem 0;
  width: 100%;
  max-width: 534px;
  
  ${({theme}) => theme.media.md} {
    flex-direction: row;
  }
`;

const Icons = styled.div `
  display: flex;
  justify-content: flex-end;
  column-gap: 1.444rem;
`

const Properties = styled.div`
  width: 333px;
  margin: 0 auto;
`;
export default { Header, Content, Name, Properties, Icons };
