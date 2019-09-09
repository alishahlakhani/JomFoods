import { createConnectedStore, withLogger } from "undux";
import { Category } from "models/Taxonomies";

type State = {
  order: Array<Category & { quantity: number; notes: string }>;
  count: number;
};

let initialState: State = {
  order: [],
  count: 0
};

export const MenuStore = createConnectedStore(initialState, withLogger);
