import React from "react";

export interface InputTypes {
  text: string;
  type: string;
  value?: string;
  checked?: boolean;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  error: string;
  required?: boolean;
}
