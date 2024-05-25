import RestaurantCard from "./RestaurantCard";
import {resObj} from "../utils/mockData"
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resObj);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log(restaurants);
            const list = restaurants.filter((res) => res.info.avgRating > 4.3);
            console.log(list);
            setRestaurants(list);
          }}
        >
          {" "}
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
