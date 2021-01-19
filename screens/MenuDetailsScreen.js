import React from "react";
import { Button, Image, View, StyleSheet, FlatList } from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { useOrder } from "../hooks/useOrder";

const MenuDetailsScreen = ({ route }) => {
  const menu = route.params.item;
  const order = useOrder();

  const addToCart = (item) => {
    order.addToCart(item);
  };

  return (
    <Screen style={styles.screen}>
      <Image style={styles.image} source={menu.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.name}>{menu.name}</AppText>
        <AppText></AppText>
        <AppText>${menu.price}</AppText>
        <AppText>{menu.description}</AppText>
        <Button title="Add To Cart" onPress={() => addToCart(menu)} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  badge: { padding: 10, fontSize: 50 },
  detailsContainer: {
    padding: 15,
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "orange",
    marginBottom: 7,
  },
  image: {
    width: "100%",
    height: 300,
  },
  screen: {
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: colors.light,
  },
});

export default MenuDetailsScreen;
