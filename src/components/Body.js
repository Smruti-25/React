import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return (
      <h1>Looks Like you are offline. Please check your internet connection.</h1>
    )
  }

    return restaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-1 bg-blue-400 m-4 rounded-lg"
              onClick={() => {
                {
                  const filteredRestaurants = restaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText)
                  );

                  setFilteredRestaurants(filteredRestaurants);
                }
              }}
            >
              Search
            </button>
          </div>
          <div className="m-4 p-4 flex items-center">
            <button
              className="px-4 py-1 bg-blue-200 m-4 rounded-lg"
              onClick={() => {
                const filteredList = restaurants.filter(
                  (res) => res.info.avgRating > 4.3
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              {" "}
              Top Rated Restaurants{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant.info.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard resData={restaurant?.info} />
              </Link>
            );
          })}
        </div>
      </div>
    );
};

export default Body;
