import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-2 shadow-sm text-left">
            <div className="flex justify-between">
              <div className="py-3">
                <span className="text-md">
                  {item.card.info.name}{" "}
                  <span className="text-sm">
                    - ₹
                    {item.card.info.defaultPrice
                      ? item.card.info.defaultPrice / 100
                      : item.card.info.price / 100}
                  </span>
                </span>
                <p className="text-xs pt-2">{item.card.info.description}</p>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-32 h-24 mt-5 rounded-lg ml-24"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
