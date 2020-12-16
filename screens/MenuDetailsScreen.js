import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import ListMenu from "../components/ListMenu";

const MenuDetailsScreen = () => {
  return (
    <Screen>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/hamburger.jpg")}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.name}>Awesome Burger</AppText>
          <AppText></AppText>
          <AppText>$25</AppText>
          <AppText>
            description="Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consectetur quibusdam perferendis eligendi minus aliquam
            odio."
          </AppText>
          <ListMenu
            image={require("../assets/couch2_full.jpg")}
            name="Lorem"
            description="5 Listings. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,"
          />
          <AppButton title="Add To Cart" />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
});

export default MenuDetailsScreen;
