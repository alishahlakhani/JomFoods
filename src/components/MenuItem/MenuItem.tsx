import React, { useContext } from "react";
import { Card, Typography } from "components";
import { Dark100, Dark50, Dark200 } from "styles/colors";
import { SkeletonContext } from "components/SkeletonManager/SkeletonManager";
import styles from "./MenuItem.module.scss";
import Skeleton from "antd/lib/skeleton";
import classNames from "classnames";
import Badge from "antd/lib/badge";

type Props = {
  title?: string;
  currency?: string;
  price?: string;
  desc?: string;
  className?: string;
  count?: number;
  onClick?: (e) => void;
};

export default function MenuItem(props: Props) {
  const {
    className,
    title = "",
    price = "",
    currency = "RM",
    desc,
    onClick,
    count = 0
  } = props;
  const context = useContext(SkeletonContext);
  const isLoading = (context && context.loading) || false;
  return (
    <Card className={classNames(styles.MenuItem, className)} onClick={onClick}>
      <>
        <div className={styles.Top}>
          <Skeleton
            paragraph={false}
            title={{
              style: {
                width: "70%"
              }
            }}
            active
            loading={isLoading}
          >
            <Typography.Paragraph textColor={Dark100}>
              {title} {count > 1 && <Badge showZero={false} count={count} />}
            </Typography.Paragraph>
          </Skeleton>

          <Skeleton paragraph={false} title={false} active loading={isLoading}>
            <Typography.Heading2
              className={styles.ItemPrice}
              textColor={Dark200}
            >
              {currency} {price}
            </Typography.Heading2>
          </Skeleton>
        </div>
        <Skeleton
          title={false}
          paragraph={{
            rows: 1,
            width: "100%"
          }}
          active
          loading={isLoading}
        >
          <Typography.Span textColor={Dark50}>{desc}</Typography.Span>
        </Skeleton>
      </>
    </Card>
  );
}
