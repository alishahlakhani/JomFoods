import React, { useState, useEffect } from "react";
import { Dark50, Primary, White, Dark100 } from "styles/colors";
import { RouteComponentProps } from "@reach/router";
import { ReactComponent as DineEasyLogo } from "svgs/dineEasyLogo.svg";
import { Typography } from "components";
import { TextField } from "@material-ui/core";
import { RoundedButton } from "components/buttons";
import { MenuStore } from "pages/MenuBoard/MenuBoard.store";
import { useSpring, animated } from "react-spring";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import styles from "./AddItemDrawer.module.scss";
import classNames from "classnames";

export default function AddItemDrawer(props: RouteComponentProps) {
  const store = MenuStore.useStore();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState({ count: 1, notes: "" });

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
  }, []);

  // const iOS =
  //   process["browser"] && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const selectedItem = props.location!.state!;
  const close = () => {
    setTimeout(() => {
      props.navigate!("../../");
    }, 250);
    setOpen(false);
  };

  const complete = () => {
    store.set("count")(store.get("count") + order.count);
    store.set("order")(
      store.get("order").concat([
        {
          ...selectedItem,
          quantity: order.count,
          notes: order.notes
        }
      ])
    );
    close();
  };

  const next = () => {
    if (page === 0) setPage(page + 1);
    else complete();
  };

  return (
    <SwipeableDrawer
      BackdropProps={{ classes: { root: styles.BackdropStyle } }}
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
        <Typography.Paragraph
          textColor={Dark50}
          className={styles.SwipeDownMessage}
        >
          Swipe down to close
        </Typography.Paragraph>
      )}
      <div className={styles.AddItemDrawer}>
        <animated.div
          style={imageHeightSpring}
          onClick={e => setExpanded(!expanded)}
        ></animated.div>
        <div className={styles.ItemInformation}>
          <DineEasyLogo className={styles.DineEasyLogo}></DineEasyLogo>
          <div className={styles.ItemDesc}>
            <div className={styles.Header}>
              <Typography.Heading3>{selectedItem.title}</Typography.Heading3>
              <Typography.Heading1>
                {selectedItem.currency} {selectedItem.price}
              </Typography.Heading1>
            </div>
            <Typography.Paragraph textColor={Dark50}>
              {selectedItem.desc}
            </Typography.Paragraph>
            <br />

            {page === 0 && (
              <div className={styles.Quantity}>
                <button
                  style={{
                    backgroundColor: (order.count === 1 && Dark50) || Primary
                  }}
                  disabled={order.count === 1}
                  onClick={e =>
                    setOrder(old => {
                      return { ...old, count: old.count - 1 };
                    })
                  }
                  className={classNames(styles.Subtract, styles.QuantityButton)}
                >
                  -
                </button>
                <Typography.Heading1
                  textColor={Dark100}
                  className={styles.NumberCount}
                >
                  {order.count}
                </Typography.Heading1>
                <button
                  className={classNames(styles.Add, styles.QuantityButton)}
                  onClick={e =>
                    setOrder(old => {
                      return { ...old, count: old.count + 1 };
                    })
                  }
                >
                  +
                </button>
              </div>
            )}

            {page === 1 && (
              <>
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
                <br />
                <br />
              </>
            )}

            <RoundedButton
              onClick={() => next()}
              block
              background={Primary}
              textColor={White}
            >
              {(page === 0 && "Next") || "Add"}
            </RoundedButton>
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  );
}
