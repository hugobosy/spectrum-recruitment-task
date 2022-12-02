import React from "react";

export interface InputTypes {
  text: string;
  type: string;
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}
