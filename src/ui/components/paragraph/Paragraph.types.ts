import { Weight } from "../../../types/weight";
import { Size } from "../../../types/size";
import { Font } from "../../../types/font";

export interface ParagraphTypes {
  weight: Weight;
  size: Size;
  font: Font;
  text: string;
  isItalic?: boolean;
}
