import React, { useState } from "react";
import { ReactComponent as DineEasyLogo } from "svgs/dineEasyLogo.svg";
import { RoundedButton } from "components/buttons";
import { Primary, White, Dark50, Dark25 } from "styles/colors";
import { history } from "index";
import classNames from "classnames";
import styles from "./SelectTable.module.scss";

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

export default function SelectTable() {
  const [selectedTable, setSelectedTable] = useState<number | undefined>();
  return (
    <section className={styles.SelectTable}>
      <DineEasyLogo
        onClick={e => history.replace("/")}
        className={styles.Logo}
      ></DineEasyLogo>
      <div className={styles.TablesList}>
        <h1 className={styles.RestName}>John’s Mamak Corner</h1>
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
          selectedTable && history.push("restaurants/999/tables/999/menus")
        }
      >
        {(selectedTable && "Show Menu") || "Select Table Number"}
      </RoundedButton>
    </section>
  );
}
