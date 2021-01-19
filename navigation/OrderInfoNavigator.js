import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrderInfoScreen from "../screens/OrderInfoScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";

const Stack = createStackNavigator();

const OrderInfoNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="OrderInfo" component={OrderInfoScreen} />
    <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
  </Stack.Navigator>
);

export default OrderInfoNavigator;
