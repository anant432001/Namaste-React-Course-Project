import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cart = useSelector((store) => store.cart.items);
  console.log("cart : " + cart);
  return (
    <div className="flex justify-between shadow-lg mb-2 text-lg">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-36" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 pr-12">
          <li className="px-4">{onlineStatus ? "💚" : "💔"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">🛒 [{cart.length}]</Link>
          </li>
          <button
            onClick={() => {
              if (
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              );
            }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
