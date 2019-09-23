import React from "react";
import styles from "./RoundedButton.module.scss";
import { White, Dark50, Primary } from "styles/colors";
import classNames from "classnames";

type Props = {
  background?: string;
  textColor?: string;
  className?: string;
  block?: boolean;
  disabled?: boolean;
  shadow?: boolean | string;
  round?: boolean | number;
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
    block,
    round,
    shadow,
    disabled
  } = props;

  const boxRoundValue = (typeof round === "number" && round) || ".2rem";
  const boxShadowValue =
    (typeof shadow === "string" && `0px 5px 10px ${shadow}33`) ||
    `0px 5px 10px ${Primary}33`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: background,
        color: textColor,
        borderRadius: (round && boxRoundValue) || "0",
        boxShadow: (shadow && boxShadowValue) || "none"
      }}
      className={classNames(styles.RoundedButton, className, {
        [styles.block]: block
      })}
    >
      {children}
    </button>
  );
}
