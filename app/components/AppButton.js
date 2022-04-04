import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary", style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default AppButton;
