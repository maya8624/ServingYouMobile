import React from "react";
import { FlatList } from "react-native";

import AppText from "../components/AppTextInput";
import OrderList from "../components/OrderList";
import Screen from "../components/Screen";

const menus = [
  {
    id: 1,
    name: "Pork on the grill",
    price: "35",
    description: "Lorem Ipsum is not simply random text.",
    image: require("../assets/pork-belly.jpg"),
  },
  {
    id: 2,
    name: "Your pizza ready",
    price: "25",
    description: "Lorem Ipsum is not simply random text.",
    image: require("../assets/pizza-3.jpg"),
  },
  {
    id: 3,
    name: "Never failed with spaghetti",
    price: "19",
    description: "Lorem Ipsum is not simply random text.",
    image: require("../assets/spaghetti.jpg"),
  },
];

const totalPrice = (menus) => {
  menus.reduce((acc, menu) => acc + menu.price);
};

const OrderInfoScreen = () => {
  return (
    <Screen>
      <FlatList
        data={menus}
        keyExtractor={(menu) => menu.id.toString()}
        renderItem={({ item }) => (
          <OrderList name={item.name} price={item.price} image={item.image} />
        )}
      />
      <AppText>Total:{totalPrice(menus)} </AppText>
    </Screen>
  );
};

export default OrderInfoScreen;
