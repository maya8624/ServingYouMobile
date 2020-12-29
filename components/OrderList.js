import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";

const ListMenu = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText>{name}</AppText>
        <AppText>{"$" + price}</AppText>
        <AppText>
          Quantity:
          <Button
            color="orange"
            title="+"
            onPress={() => setQuantity((prev) => prev + 1)}
          />
          <AppText>{quantity}</AppText>
          <Button
            color="orange"
            disabled={quantity === 1 ? true : false}
            title="-"
            onPress={() => setQuantity((prev) => prev - 1)}
          />
        </AppText>
        <AppText>Subtotal: {formatPrice(price * quantity)}</AppText>
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 10,
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default ListMenu;
