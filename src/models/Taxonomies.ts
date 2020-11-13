import { Identifier } from "./Common";

export type MenuItem = Identifier & {
  currency: string;
  price: string;
  desc: string;
};

export type Menu = Identifier & {
  disabled: boolean;
  items: Array<MenuItem>;
};

export type Taxonomies = {
  menu: Array<Menu>;
};
