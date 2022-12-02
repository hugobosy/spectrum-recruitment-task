import React from "react";
import S from "./Checkbox.styles";
import { CheckboxTypes } from "./Checkbox.types";

export const Checkbox: React.FC<CheckboxTypes> = ({
  change,
  checked,
  id,
  error,
}) => (
  <S.Wrapper>
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={change}
      required
    />
    <div>
      <label htmlFor="check">Akceptuję Regulamin</label>
      {!error ? <span>Wymagana akceptacja regulaminu</span> : null}
    </div>
  </S.Wrapper>
);
