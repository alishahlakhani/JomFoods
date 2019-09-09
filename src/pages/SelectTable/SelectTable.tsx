import React, { useState } from "react";
import { ReactComponent as DineEasyLogo } from "svgs/dineEasyLogo.svg";
import { RoundedButton } from "components/buttons";
import { Primary, White, Dark50, Dark25 } from "styles/colors";
import { RouteComponentProps, navigate, redirectTo } from "@reach/router";
import classNames from "classnames";
import styles from "./SelectTable.module.scss";
import Typography from "components/Typography/Typography";

const tableNumbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18
];

export default function SelectTable(props: RouteComponentProps) {
  const [selectedTable, setSelectedTable] = useState<number | undefined>();
  return (
    <section className={styles.SelectTable}>
      <DineEasyLogo
        onClick={e => redirectTo("/")}
        className={styles.Logo}
      ></DineEasyLogo>
      <div className={styles.TablesList}>
        <Typography.Heading1 className={styles.RestName}>
          Ganga Vegetarian restaurant
        </Typography.Heading1>
        <h2 className={styles.TableNumberMessage}>What’s your table number?</h2>
        <div className={styles.TableNumbers}>
          {tableNumbers.map(t => {
            const isSelected = selectedTable === t;
            return (
              <RoundedButton
                key={t}
                className={classNames(styles.Table, {
                  [styles.selected]: isSelected
                })}
                background={(isSelected && Primary) || `${Dark50}11`}
                textColor={(isSelected && White) || Dark50}
                block
                onClick={e => setSelectedTable((!isSelected && t) || undefined)}
              >
                {String(t)}
              </RoundedButton>
            );
          })}
        </div>
      </div>
      <RoundedButton
        background={(selectedTable && Primary) || Dark25}
        textColor={White}
        block
        className={styles.NextButton}
        onClick={e =>
          selectedTable && navigate("/restaurants/999/tables/999/menus")
        }
      >
        {(selectedTable && "Show Menu") || "Select Table Number"}
      </RoundedButton>
    </section>
  );
}
