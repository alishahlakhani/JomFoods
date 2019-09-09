import React, { useState } from "react";
import { ReactComponent as DineEasyLogo } from "svgs/dineEasyLogo.svg";
import { RoundedButton } from "components/buttons";
import { Primary, White, Dark25 } from "styles/colors";
import { RouteComponentProps, navigate } from "@reach/router";
import Typography from "components/Typography/Typography";
import QrReader from "react-qr-reader";
import styles from "./Finder.module.scss";

export default function Finder(props: RouteComponentProps) {
  const [restaurantId, setRestaurantId] = useState<string | undefined>(
    undefined
  );
  return (
    <section className={styles.Finder}>
      <DineEasyLogo className={styles.Logo}></DineEasyLogo>
      <Typography.Heading1 className={styles.ScanMessage}>
        Place the code within this
      </Typography.Heading1>
      <QrReader
        onError={e => {
          if (e) alert(e);
        }}
        showViewFinder={false}
        facingMode="environment"
        className={styles.QrReader}
        onScan={data => {
          if (data) {
            alert("Restaurant found");
            setRestaurantId(data);
          }
        }}
      />
      <Typography.Paragraph className={styles.EnterManually}>
        or enter manually
      </Typography.Paragraph>

      <RoundedButton
        background={(restaurantId && Primary) || Dark25}
        textColor={White}
        block
        onClick={e => navigate("restaurants/999/tables")}
        className={styles.NextButton}
      >
        Next
      </RoundedButton>
    </section>
  );
}
