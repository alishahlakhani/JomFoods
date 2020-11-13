import React from "react";
import { TypographyProps } from "./Typography";
import styles from "./Typography.module.scss";
import classNames from "classnames";

interface Props extends TypographyProps {}

export function Paragraph(props: Props) {
  const { children, className, textColor } = props;
  return (
    <p
      style={{
        color: textColor
      }}
      className={classNames(styles.Paragraph, className)}
    >
      {children}
    </p>
  );
}
