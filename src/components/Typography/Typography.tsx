import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Heading3 } from "./Heading3";
import { Heading4 } from "./Heading4";
import { Heading5 } from "./Heading5";
import { Paragraph } from "./Paragraph";
import { Small } from "./Small";
import { Link } from "./Link";
import { Span } from "./Span";

export interface TypographyProps {
  children: string | any;
  className?: string;
  textColor?: string;
}

const Typography = {
  Heading1: Heading1,
  Heading2: Heading2,
  Heading3: Heading3,
  Heading4: Heading4,
  Heading5: Heading5,
  Paragraph: Paragraph,
  Span: Span,
  Small: Small,
  Link: Link
};

export default Typography;
