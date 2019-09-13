import React from "react";
import { RouteComponentProps, Redirect } from "@reach/router";
import { Typography, MenuItem } from "components";
import { GlobalStore } from "store";
import styles from "./YourOrder.module.scss";
import { RoundedButton } from "components/buttons";
import { Primary, White, Dark50, Dark200 } from "styles/colors";

export default function YourOrder(props: RouteComponentProps) {
  const store = GlobalStore.useStore();
  const taxPercentage = store.get("configs").tax.percentage;
  const selectedItems = store.get("order");

  if (selectedItems.length === 0) {
    return <Redirect noThrow to="/"></Redirect>;
  }

  const getCumulativePrice = (price, quantity) => {
    return parseFloat(
      (parseFloat(price) * parseFloat(Number(quantity).toFixed(2))).toFixed(2)
    );
  };

  const getSubTotal = () => {
    let subTotal = 0.0;
    selectedItems.forEach(cat =>
      cat.category.items.forEach(
        item => (subTotal += getCumulativePrice(item.price, item.quantity))
      )
    );
    return subTotal.toFixed(2);
  };

  const getTax = subTotal => {
    return (subTotal * taxPercentage).toFixed(2);
  };

  const getTotal = (subTotal, tax) => {
    return parseFloat(subTotal + tax).toFixed(2);
  };

  const orderSubTotal = getSubTotal();
  const orderTax = getTax(parseFloat(orderSubTotal));
  const orderTotal = getTotal(parseFloat(orderSubTotal), parseFloat(orderTax));

  return (
    <section className={styles.YourOrder}>
      <header>
        <Typography.Heading1 className={styles.RestName}>
          Your Order
        </Typography.Heading1>
      </header>
      <div className={styles.Categories}>
        {selectedItems.map(cat => (
          <>
            <Typography.Heading3 className={styles.CategoryHeading}>
              {cat.category.label}
            </Typography.Heading3>
            <div>
              {cat.category.items.map(item => (
                <MenuItem
                  className={styles.MenuCard}
                  key={item.id}
                  title={`${item.label} (x${item.quantity})`}
                  price={getCumulativePrice(item.price, item.quantity).toFixed(
                    2
                  )}
                  desc={item.notes}
                  count={item.quantity}
                ></MenuItem>
              ))}
            </div>
          </>
        ))}
      </div>
      <footer>
        <div className={styles.SumItem}>
          <Typography.Paragraph textColor={Dark50}>
            Subtotal
          </Typography.Paragraph>
          <Typography.Paragraph textColor={Dark50}>
            {orderSubTotal}
          </Typography.Paragraph>
        </div>
        <div className={styles.SumItem}>
          <Typography.Paragraph textColor={Dark50}>Tax</Typography.Paragraph>
          <Typography.Paragraph textColor={Dark50}>
            RM {orderTax}
          </Typography.Paragraph>
        </div>
        <div className={styles.SumItem}>
          <Typography.Paragraph textColor={Dark200}>Total</Typography.Paragraph>
          <Typography.Heading2 textColor={Dark200}>
            RM {orderTotal}
          </Typography.Heading2>
        </div>
        <RoundedButton textColor={White} background={Primary} block>
          Confirm Order
        </RoundedButton>
      </footer>
    </section>
  );
}
