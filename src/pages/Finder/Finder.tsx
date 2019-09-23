import React from "react";
import { ReactComponent as Logo } from "svgs/app-logo.svg";
import { RouteComponentProps } from "@reach/router";
import { GlobalStore } from "store";
import { FinderServices } from "./Finder.service";
import Typography from "components/Typography/Typography";
import QrReader from "react-qr-reader";
import styles from "./Finder.module.scss";

export default function Finder(props: RouteComponentProps) {
  const store = GlobalStore.useStore();

  const onScanError = e => {
    if (e) alert(e);
  };

  const onScanSuccess = async data => {
    if (data) {
      alert("Restaurant found");
      const restaurant = await FinderServices.getRestaurantInfo(999);
      store.set("restaurant")(restaurant);
      props.navigate!(`./${restaurant.id}/tables`);
    }
  };

  return (
    <section className={styles.Finder}>
      <Logo onClick={onScanSuccess} className={styles.Logo}></Logo>
      <Typography.Heading1 className={styles.ScanMessage}>
        Place the code within this
      </Typography.Heading1>
      <QrReader
        onError={onScanError}
        showViewFinder={false}
        facingMode="environment"
        className={styles.QrReader}
        onScan={onScanSuccess}
      />
      <Typography.Paragraph className={styles.EnterManually}>
        or enter manually
      </Typography.Paragraph>

      {/* <RoundedButton
        background={(selected && selected.id && Primary) || Dark25}
        textColor={White}
        block
        onClick={e => navigate(`restaurants/999/tables`)}
        className={styles.NextButton}
      >
        Next
      </RoundedButton> */}
    </section>
  );
}
