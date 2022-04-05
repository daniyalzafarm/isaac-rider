import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function TopTab({ title, onPress, selectionState, selection, count }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          },
          selectionState == selection && styles.selected,
          selectionState != selection && styles.notSelected,
        ]}
      >
        <View
          style={{
            height: 18,
            width: 18,
            borderRadius: 9,
            borderColor: colors.primary,
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppText
            style={{ fontSize: 10, fontWeight: "bold", color: colors.primary }}
          >
            {count}
          </AppText>
        </View>
        <View>
          <AppText style={[styles.index]}>{title}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  index: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  selected: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
  },
  notSelected: {
    opacity: 0.2,
  },
});
export default TopTab;
