import React from "react";
import { TypographyProps } from "./Typography";
import styles from "./Typography.module.scss";
import classNames from "classnames";

interface Props extends TypographyProps {
  underline?: boolean;
  href?: (() => void) | string;
}

export function Link(props: Props) {
  const {
    children,
    className,
    textColor,
    href = "#",
    underline = true
  } = props;
  return (
    // eslint-disable-next-line
    <a
      style={{
        color: textColor,
        textDecoration: (underline && "underline") || "none"
      }}
      className={classNames(styles.Link, className)}
      href={(typeof href === "string" && href) || undefined}
      onClick={e => typeof href !== "string" && href()}
    >
      {children}
    </a>
  );
}
