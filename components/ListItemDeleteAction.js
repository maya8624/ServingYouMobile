import React, { useState } from "react";
import {
  Button,
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";

function ListItemDeleteAction({ item, onPress, screenName }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [qty, setQty] = useState(1);
  const navigation = useNavigation();

  const updateOrder = () => {
    console.log(screenName);
    setModalVisible(false);
    navigation.navigate(screenName);
  };

  const formatPrice = () => {
    return `$${item.price * qty.toFixed(2)}`;
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <View>
            <MaterialCommunityIcons
              name="square-edit-outline"
              size={24}
              color={colors.white}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={onPress}>
          <View>
            <MaterialCommunityIcons
              name="trash-can"
              size={25}
              color={colors.white}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="overFullScreen"
        transparent
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image style={styles.image} source={item.image} />
          </View>
          <View>
            <Text>
              {item.name}: ${item.price}
            </Text>
          </View>
          <View
            style={{
              borderRadius: 25,
              flexDirection: "row",
              width: "50%",
              height: 70,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              disabled={qty === 1 ? true : false}
              onPress={() => setQty((prevQty) => prevQty - 1)}
            >
              <View>
                <MaterialCommunityIcons
                  name="minus-circle-outline"
                  size={40}
                  color={qty === 1 ? "grey" : "orange"}
                />
              </View>
            </TouchableOpacity>
            <Text style={{ color: "#000" }}>{qty}</Text>

            <TouchableOpacity onPress={() => setQty((prevQty) => prevQty + 1)}>
              <View>
                <MaterialCommunityIcons
                  name="plus-circle-outline"
                  size={40}
                  color="orange"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text>Total: {formatPrice()}</Text>
          </View>
          <Button
            title="Update Order"
            onPress={() => updateOrder()} //() => setModalVisible(false))}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.dark,
    width: "50%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  image: {
    borderRadius: 5,
    width: 350,
    height: 270,
    borderColor: "orange",
    marginRight: 10,
  },
});

export default ListItemDeleteAction;
