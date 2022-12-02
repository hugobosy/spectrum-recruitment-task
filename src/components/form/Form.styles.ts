import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;

  ${({theme}) => theme.media.md} {
    padding: 0px 174px;
  }
`;

export default { Form };