import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function PasswordResetSuccessScreen(props) {
  return (
    <ScrollView>
      <Screen>
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <MaterialCommunityIcons
              name="check-circle-outline"
              size={100}
              color="green"
            />
          </View>
          <View>
            <AppText
              style={{
                fontSize: 30,
                fontWeight: "bold",
                marginBottom: 15,
                textAlign: "center",
              }}
            >
              Password reset successfull
            </AppText>
            <View
              style={{
                width: "75%",
              }}
            >
              <AppText style={{ fontSize: 18, textAlign: "center" }}>
                You have successfully reset your password. Please use your new
                password when logging in.
              </AppText>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            flexDirection: "row",
            width: "100%",
            paddingVertical: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.primary,
          }}
        >
          <AppText style={{ fontSize: 18, color: "white" }}>Sign In</AppText>
        </TouchableOpacity>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    width: "70%",
  },
  inputSection: {
    flexDirection: "row",

    alignItems: "center",

    borderBottomColor: colors.secondary,
    borderBottomWidth: 0.5,

    paddingBottom: 5,
  },
});
export default PasswordResetSuccessScreen;
