import { Color } from "../../../types/color";
import { Align } from "../../../types/align";

export interface ButtonTypes {
  bgColor?: Color;
  text: string;
  handleClick: () => void;
  align?: Align;
}
