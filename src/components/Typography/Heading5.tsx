import React from "react";
import { TypographyProps } from "./Typography";
import styles from "./Typography.module.scss";
import classNames from "classnames";

interface Props extends TypographyProps {}

export function Heading5(props: Props) {
  const { children, className, textColor } = props;
  return (
    <h5
      style={{
        color: textColor
      }}
      className={classNames(styles.Heading5, className)}
    >
      {children}
    </h5>
  );
}
