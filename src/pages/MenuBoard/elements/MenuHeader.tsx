import React from "react";
import { Typography } from "components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Skeleton from "antd/lib/skeleton";
import classNames from "classnames";
import styles from "../MenuBoard.module.scss";

type Props = {
  isLoading: boolean;
  selectedTab: number;
  setSelectedTab: (e) => void;
  tabs?: Array<{ label: string; id: number }>;
  title?: string;
};

export default function MenuHeader(props: Props) {
  const {
    isLoading,
    selectedTab,
    setSelectedTab,
    tabs = [],
    title = ""
  } = props;

  return (
    <header>
      <Typography.Heading1 className={styles.RestName}>
        {title}
      </Typography.Heading1>
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
          tabs.map(tab => (
            <Tab
              key={tab.id}
              classes={{
                root: styles.Tab,
                selected: classNames(styles.Selected)
              }}
              value={tab.id}
              label={<Typography.Span>{tab.label}</Typography.Span>}
            />
          ))}
      </Tabs>
    </header>
  );
}
