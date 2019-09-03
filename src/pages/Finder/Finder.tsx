import React from "react";
import { ReactComponent as DineEasyLogo } from "svgs/dineEasyLogo.svg";
import { RoundedButton } from "components/buttons";
import { Primary, White } from "styles/colors";
import { history } from "index";
import QrReader from "react-qr-reader";
import styles from "./Finder.module.scss";

export default function Finder() {
  return (
    <section className={styles.Finder}>
      <DineEasyLogo className={styles.Logo}></DineEasyLogo>
      <h1 className={styles.ScanMessage}>Place the code within this</h1>
      <QrReader
        onError={e => {
          if (e) alert(e);
        }}
        showViewFinder={false}
        facingMode="environment"
        className={styles.QrReader}
        onScan={data => {
          if (data) alert(data);
        }}
      />
      <p className={styles.EnterManually}>or enter manually</p>

      <RoundedButton
        background={Primary}
        textColor={White}
        block
        onClick={e => history.push("restaurants/999/tables")}
        className={styles.NextButton}
      >
        Next
      </RoundedButton>
    </section>
  );
}
