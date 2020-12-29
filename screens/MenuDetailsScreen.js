import React from "react";
import { Image, View, StyleSheet, FlatList, ScrollView } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import ListMenu from "../components/ListMenu";
import colors from "../config/colors";

const menus = [
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

const MenuDetailsScreen = () => {
  return (
    <>
      <Screen style={styles.screen}>
        <ScrollView>
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
          </View>
          <FlatList
            data={menus}
            keyExtractor={(menu) => menu.id.toString()}
            renderItem={({ item }) => (
              <ListMenu
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            )}
          ></FlatList>
        </ScrollView>
      </Screen>
    </>
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
