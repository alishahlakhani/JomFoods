import React from "react";
import { TypographyProps } from "./Typography";
import styles from "./Typography.module.scss";
import classNames from "classnames";

interface Props extends TypographyProps {}

export function Heading2(props: Props) {
  const { children, className, textColor } = props;
  return (
    <h2
      style={{
        color: textColor
      }}
      className={classNames(styles.Heading2, className)}
    >
      {children}
    </h2>
  );
}
