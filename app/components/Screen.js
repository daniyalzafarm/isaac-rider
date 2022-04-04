import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.padding, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  padding: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    width: "100%",
  },
});
export default Screen;
