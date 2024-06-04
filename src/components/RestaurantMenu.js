import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null || !restaurantInfo?.cards) return <Shimmer />;

  const { name, costForTwoMessage, avgRating, cuisines } = restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const category =
      restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    
    console.log(category);

  return (
    <div className="text-center">
      <div>
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <RestaurantCategory />
      </div>
    </div>
  );
}

export default RestaurantMenu;