import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 100px;
  width: 100%;
  padding: 0 20px;

  ${({theme}) => theme.media.md} {
    padding: 0px 174px;
    
    div:nth-child(1) {
      margin-bottom: 55px;
    }
  }
`;

const Confirm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
`

export default { Form, Confirm };