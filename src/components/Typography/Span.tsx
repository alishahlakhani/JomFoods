import React from "react";
import { TypographyProps } from "./Typography";
import styles from "./Typography.module.scss";
import classNames from "classnames";

interface Props extends TypographyProps {}

export function Span(props: Props) {
  const { children, className, textColor } = props;
  return (
    <span
      style={{
        color: textColor
      }}
      className={classNames(styles.Heading5, className)}
    >
      {children}
    </span>
  );
}
