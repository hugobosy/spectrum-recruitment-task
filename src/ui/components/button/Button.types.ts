import { Color } from "../../../types/color";
import { Align } from "../../../types/align";
import { Type } from "../../../types/type";

export interface ButtonTypes {
  bgColor?: Color;
  text: string;
  handleClick?: () => void;
  align?: Align;
  type?: Type;
}
