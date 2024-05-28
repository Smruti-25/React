import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const jsonData = await fetch("");
    const json = await jsonData.json();

    console.log(json);
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