import { createConnectedStore, withLogger } from "undux";
import { MenuItem, Menu, Taxonomies } from "models/Taxonomies";
import { RestaurantInfo, TableInfo } from "models/RestaurantInfo";

type State = {
  order: Array<{
    category: Omit<Menu, "items"> & {
      items: Array<
        MenuItem & {
          quantity: number;
          notes: string;
        }
      >;
    };
  }>;
  restaurant?: RestaurantInfo;
  menu: Taxonomies;
  selectedTable?: TableInfo;
  count: number;
  configs: {
    tax: {
      percentage: number;
    };
  };
};

let initialState: State = {
  order: [],
  menu: { menu: [] },
  restaurant: undefined,
  selectedTable: undefined,
  count: 0,
  configs: {
    tax: {
      percentage: 0.2
    }
  }
};

export const GlobalStore = createConnectedStore(initialState, withLogger);
