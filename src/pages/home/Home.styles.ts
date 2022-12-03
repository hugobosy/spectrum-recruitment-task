import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  max-height: 740px;
  padding: 50px;
  margin: 87px 30px 30px;
  background-color: ${({ theme }) => theme.color.gray.dark};
  border-radius: ${({ theme }) => theme.radius.large};
  box-shadow: ${({ theme }) => theme.shadow["box-shadow"]};
  
  ${({theme}) => theme.media.md} {
    padding: 122px 144px;
  }

  img {
    display: block;
    width: 100%;
    border-radius: ${({ theme }) => theme.radius.medium};

    ${({theme}) => theme.media.md} {
      max-width: 534px;
      max-height: 383px;
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
  display: none;
  justify-content: flex-end;
  column-gap: 1.444rem;
  
  ${({theme}) => theme.media.md} {
    display: flex;
    align-items: center;
  }
`

const Properties = styled.div`
  width: 333px;
  margin: 0 auto;
`;
export default { Header, Content, Name, Properties, Icons };
