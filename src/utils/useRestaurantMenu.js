import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu(resId);
  }, []);

  const fetchRestaurantMenu = async (resId) => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();

    setResInfo(json.data);
  }

  return resInfo;
}

export default useRestaurantMenu;