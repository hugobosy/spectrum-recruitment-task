import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 21px;

  input {
    width: 30px;
    height: 30px;
    outline: 3px solid black;
    appearance: none;
    transition: .4s;
    &:checked {
      position: relative;
      border-radius: 50%;
      background-color: #000;
      &::before {
        content: '';
        position: absolute;
        top: 57%;
        left: 11px;
        width: 3px;
        height: 5px;
        background-color: #fff;
        translate: 0 -50%;
        transform: skew(40deg);
      }
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 16px;
        width: 3px;
        height: 10px;
        background-color: #fff;
        translate: 0 -50%;
        transform: skew(-25deg);
      }
    }
  }

  label {
    line-height: ${({theme}) => theme.font.line.l};
    font-family: ${({theme}) => theme.font.family.primary};
    font-size: ${({theme}) => theme.font.size.xs};
    font-weight: ${({theme}) => theme.font.weight.bold};

    ${({theme}) => theme.media.md} {
      font-size: ${({theme}) => theme.font.size.s};
    }
  }
`;

export default { Wrapper };
