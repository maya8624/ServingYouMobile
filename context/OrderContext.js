import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const OrderContext = React.createContext();

export default function OrderProvider({ children }) {
  const [items, setItems] = useState([]);
  const token = "order";

  const addToCart = async (item) => {
    const items = JSON.parse(await AsyncStorage.getItem(token)) || [];

    items.push(item);

    const newItems = items.reduce((accumulator, currentItem) => {
      const item = accumulator.find((a) => a.id === currentItem.id);
      if (item) {
        item.quantity = item.quantity + 1;
      } else {
        accumulator.push({
          quantity: 1,
          ...currentItem,
        });
      }
      return accumulator;
    }, []);

    saveOrderItems(newItems);
    setItems(newItems);
    console.log(items);
  };

  const changeQuantity = async (id, changeType) => {
    const items = getSavedItems();
    console.log(items);

    const index = items.findIndex((item) => item.id === id);
    changeType === "increase"
      ? items[index].quantity++
      : items[index].quantity--;

    saveOrderItems(items);
    return orderService.getOrderItems();
  };

  const removeFromCart = (id) => {
    const items = getSavedItems();
    const updatedItems = items.filter((item) => item.id !== id);

    saveOrderItems(updatedItems);
    setItems(updatedItems);

    return updatedItems;
  };

  const getSavedItems = async () => {
    return JSON.parse(await AsyncStorage.getItem(token)) || [];
  };

  const saveOrderItems = async (items) => {
    try {
      await AsyncStorage.setItem(token, JSON.stringify(items));
    } catch (error) {
      console.log("Error while saving items in the localstroage.", error);
      return null;
    }
  };

  return (
    <OrderContext.Provider
      value={{
        items: getSavedItems(),
        addToCart,
        changeQuantity,
        removeFromCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
