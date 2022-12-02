import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({theme}) => theme.media.md} {
    padding: 5.574rem 0;
  }
`;

export default { Form };