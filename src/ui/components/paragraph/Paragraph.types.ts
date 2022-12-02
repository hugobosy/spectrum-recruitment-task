import { Weight } from "../../../types/weight";
import { Size } from "../../../types/size";
import { Font } from "../../../types/font";
import { Align } from "../../../types/align";

export interface ParagraphTypes {
  weight?: Weight;
  size: Size;
  font: Font;
  text: string;
  isItalic?: boolean;
  isUppercase?: boolean;
  letterSpacing?: number;
  align?: Align;
}
