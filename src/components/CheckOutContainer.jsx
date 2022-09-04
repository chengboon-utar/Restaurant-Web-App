import React, { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import EmptyCart from "../assets/emptyCart.svg";
import CartItemCard from "./CartItemCard";
import { motion } from "framer-motion";
import { useStateValue } from "../reducers/StateProvider";
import { actionType } from "../reducers/reducer";
import { firestore as db } from "../firebase-config";

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";

export const saveOrder = async (data) => {
  await setDoc(doc(db, "orders", `${Date.now()}`), data, {
    merge: true,
  });
};


const CheckOutContainer = ({ cartMenu, setCartMenu }) => {
  const [{ user, cartItems, foodItems, total }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    console.log(tot);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CART,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };


  const [address, setAddress] = useState("");

  const checkOut = async (e) => {
    e.preventDefault();
    alert("Your order has been placed successfully.\n\nTotal amount is RM" + (tot + 2.5) + "\n\nWe will deliver it to below address: \n" + address + "\n\nThank you and have a nice day!");
    const data = {
      user: user,
      cartItems: cartItems,
      total: (tot+2.5),
      address: address,
    };
    await saveOrder(data);
    clearCart();
    console.log(data);
  }

  return (
    <div className="w-full md:w-[375px] h-screen bg-slate-700  drop-shadow-md  flex flex-col items-center justify-center">
      {/* top */}
      <div className="w-full flex items-center justify-between p-4">
        <MdOutlineKeyboardBackspace
          className="text-textColor text-3xl"
          onClick={() => setCartMenu(false)}
        />
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <p
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </p>
      </div>
      {/* bottom */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          <div className="w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {cartItems &&
              cartItems.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">$ {tot}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">$ 2.5</p>
            </div>
            <div className="w-full border-b border-gray-600 my-2"></div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">
                $ {tot + 2.5}
              </p>
            </div>

            {/* Input Address */}
            <form className="w-full flex flex-col gap-2" onSubmit={checkOut}>

              <div className="w-full flex flex-col gap-2">
                <label className="text-gray-400 text-lg">Address</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md bg-gray-100"
                  placeholder="Enter your address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>


              {user ? (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  className="w-full p-2 rounded-full bg-yellow-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
                >
                  Check Out
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="button"
                  className="w-full p-2 rounded-full bg-yellow-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
                >
                  Login to check out
                </motion.button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-[300px]" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </div>
  );
}


export default CheckOutContainer;
