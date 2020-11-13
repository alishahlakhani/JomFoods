import React from "react";
import { TypographyProps } from "./Typography";
import styles from "./Typography.module.scss";
import classNames from "classnames";

interface Props extends TypographyProps {
  onClick?: (e) => void;
}

export function Small(props: Props) {
  const { children, className, textColor, onClick } = props;
  return (
    <span
      style={{ color: textColor }}
      className={classNames(styles.Small, className)}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
