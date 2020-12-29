import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import MenuDetailsScreen from "./screens/MenuDetailsScreen";
import MenuListScreen from "./screens/MenuListScreen";
import OrderInfoScreen from "./screens/OrderInfoScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeNavigator from "./navigation/HomeNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import Screen from "./components/Screen";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  // const demo = async () => {
  //   try {
  //     await AsyncStorage.setItem(
  //       "test",
  //       JSON.stringify({ id: 1, menu: "pizza" })
  //     );
  //     const value = await AsyncStorage.getItem("test");
  //     const test = JSON.parse(value);
  //     console.log(test);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // demo();
  // return null;
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
