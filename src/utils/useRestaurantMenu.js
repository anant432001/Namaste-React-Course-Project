import React, { useState } from "react";
import { useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (props) => {
  const [resInfo, setResInfo] = useState(null);
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + props);
    const jsonData = await data.json();
    console.log(jsonData);
    setResInfo(jsonData.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
