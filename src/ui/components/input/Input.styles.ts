import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  input {
    border: 0 solid black;
    border-bottom: .155rem solid black;
    padding: 10px 0;
    font-size: ${({ theme }) => theme.font.size.xs};

    ${({theme}) => theme.media.md} {
      font-size: ${({ theme }) => theme.font.size.s};
    }

    &:focus {
      outline: none;
    }
  }
`;

const Label = styled.label`
  line-height: ${({ theme }) => theme.font.line.l};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  
  ${({theme}) => theme.media.md} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

const Error = styled.span `
  text-align: right;
  font-size: ${({theme}) => theme.font.size.xs};
  line-height: ${({theme}) => theme.font.line.l};
  font-family: ${({theme}) => theme.font.family.primary};
  font-style: italic;
  color: ${({theme}) => theme.color.danger};
`
export default { Wrapper, Label, Error };
