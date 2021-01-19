import React from "react";
import { Animated, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const RenderRightAction = ({ dragX }) => {
  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101],
    outputRange: [-20, 0, 0, 1],
  });

  return (
    <View>
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Archive
        </Animated.Text>
      </RectButton>
    </View>
  );
};

export default RenderRightAction;
