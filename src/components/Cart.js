import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  console.log("Cart Component Rendered!");
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    // Dispatch an action
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-6xl">Cart</h1>
      {items.length ? (
        <button
          className="m-4 border border-black rounded-lg px-4 text-white bg-black"
          onClick={handleClearCart}>
          Clear Cart
        </button>
      ) : (
        <p className="font-bold m-4 p-4">
          The cart is empty. Explore and add some...
        </p>
      )}
      <div className="w-8/12 m-auto">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Cart;
