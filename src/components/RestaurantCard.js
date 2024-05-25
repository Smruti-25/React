import { RES_LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_LOGO_URL + cloudinaryImageId}
      />
      <h3 style={{ margin: "8px 0 8px 4px" }}>{name}</h3>
      <h4 style={{ margin: "2px 0" }}>{cuisines.join()}</h4>
      <h4 style={{ margin: "2px 0" }}>{avgRating}</h4>
      <h4 style={{ margin: "2px 0" }}>{sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;