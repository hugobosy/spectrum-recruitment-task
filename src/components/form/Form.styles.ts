import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;

  ${({theme}) => theme.media.md} {
    padding: 0px 174px;
  }
`;

const Confirm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
`

export default { Form, Confirm };