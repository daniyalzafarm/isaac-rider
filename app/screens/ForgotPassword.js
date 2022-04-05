import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { createNavigation } from "@react-navigation/native";

// const navigation = createNavigation();
function ForgotPassword({ navigation }) {
  return (
    <ScrollView>
      <Screen>
        <View style={styles.container}>
          <View
            style={{
              alignSelf: "flex-start",
              marginTop: 30,
              marginBottom: 100,
            }}
          >
            <TouchableOpacity onPress={() => navigation.pop()}>
              <MaterialCommunityIcons
                style={{ marginBottom: 50, padding: 0, marginLeft: 0 }}
                name="chevron-left"
                size={50}
                color={colors.secondary}
              />
            </TouchableOpacity>
            <View
              style={{
                marginBottom: 5,
                paddingStart: 15,
              }}
            >
              <AppText
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  width: "50%",
                }}
              >
                Forgot Password
              </AppText>
              <AppText>
                Select which contact detail should we use to reset your
                password.
              </AppText>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              width: "90%",
            }}
          >
            <TouchableOpacity
              style={styles.option}
              onPress={() => navigation.navigate("forgotPasswordSms")}
            >
              <MaterialCommunityIcons
                name="cellphone"
                size={50}
                color={colors.secondary}
              />
              <View style={{ marginLeft: 15 }}>
                <AppText>via sms</AppText>
                <AppText>--- --- 976</AppText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => navigation.navigate("forgotPasswordEmail")}
            >
              <MaterialCommunityIcons
                name="email"
                size={50}
                color={colors.secondary}
              />
              <View style={{ marginLeft: 15 }}>
                <AppText>via email</AppText>
                <AppText>-----el@gmail.com</AppText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    backgroundColor: colors.white,
    alignItems: "center",
    paddingHorizontal: 30,
  },

  option: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 0.2,
    backgroundColor: "#F2F1F1",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginVertical: 15,
  },
});
export default ForgotPassword;
