import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";

const MenuList = ({ name, price, description, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <AppText>
        {name} {"$" + price}
      </AppText>
      <View>
        <AppText>{description}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default MenuList;
