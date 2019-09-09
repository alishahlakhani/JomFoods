import React from "react";
import { TypographyProps } from "./Typography";
import styles from "./Typography.module.scss";
import classNames from "classnames";

interface Props extends TypographyProps {}

export function Heading4(props: Props) {
  const { children, className, textColor } = props;
  return (
    <h4
      style={{
        color: textColor
      }}
      className={classNames(styles.Heading4, className)}
    >
      {children}
    </h4>
  );
}
