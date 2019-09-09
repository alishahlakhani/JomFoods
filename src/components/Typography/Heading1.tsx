import React from "react";
import { TypographyProps } from "./Typography";
import styles from "./Typography.module.scss";
import classNames from "classnames";

interface Props extends TypographyProps {}

export function Heading1(props: Props) {
  const { children, className, textColor } = props;
  return (
    <h1
      style={{
        color: textColor
      }}
      className={classNames(styles.Heading1, className)}
    >
      {children}
    </h1>
  );
}
