import React, { useEffect, useState } from "react";
import { ReactComponent as DineEasyLogo } from "svgs/dineEasyLogo.svg";
import { AppMaterialTheme, White } from "styles/colors";
import { Affix } from "antd";
import { MenuBoardServices } from "./MenuBoard.service";
import { Fab, MenuItem } from "components";
import { RouteComponentProps, Router, Redirect, navigate } from "@reach/router";
import { GlobalStore } from "store";
import Typography from "components/Typography/Typography";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import SwipeableViews from "react-swipeable-views";
import SkeletonManager from "components/SkeletonManager/SkeletonManager";
import MenuHeader from "./elements/MenuHeader";
import AddItemDrawer from "pages/AddItemDrawer/AddItemDrawer";
import styles from "./MenuBoard.module.scss";
import "antd/dist/antd.css";

export default function MenuBoard(props: RouteComponentProps) {
  const store = GlobalStore.useStore();
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(-1);

  useEffect(() => {
    MenuBoardServices.getTaxonomies(999).then(menu => {
      store.set("menu")(menu);
      setSelectedTabIndex(0);
    });
    // eslint-disable-next-line
  }, []);

  const taxonomy = store.get("menu");
  const restaurant = store.get("restaurant");
  if (!(taxonomy && restaurant)) return <Redirect noThrow to="../"></Redirect>;

  const menu = taxonomy.menu;
  const categories = menu.map(m => {
    return { label: m.label, id: m.id };
  });
  const isLoading = menu.length <= 0;

  const onNextClick = () => {
    navigate("/order");
  };

  const onItemClick = (item, category) =>
    props.navigate!(`./info/${item.id}`, {
      state: { item: item, category: category }
    });

  return (
    <ThemeProvider theme={AppMaterialTheme}>
      <div className={styles.MenuBoard}>
        <MenuHeader
          isLoading={isLoading}
          selectedTab={selectedTabIndex}
          setSelectedTab={setSelectedTabIndex}
          tabs={categories}
          title={restaurant && restaurant.label}
        ></MenuHeader>
        <section>
          <SwipeableViews
            enableMouseEvents
            animateHeight
            index={selectedTabIndex}
            disableLazyLoading
            onChangeIndex={setSelectedTabIndex}
          >
            {categories &&
              menu.map(category => {
                return (
                  <div
                    style={{
                      minHeight: "100%",
                      WebkitOverflowScrolling: "touch" // iOS momentum scrolling
                    }}
                  >
                    {category.items.map(item => (
                      <MenuItem
                        className={styles.MenuCard}
                        key={item.id}
                        title={item.label}
                        price={item.price}
                        desc={item.desc}
                        onClick={e => onItemClick(item, category)}
                      ></MenuItem>
                    ))}
                    <br></br>
                  </div>
                );
              })}
          </SwipeableViews>
          {isLoading && (
            <SkeletonManager loading={isLoading}>
              <>
                <MenuItem className={styles.MenuCard}></MenuItem>
                <MenuItem className={styles.MenuCard}></MenuItem>
                <MenuItem className={styles.MenuCard}></MenuItem>
                <MenuItem className={styles.MenuCard}></MenuItem>
                <MenuItem className={styles.MenuCard}></MenuItem>
              </>
            </SkeletonManager>
          )}
        </section>
        <Affix offsetBottom={0} style={{ width: "100%" }}>
          <footer>
            <DineEasyLogo className={styles.Logo}></DineEasyLogo>
          </footer>
        </Affix>
        {store.get("count") > 0 && (
          <Fab onClick={onNextClick}>
            <>
              <Typography.Heading2 textColor={White}>
                {store.get("count")}
              </Typography.Heading2>
              <Typography.Paragraph textColor={White}>
                {(store.get("count") > 1 && "Items") || "Item"}
              </Typography.Paragraph>
            </>
          </Fab>
        )}
        <Router>
          <AddItemDrawer path="/info/:id"></AddItemDrawer>
        </Router>
      </div>
    </ThemeProvider>
  );
}
