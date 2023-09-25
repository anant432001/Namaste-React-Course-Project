import React from "react";

const HigherOrderComponent = (...passedComponent) => {
  const [RestaurantCard] = passedComponent;
  return (props) => {
    const {resData} = props;
    availability = resData.info.availability;
    return (
      <div>
        <label className="absolute px-2 ml-4 bg-slate-50 text-black rounded-br-lg">{availability ? "Open" : "Closed"}</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default HigherOrderComponent;
