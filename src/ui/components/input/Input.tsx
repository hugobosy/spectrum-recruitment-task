import React from "react";
import { InputTypes } from "./Input.types";

export const Input: React.FC<InputTypes> = ({ value, change, type, text, id }) => (
  <div>
    <label htmlFor={id}>{text}</label>
    <p>
      <input type={type} value={value} onChange={change} id={id}/>
    </p>
  </div>
);
