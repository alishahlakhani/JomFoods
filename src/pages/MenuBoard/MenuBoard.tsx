import React from "react";
import { ReactComponent as DineEasyLogo } from "svgs/dineEasyLogo.svg";
import { RoundedButton } from "components/buttons";
import { Primary, White } from "styles/colors";
import { history } from "index";
import styles from "./MenuBoard.module.scss";

export default function MenuBoard() {
  return (
    <section className={styles.MenuBoard}>
      <DineEasyLogo
        onClick={() => history.replace("/")}
        className={styles.Logo}
      ></DineEasyLogo>
      <RoundedButton
        background={Primary}
        textColor={White}
        block
        className={styles.NextButton}
      >
        Next
      </RoundedButton>
    </section>
  );
}
