import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Button, Modal, View, StyleSheet, Text } from "react-native";

const EditOrderModal = ({ visible, onPress }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="overFullScreen"
      transparent
    >
      <View style={styles.container}>
        <Button title="Close" onPress={onPress} />
        <View
          style={{
            width: 300,
            height: 50,
          }}
        >
          <Text>test</Text>
          <MaterialCommunityIcons />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default EditOrderModal;
