import React from "react";
import S from "./Checkbox.styles";
import {CheckboxTypes} from "./Checkbox.types";

export const Checkbox: React.FC<CheckboxTypes> = ({ change, checked, id }) => (
  <S.Wrapper>
    <input type="checkbox" id={id} checked={checked} onChange={change}/>
    <label htmlFor="check">Akceptuję Regulamin</label>
  </S.Wrapper>
);