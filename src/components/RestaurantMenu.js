import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const fetchMenu = async () => {
    const jsonData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.11610&lng=79.07060&restaurantId=553826&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await jsonData.json();

    console.log(json);
    const restaurantData = json?.data?.cards[2]?.card?.card?.info;
    const restaurantMenu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    console.log(restaurantData, restaurantMenu);
    setRestaurantData(restaurantData);
    setRestaurantMenu(restaurantMenu);
  };

  return (
    <div className="menu">
      <h1>
        I am the restaurant menu Page
      </h1>
    </div>
  )
}

export default RestaurantMenu;