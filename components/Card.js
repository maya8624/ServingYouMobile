import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ name, price, description, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={imageUrl} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.name} numberOfLines={1}>
            {name}
          </AppText>
          <AppText>{price}</AppText>
          <AppText style={styles.description} numberOfLines={2}>
            {description}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  description: {
    color: colors.secondary,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 7,
  },
});

export default Card;
