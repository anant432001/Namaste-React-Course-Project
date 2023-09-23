import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // UseEffect's callback fn is called, after the component renders
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurant(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(jsonData.data);
  };
  // const onlineStatus = useOnlineStatus();
  if (!useOnlineStatus()) return <h1>You are Offline!</h1>;

  return filteredListOfRestaurant?.length == 0 ? (
    <h1>Loading..</h1>
  ) : (
    <div className="body">
      <div>
        <div className="p-4 m-4 flex space-x-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setFilteredListOfRestaurant(filteredRestaurant);
            }}
          />
          <button
            className="px-4 py-1 mx-2 bg-blue-600 rounded-lg text-sm text-white"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurant(filteredRestaurant);
            }}>
            Search
          </button>
          <button
            className="px-4 py-1 mx-2 bg-blue-600 rounded-lg text-sm text-white"
            onClick={() => {
              // Filter Logic
              const filteredList = listOfRestaurants?.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setFilteredListOfRestaurant(filteredList);
            }}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap px-2">
        {filteredListOfRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
