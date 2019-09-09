import React, { useContext } from "react";
import { Card, Typography } from "components";
import { Dark100, Dark50, Dark200 } from "styles/colors";
import { SkeletonContext } from "components/SkeletonManager/SkeletonManager";
import styles from "../MenuBoard.module.scss";
import Skeleton from "antd/lib/skeleton";

type Props = {
  title?: string;
  currency?: string;
  price?: string;
  desc?: string;
  onClick?: (e) => void;
};

export default function MenuCardItem(props: Props) {
  const { title = "", price = "", currency = "RM", desc, onClick } = props;
  const context = useContext(SkeletonContext);
  const isLoading = (context && context.loading) || false;
  return (
    <Card className={styles.MenuItem} onClick={onClick}>
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
              {title}
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
          <Typography.Small textColor={Dark50}>{desc}</Typography.Small>
        </Skeleton>
      </>
    </Card>
  );
}
