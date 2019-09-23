import React, { useState, useEffect } from "react";
import { Dark50, Primary, White, Dark100, Dark25, Error } from "styles/colors";
import { RouteComponentProps, Redirect } from "@reach/router";
import { Typography } from "components";
import { TextField } from "@material-ui/core";
import { RoundedButton } from "components/buttons";
import { useSpring, animated } from "react-spring";
import { GlobalStore } from "store";
import { MenuItem } from "models/Taxonomies";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import classNames from "classnames";
import styles from "./AddItemDrawer.module.scss";

export default function AddItemDrawer(props: RouteComponentProps) {
  const store = GlobalStore.useStore();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const selectedItem = props.location!.state!;

  const orderCategory = store.get("order")[selectedItem.category.label];
  const preAddedItemIndex =
    orderCategory &&
    orderCategory.items.findIndex(i => selectedItem.item.id === i.id);

  const preAddedItem = orderCategory && orderCategory.items[preAddedItemIndex];

  const [order, setOrder] = useState({
    quantity:
      (preAddedItem && preAddedItem.quantity > -1 && preAddedItem.quantity) ||
      0,
    notes: (preAddedItem && preAddedItem.notes) || ""
  });

  const imageHeightSpring = useSpring({
    immediate: false,
    height: (!expanded && "30vh") || "100vh",
    width: "100%",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  });

  useEffect(() => {
    setTimeout(() => {
      setOpen(!open);
    }, 10);
    // eslint-disable-next-line
  }, []);

  // const iOS =
  //   process["browser"] && /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (!selectedItem) {
    return <Redirect noThrow to="../../" />;
  }

  const menuItem: MenuItem = selectedItem!.item;

  const close = () => {
    setTimeout(() => {
      props.navigate!("../../");
    }, 250);
    setOpen(false);
  };

  const complete = () => {
    const finalOrder = store.get("order");

    let newOrder = orderCategory;

    if (!orderCategory) {
      newOrder = { ...selectedItem.category, items: [] };
    }

    if (preAddedItemIndex > -1) {
      newOrder.items[preAddedItemIndex] = {
        ...newOrder.items[preAddedItemIndex],
        ...order
      };
    } else {
      newOrder.items.push({
        ...selectedItem.item,
        ...order
      });
    }

    finalOrder[selectedItem.category.label] = newOrder;
    store.set("order")(finalOrder);

    close();
  };

  const next = () => {
    complete();
  };

  return (
    <SwipeableDrawer
      BackdropProps={{ classes: { root: styles.BackdropStyle } }}
      PaperProps={{ classes: { root: styles.PaperStyle } }}
      elevation={0}
      anchor="bottom"
      open={open}
      hysteresis={0.4}
      minFlingVelocity={5000}
      transitionDuration={{ enter: 500, exit: 250 }}
      onClose={() => close()}
      onOpen={() => {}}
    >
      {!expanded && (
        <>
          <Typography.Paragraph
            textColor={Dark50}
            className={styles.SwipeDownMessage}
          >
            Swipe down to close
          </Typography.Paragraph>
        </>
      )}
      <div className={styles.AddItemDrawer}>
        <animated.div
          style={imageHeightSpring}
          onClick={e => setExpanded(!expanded)}
        ></animated.div>
        <div className={styles.ItemInformation}>
          <div className={styles.ItemDesc}>
            <div className={styles.Header}>
              <Typography.Heading3>{menuItem.label}</Typography.Heading3>
              <Typography.Heading1>
                {menuItem.currency} {menuItem.price}
              </Typography.Heading1>
            </div>
            <Typography.Paragraph textColor={Dark50}>
              {menuItem.desc}
            </Typography.Paragraph>
            <br />

            <TextField
              label="Optional: Any special requirement?"
              margin="none"
              variant="outlined"
              multiline
              fullWidth
              rows="4"
              rowsMax="4"
              defaultValue={order.notes}
              // value={order.notes}
              onChange={v => {
                const val = v["target"]["value"];
                setOrder(o => {
                  return { ...o, notes: val };
                });
              }}
            />
            <div className={styles.Quantity}>
              <RoundedButton
                round={100}
                shadow={(order.quantity === 0 && Dark25) || Error}
                background={(order.quantity === 0 && Dark25) || Error}
                textColor={White}
                disabled={order.quantity === 0}
                onClick={e =>
                  setOrder(old => {
                    return { ...old, quantity: old.quantity - 1 };
                  })
                }
                className={classNames(styles.Subtract, styles.QuantityButton)}
              >
                -
              </RoundedButton>

              <Typography.Heading1
                textColor={Dark100}
                className={styles.NumberCount}
              >
                {order.quantity}
              </Typography.Heading1>
              <RoundedButton
                round={100}
                shadow
                onClick={e =>
                  setOrder(old => {
                    return { ...old, quantity: old.quantity + 1 };
                  })
                }
                background={Primary}
                textColor={White}
                className={classNames(styles.Add, styles.QuantityButton)}
              >
                +
              </RoundedButton>
            </div>

            <RoundedButton
              round
              onClick={() => next()}
              block
              disabled={order.quantity === 0}
              shadow={(order.quantity === 0 && Dark25) || Primary}
              background={(order.quantity === 0 && Dark25) || Primary}
              textColor={White}
              className={styles.NextButton}
            >
              Add
            </RoundedButton>
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  );
}
