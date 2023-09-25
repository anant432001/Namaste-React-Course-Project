import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData?.info;

  return (
    <div className=" m-4 w-[250px] h-[350px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img className="rounded-sm" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
      <div className="p-2">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars ⭐️</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
