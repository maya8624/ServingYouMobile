import React from "react";
import { Image, StyleSheet, View } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "space-between" }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#fc5c65",
          position: "absolute",
        }}
      ></View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#4ECDC4",
          position: "absolute",
        }}
      ></View>
    </View>
  );
};
const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    // position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ECDC4",
    position: "absolute",
    top: 40,
    right: 30,
  },
});
export default ViewImageScreen;
