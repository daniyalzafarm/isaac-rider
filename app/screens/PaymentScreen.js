import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function PaymentScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>This is Payment Screen</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export default PaymentScreen;
