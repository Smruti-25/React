import { RES_LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;
  let noOfStars = "";
  for (let i = 1; i<=avgRating; i++){
    noOfStars += "⭐️";
  }
  return (
    <div
      className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300"
    >
      <img
        className="rounded-2xl"
        alt="res-logo"
        src={RES_LOGO_URL + cloudinaryImageId}
      />
      <h3 className="font-bold p-2 text-lg">{name}</h3>
      <h4 className="p-1">{"🥣" +" "+ cuisines.join(", ")}</h4>
      <h4 className="p-1">{noOfStars +" "+ avgRating}</h4>
      <h4 className="p-1">{"🚴🏽‍♂️"+" "+sla?.deliveryTime + " " + "Mins"}</h4>
    </div>
  );
};

export default RestaurantCard;