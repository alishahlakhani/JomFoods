import { createConnectedStore, Effects } from "undux";
import { MenuItem, Menu, Taxonomies } from "models/Taxonomies";
import { RestaurantInfo, TableInfo } from "models/RestaurantInfo";

type State = {
  order: {
    [label: string]: Omit<Menu, "items"> & {
      items: Array<
        MenuItem & {
          quantity: number;
          notes: string;
        }
      >;
    };
  };
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
  order: {},
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

let effects: Effects<State> = store => {
  store.on("order").subscribe(order => {
    const newCount = Object.values(order).reduce((total, currentValue) => {
      return (
        total +
        currentValue.items.reduce((cTotal, cCurrentValue) => {
          return cCurrentValue.quantity + cTotal;
        }, 0)
      );
    }, 0);
    store.set("count")(newCount);
  });
  return store;
};
export const GlobalStore = createConnectedStore(initialState, effects);
