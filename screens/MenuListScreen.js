import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const messages = [
  {
    id: 1,
    name: "Awesome Burger",
    price: "18",
    description: "Lorem ipsum dolor sit.",
    image: require("../assets/hamburger.jpg"),
  },
  {
    id: 2,
    name: "Pizza delicius",
    price: "22",
    description: "Lorem ipsum dolor sit.",
    image: require("../assets/pizza-1.jpg"),
  },
  {
    id: 3,
    name: "Yum Yum Pizza",
    price: "20",
    description: "Lorem ipsum dolor sit.",
    image: require("../assets/pizza-3.jpg"),
  },
  {
    id: 4,
    name: "Pasta Salad",
    price: "19",
    description: "Lorem ipsum dolor sit.",
    image: require("../assets/pasta-salad.jpg"),
  },
  {
    id: 5,
    name: "Som pork on the grill",
    price: "25",
    description: "Lorem ipsum dolor sit.",
    image: require("../assets/pork-belly.jpg"),
  },
  {
    id: 6,
    name: "Sushi you are fresh",
    price: "18",
    description: "Lorem ipsum dolor sit.",
    image: require("../assets/sushi-6.jpg"),
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
        ItemSeparatorComponent={() => <ListItemSeparator />}
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
