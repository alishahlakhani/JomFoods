import React from "react";
import styles from "./RoundedButton.module.scss";
import { White, Primary } from "styles/colors";
import classNames from "classnames";

type Props = {
  background?: string;
  textColor?: string;
  className?: string;
  onClick?: (e) => void;
  children: string;
};

export default function RoundedButton(props: Props) {
  const {
    background = Primary,
    textColor = White,
    className,
    children = "Button",
    onClick
  } = props;
  return (
    <button
      onClick={onClick}
      style={{ background: background, color: textColor }}
      className={classNames(styles.RoundedButton, className)}
    >
      {children}
    </button>
  );
}
