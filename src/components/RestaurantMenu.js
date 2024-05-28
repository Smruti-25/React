import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const fetchMenu = async() => {
    const jsonData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.11610&lng=79.07060&restaurantId=553826&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await jsonData.json();

    console.log(json);
    // const restaurantData = json?.data?.cards[2]?.card?.card?.info;
    // const restaurantMenu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    setRestaurantInfo(json.data);
  };

  if(restaurantInfo === null) return <Shimmer/>

  const { name, costForTwoMessage, avgRating, cuisines } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  
  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <div className="menu">
      <div>
        <h1>{name}</h1>
        <h2>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
        <h2>{avgRating}</h2>

        <h2>Menu</h2>
        <ul>
          <li>{itemCards}</li>
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;