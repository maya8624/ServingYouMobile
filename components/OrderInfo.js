import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

const OrderInfo = ({ name, price, image, onPress, renderRightActions }) => {
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      overshootFriction={9}
      friction={2}
    >
      <TouchableHighlight underlayColr={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={{ color: "#33334d", fontSize: 15 }}>
              {name} -{formatPrice(price * 1)}
            </AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 35,
  },

  image: {
    borderRadius: 5,
    width: 40,
    height: 40,
    borderColor: "orange",
    marginRight: 10,
  },
});

export default OrderInfo;
