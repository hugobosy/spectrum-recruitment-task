import React from "react";

export interface CheckboxTypes {
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    id: string;
    error: boolean;
}