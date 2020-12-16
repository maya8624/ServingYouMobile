import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";

const ListMenu = ({ name, description, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <AppText>{name}</AppText>
      <AppText>{description}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});

export default ListMenu;
