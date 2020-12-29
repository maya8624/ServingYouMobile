import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MenuListScreen from "../screens/MenuListScreen";
import MenuDetailsScreen from "../screens/MenuDetailsScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShow: false }}>
    <Stack.Screen name="Menu List" component={MenuListScreen} />
    <Stack.Screen name="MenuDetails" component={MenuDetailsScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
