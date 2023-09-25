import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  // We did this before destructuring because it is possible that resInfo is not initialised by the api yet
  if (resInfo === null) return <h1>Loading Menu!</h1>;

  // Destructuring
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold mt-5 mb-4 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          index={index}
          showItems={index === showIndex ? true : false}
          setShowIndex={(props) => setShowIndex(props)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
