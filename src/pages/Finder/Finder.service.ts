import { RestaurantInfo } from "models/RestaurantInfo";

function getRestaurantInfo(storeId: number): Promise<RestaurantInfo> {
  const data: RestaurantInfo = {
    id: storeId,
    label: "Ganga Vegetarian restaurant",
    tables: [
      { id: 1, label: "1" },
      { id: 2, label: "2" },
      { id: 3, label: "3" },
      { id: 4, label: "4" },
      { id: 5, label: "5" },
      { id: 6, label: "6" },
      { id: 7, label: "7" },
      { id: 8, label: "8" },
      { id: 9, label: "9" },
      { id: 10, label: "10" },
      { id: 11, label: "11" },
      { id: 12, label: "12" },
      { id: 13, label: "13" },
      { id: 14, label: "14" },
      { id: 15, label: "15" },
      { id: 16, label: "16" },
      { id: 17, label: "17" },
      { id: 18, label: "18" }
    ]
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
}

export const FinderServices = {
  getRestaurantInfo
};
