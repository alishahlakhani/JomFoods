import React, { useEffect, useState } from "react";
import { ReactComponent as DineEasyLogo } from "svgs/dineEasyLogo.svg";
import { AppMaterialTheme, White } from "styles/colors";
import { Affix } from "antd";
import { Taxonomies } from "models/Taxonomies";
import { MenuBoardServices } from "./MenuBoard.service";
import { Fab } from "components";
import { RouteComponentProps, Router } from "@reach/router";
import { MenuStore } from "./MenuBoard.store";
import Typography from "components/Typography/Typography";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import MenuCardItem from "./elements/MenuCardItem";
import SwipeableViews from "react-swipeable-views";
import SkeletonManager from "components/SkeletonManager/SkeletonManager";
import MenuHeader from "./elements/MenuHeader";
import AddItemDrawer from "pages/AddItemDrawer/AddItemDrawer";
import styles from "./MenuBoard.module.scss";
import "antd/dist/antd.css";

export default function Menu(props: RouteComponentProps) {
  return (
    <ThemeProvider theme={AppMaterialTheme}>
      <MenuStore.Container>
        <MenuBoard {...props}></MenuBoard>
      </MenuStore.Container>
    </ThemeProvider>
  );
}

function MenuBoard(props: RouteComponentProps) {
  const store = MenuStore.useStore();
  const [selectedTab, setSelectedTab] = useState<number>(-1);
  const [categories, setCategories] = useState<Taxonomies | undefined>(
    undefined
  );

  useEffect(() => {
    MenuBoardServices.getTaxonomies(999).then(result => {
      setCategories(result);
      setSelectedTab(4);
    });
  }, []);

  const isLoading = !categories;

  return (
    <div className={styles.MenuBoard}>
      <MenuHeader
        isLoading={isLoading}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        categories={categories}
      ></MenuHeader>
      <section>
        <SwipeableViews
          enableMouseEvents
          animateHeight
          index={selectedTab}
          disableLazyLoading
          onChangeIndex={setSelectedTab}
        >
          {categories &&
            categories.categories.map(category => {
              return (
                <div
                  style={{
                    minHeight: "100%",
                    WebkitOverflowScrolling: "touch" // iOS momentum scrolling
                  }}
                >
                  {category.items.map(item => (
                    <MenuCardItem
                      key={item.id}
                      title={item.title}
                      price={item.price}
                      desc={item.desc}
                      onClick={e =>
                        props.navigate!(`./info/${item.id}`, {
                          state: item
                        })
                      }
                    ></MenuCardItem>
                  ))}
                  <br></br>
                </div>
              );
            })}
        </SwipeableViews>
        {isLoading && (
          <SkeletonManager loading={isLoading}>
            <>
              <MenuCardItem></MenuCardItem>
              <MenuCardItem></MenuCardItem>
              <MenuCardItem></MenuCardItem>
              <MenuCardItem></MenuCardItem>
              <MenuCardItem></MenuCardItem>
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
        <Fab>
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
  );
}
