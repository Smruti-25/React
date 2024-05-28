import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const jsonData = await fetch(MENU_API_URL+resId);
    const json = await jsonData.json();
    console.log(json);
    setRestaurantInfo(json.data);
  };

  if (restaurantInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRating, cuisines } = restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  if (itemCards === null) return <Shimmer />;

  return (
    <div className="menu">
      <div>
        <h1>{name}</h1>
        <h3>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
        <h3>{avgRating}</h3>

        <h2>Menu</h2>
        <ul>
          {itemCards.map((icard) => (
            <li key={icard.card.info.id}>
              {icard.card.info.name} - Rs {icard.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;