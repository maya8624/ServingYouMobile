import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import AppText from "../components/AppTextInput";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import OrderList from "../components/OrderInfo";
import Screen from "../components/Screen";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SwipeListView } from "react-native-swipe-list-view";

const initialMenus = [
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

const OrderInfoScreen = () => {
  const [menus, setMenus] = useState(initialMenus);
  const [refreshing, setRefreshing] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const handleDelete = (menu) => {
    setMenus(menus.filter((m) => m.id !== menu.id));
  };

  const totalPrice = (menus) => {
    menus.reduce((acc, menu) => acc + menu.price);
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = (data) => (
    <TouchableHighlight
      onPress={() => console.log("You touched me")}
      //   style={styles.rowFront}
      underlayColor={"#AAA"}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={data.item.image} />
        <View>
          <AppText>{data.name}</AppText>
          <AppText>{"$" + data.item.price}</AppText>
          {/* <AppText>
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
          </AppText> */}
          <AppText>
            Subtotal: {formatPrice(data.item.price * data.item.quantity)}
          </AppText>
        </View>
      </View>
    </TouchableHighlight>
  );

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };
  return (
    <Screen>
      <View>
        <SwipeListView
          data={menus}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-150}
          previewRowKey={"0"}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onRowDidOpen={onRowDidOpen}
        />
      </View>
      <AppText>Total:{totalPrice(menus)} </AppText>
    </Screen>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: "white",
  //     flex: 1,
  //   },

  container: {
    flexDirection: "row",
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
  image: {
    borderRadius: 10,
    width: 100,
    height: 100,
    margin: 10,
  },
});
export default OrderInfoScreen;
