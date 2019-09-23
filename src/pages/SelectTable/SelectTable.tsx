import React from "react";
import { ReactComponent as DineEasyLogo } from "svgs/dineEasyLogo.svg";
import { RoundedButton } from "components/buttons";
import { Primary, White, Dark50, Dark25 } from "styles/colors";
import { RouteComponentProps, redirectTo, Redirect } from "@reach/router";
import { GlobalStore } from "store";
import classNames from "classnames";
import Typography from "components/Typography/Typography";
import styles from "./SelectTable.module.scss";

export default function SelectTable(props: RouteComponentProps) {
  const store = GlobalStore.useStore();
  const restaurant = store.get("restaurant");
  const selectedTable = store.get("selectedTable");

  if (!restaurant) return <Redirect noThrow to="../"></Redirect>;

  const redirectToHome = () => redirectTo("/");
  const setSelectedTable = table => {
    if (selectedTable && table.id === selectedTable.id)
      store.set("selectedTable")(undefined);
    else store.set("selectedTable")(table);
  };
  const navigateToNext = () =>
    selectedTable && props.navigate!(`./${selectedTable.id}/menus`);

  const getTable = table => {
    const isSelected = selectedTable && selectedTable.id === table.id;

    return (
      <RoundedButton
        round
        key={table.id}
        className={classNames(styles.Table, {
          [styles.selected]: isSelected
        })}
        background={(isSelected && Primary) || `${Dark50}11`}
        textColor={(isSelected && White) || Dark50}
        block
        onClick={e => setSelectedTable(table)}
      >
        {table.label}
      </RoundedButton>
    );
  };

  return (
    <section className={styles.SelectTable}>
      <DineEasyLogo
        onClick={redirectToHome}
        className={styles.Logo}
      ></DineEasyLogo>
      <div className={styles.TablesList}>
        <Typography.Heading1 className={styles.RestName}>
          Ganga Vegetarian restaurant
        </Typography.Heading1>
        <h2 className={styles.TableNumberMessage}>What’s your table number?</h2>
        <div className={styles.TableNumbers}>
          {restaurant!.tables.map(getTable)}
        </div>
      </div>
      <RoundedButton
        round
        background={(selectedTable && Primary) || Dark25}
        textColor={White}
        block
        className={styles.NextButton}
        onClick={navigateToNext}
      >
        {(selectedTable && "Show Menu") || "Select Table Number"}
      </RoundedButton>
    </section>
  );
}
