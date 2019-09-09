import React from "react";
import { Typography } from "components";
import { Taxonomies } from "models/Taxonomies";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Skeleton from "antd/lib/skeleton";
import classNames from "classnames";
import styles from "../MenuBoard.module.scss";

type Props = {
  isLoading: boolean;
  selectedTab: number;
  setSelectedTab: (e) => void;
  categories?: Taxonomies;
};

export default function MenuHeader(props: Props) {
  const { isLoading, selectedTab, setSelectedTab, categories } = props;

  return (
    <header>
      {categories && (
        <Typography.Heading1 className={styles.RestName}>
          {(categories && categories.restaurantName) || ""}
        </Typography.Heading1>
      )}
      <Tabs
        value={selectedTab}
        onChange={(event, newValue) => {
          setSelectedTab(newValue);
        }}
        centered
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        classes={{
          indicator: styles.Indicator
        }}
      >
        {isLoading && (
          <>
            <Tab label={<Skeleton paragraph={false} active />}></Tab>
            <Tab label={<Skeleton paragraph={false} active />}></Tab>
            <Tab label={<Skeleton paragraph={false} active />}></Tab>
            <Tab label={<Skeleton paragraph={false} active />}></Tab>
            <Tab label={<Skeleton paragraph={false} active />}></Tab>
            <Tab label={<Skeleton paragraph={false} active />}></Tab>
            <Tab label={<Skeleton paragraph={false} active />}></Tab>
            <Tab label={<Skeleton paragraph={false} active />}></Tab>
            <Tab label={<Skeleton paragraph={false} active />}></Tab>
          </>
        )}
        {!isLoading &&
          categories!.categories.map(category => (
            <Tab
              key={category.id}
              classes={{
                root: styles.Tab,
                selected: classNames(styles.Selected)
              }}
              value={category.id}
              label={<Typography.Span>{category.label}</Typography.Span>}
            />
          ))}
      </Tabs>
    </header>
  );
}
