import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

    return restaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
            }}/>
            <button onClick={() => console.log(searchText)}>Search</button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setRestaurants(filteredList);
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
