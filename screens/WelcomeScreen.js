import React from "react";
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/hamburger.jpg")}
    >
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => console.log("Login pressed")} />
        <AppButton
          title="Register"
          onPress={() => console.log("Register pressed")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginBottom: 50,
  },
});
export default WelcomeScreen;
