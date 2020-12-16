import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const messages = [
  {
    id: 1,
    name: "T-bone Steak",
    price: "18",
    description: "Lorem ipsum dolor sit.",
    image: require("../assets/hamburger.jpg"),
  },
  {
    id: 2,
    name: "Korean BBQ",
    price: "25",
    description: "Lorem ipsum dolor sit.",
    image: require("../assets/hamburger.jpg"),
  },
  {
    id: 3,
    name: "Pasta",
    price: "19",
    description: "Lorem ipsum dolor sit.",
    image: require("../assets/logo.png"),
  },
];

const MenuListScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            price={"$" + item.price}
            description={item.description}
            imageUrl={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.light,
  },
});
export default MenuListScreen;
