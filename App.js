import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    // <Screen style={styles.container}>
    //   <View style={{ alignItems: "center" }}>
    //     <AppText>Open up App.js to start working on your app!</AppText>
    //     <AppButton title="Test" />
    //   </View>
    // </Screen>
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C8C8C8",
    justifyContent: "center",
  },
});
