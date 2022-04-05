import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import { FontAwesome5 } from "@expo/vector-icons";
function HomeButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome5 name="shopping-basket" color={colors.primary} size={25} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 30,
    height: 60,
    width: 60,
    elevation: 2,
    bottom: 2,
    borderColor: "white",
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeButton;
