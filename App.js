import { StyleSheet } from "react-native";
import EmailRecoveryScreen from "./app/screens/EmailRecoveryScreen";
import ForgotPasswordScreen from "./app/screens/ForgotPasswordScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import ReferralCode from "./app/screens/ReferralCode";
import ResetPassword from "./app/screens/ResetPassword";
import VerificationCodeScreen from "./app/screens/VerificationCodeScreen";

export default function App() {
  return (
    // <Screen style={styles.container}>
    //   <View style={{ alignItems: "center" }}>
    //     <AppText>Open up App.js to start working on your app!</AppText>
    //     <AppButton title="Test" />
    //   </View>
    // </Screen>
    <ForgotPasswordScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C8C8C8",
    justifyContent: "center",
  },
});
