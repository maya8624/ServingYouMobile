import React, { useState } from "react";
import { Button, FlatList } from "react-native";

import AppText from "../components/AppTextInput";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import OrderInfo from "../components/OrderInfo";
import Screen from "../components/Screen";

const initialMenus = [
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

const OrderInfoScreen = ({ navigation }) => {
  const [menus, setMenus] = useState(initialMenus);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (menu) => {
    setMenus(menus.filter((m) => m.id !== menu.id));
  };

  const totalPrice = (menus) => {
    menus.reduce((acc, menu) => acc + menu.price);
  };

  return (
    <Screen>
      <FlatList
        data={menus}
        keyExtractor={(menu) => menu.id.toString()}
        renderItem={({ item }) => (
          <OrderInfo
            name={item.name}
            price={item.price}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction
                item={item}
                onPress={() => handleDelete(item)}
                screenName="OrderDetails"
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefreshing={() => console.log("refreshing")}
      />
      <AppText>Total:{totalPrice(menus)} </AppText>
    </Screen>
  );
};

export default OrderInfoScreen;
