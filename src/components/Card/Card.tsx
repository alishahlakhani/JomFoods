import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";

type Props = {
  className?: string;
  onClick?: (e) => void;
  children: React.ReactElement;
};

export default function Card(props: Props) {
  const { className, children = "Button", onClick } = props;
  return (
    <div onClick={onClick} className={classNames(styles.Card, className)}>
      {children}
    </div>
  );
}
