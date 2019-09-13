import { Identifier } from "./Common";

export type TableInfo = Identifier & {};

export type RestaurantInfo = Identifier & {
  tables: Array<TableInfo>;
};
