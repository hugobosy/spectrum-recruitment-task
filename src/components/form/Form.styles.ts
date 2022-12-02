import styled from "styled-components";

const Form = styled.form`
  width: 100%;

  ${({theme}) => theme.media.md} {
    padding: 5.574rem 17.4rem;
  }
`;

export default { Form };