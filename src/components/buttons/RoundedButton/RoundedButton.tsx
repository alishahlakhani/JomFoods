import React from "react";
import styles from "./RoundedButton.module.scss";
import { White, Dark50 } from "styles/colors";
import classNames from "classnames";

type Props = {
  background?: string;
  textColor?: string;
  className?: string;
  block?: boolean;
  onClick?: (e) => void;
  children: string;
};

export default function RoundedButton(props: Props) {
  const {
    background = White,
    textColor = Dark50,
    className,
    children = "Button",
    onClick,
    block
  } = props;
  return (
    <button
      onClick={onClick}
      style={{ background: background, color: textColor }}
      className={classNames(styles.RoundedButton, className, {
        [styles.block]: block
      })}
    >
      {children}
    </button>
  );
}
