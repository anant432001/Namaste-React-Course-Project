import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  // const [showItems, setShowItems] = useState(true);
  const handleClick = () => {
    // setShowItems(!showItems);
    showItems ? setShowIndex(null) : setShowIndex(index);
    // setShowIndex();
  };

  return (
    <div className="w-8/12 bg-gray-100 shadow-lg mx-auto p-4 my-4">
      <div
        className="justify-between flex cursor-pointer"
        onClick={handleClick}>
        <span className="font-bold text-sm">
          {data.title} ({data.itemCards.length})
        </span>
        <span>↓</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
