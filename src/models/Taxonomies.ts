export type MenuItem = {
  id: number;
  title: string;
  currency: string;
  price: string;
  desc: string;
};

export type Category = {
  id: number;
  label: string;
  disabled: boolean;
  items: Array<MenuItem>;
};

export type Taxonomies = {
  restaurantId: number;
  restaurantName: string;
  categories: Array<Category>;
};
