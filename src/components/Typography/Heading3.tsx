import React from "react";
import { TypographyProps } from "./Typography";
import styles from "./Typography.module.scss";
import classNames from "classnames";

interface Props extends TypographyProps {}

export function Heading3(props: Props) {
  const { children, className, textColor } = props;
  return (
    <h3
      style={{
        color: textColor
      }}
      className={classNames(styles.Heading3, className)}
    >
      {children}
    </h3>
  );
}
