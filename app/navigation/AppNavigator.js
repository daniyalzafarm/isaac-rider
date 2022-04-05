import React from "react";
import { View, StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ForgotPassword from "../screens/ForgotPassword";
import ForgotPasswordCodeScreen from "../screens/ForgotPasswordCodeScreen";
import EmailRecoveryScreen from "../screens/EmailRecoveryScreen";
import ResetPassword from "../screens/ResetPassword";
import PasswordResetSuccessScreen from "../screens/PasswordResetSuccessScreen";
import HomeNavigator from "./HomeNavigator";

const Stack = createNativeStackNavigator();
function AppNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen
        name="forgotPasswordSms"
        component={ForgotPasswordCodeScreen}
      />
      <Stack.Screen
        name="forgotPasswordEmail"
        component={EmailRecoveryScreen}
      />
      <Stack.Screen name="resetPassword" component={ResetPassword} />
      <Stack.Screen
        name="resetSuccess"
        component={PasswordResetSuccessScreen}
      />
      <Stack.Screen name="homeNavigator" component={HomeNavigator} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default AppNavigator;
