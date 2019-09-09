import React from "react";
import { Primary } from "styles/colors";
import classNames from "classnames";
import styles from "./Fab.module.scss";

type Props = {
  className?: string;
  backgroundColor?: string;
  onClick?: (e) => void;
  children: React.ReactElement | string;
};

export default function Fab(props: Props) {
  const {
    className,
    backgroundColor = Primary,
    children = "Button",
    onClick
  } = props;
  return (
    <button
      style={{
        boxShadow: `0px 1rem 3rem ${backgroundColor}66`,
        background: backgroundColor
      }}
      onClick={onClick}
      className={classNames(styles.Fab, className)}
    >
      {children}
    </button>
  );
}
