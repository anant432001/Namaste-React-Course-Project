import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();

  console.log("filteredListOfRestaurant : " + listOfRestaurants?.length);

  // UseEffect's callback fn is called, after the component renders
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    console.log("jsonData:\n" + jsonData);
    console.log(
      "Exact Data : " + jsonData.data.cards[2].card.card.gridElements
    );
    setListOfRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurant(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return filteredListOfRestaurant?.length == 0 ? (
    <h1>Loading..</h1>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
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
            onClick={() => {
              const filteredRestaurant = listOfRestaurants?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurant(filteredRestaurant);
            }}>
            Search
          </button>
          {console.log("s size:" + listOfRestaurants?.length)}
          {console.log("f size:" + filteredListOfRestaurant?.length)}
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants?.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            console.log("filteredList : \n" + filteredList);
            setFilteredListOfRestaurant(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {console.log("hello1\n")}
        {console.log("size : " + filteredListOfRestaurant?.length + "\n")}

        {filteredListOfRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        {console.log("hello2\n")}
      </div>
    </div>
  );
};

export default Body;
