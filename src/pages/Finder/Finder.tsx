import React from "react";
import { ReactComponent as DineEasyLogo } from "svgs/dineEasyLogo.svg";
import QrReader from "react-qr-reader";
import styles from "./Finder.module.scss";
import { RoundedButton } from "components/buttons";

export default function Finder() {
  return (
    <div className={styles.Finder}>
      <DineEasyLogo className={styles.Logo}></DineEasyLogo>
      <h1 className={styles.ScanMessage}>Place the code within this</h1>
      <QrReader
        // delay={300}
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
        onClick={e => QrReader.openImageDialog()}
        className={styles.NextButton}
      >
        Next
      </RoundedButton>
    </div>
  );
}
