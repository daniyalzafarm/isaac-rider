import { StyleSheet } from "react-native";
import EmailRecoveryScreen from "./app/screens/EmailRecoveryScreen";
import ForgotPasswordCodeScreen from "./app/screens/ForgotPasswordCodeScreen";
import ForgotPasswordScreen from "./app/screens/ForgotPasswordScreen";
import LoginScreen from "./app/screens/LoginScreen";
import PasswordResetSuccessScreen from "./app/screens/PasswordResetSuccessScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import ReferralCode from "./app/screens/ReferralCode";
import ResetPassword from "./app/screens/ResetPassword";
import VerificationCodeScreen from "./app/screens/VerificationCodeScreen";

export default function App() {
  return <PasswordResetSuccessScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C8C8C8",
    justifyContent: "center",
  },
});
