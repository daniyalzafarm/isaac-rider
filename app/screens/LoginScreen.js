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
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function LoginScreen({ navigation }) {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <ScrollView>
      <Screen>
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <FontAwesome5
              name="shopping-basket"
              size={80}
              color={colors.primary}
            />
            <AppText style={{ fontSize: 20 }}>RIDER</AppText>
          </View>
          <View style={styles.inputSection}>
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={colors.primary}
            />
            <TextInput
              style={styles.input}
              type="text"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="UserId"
              value={userId}
              onChangeText={(text) => setUserId(text)}
            />
          </View>

          <View style={styles.inputSection}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color={colors.primary}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={isPasswordSecure}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 10, marginLeft: 10 }}
              onPress={() => setIsPasswordSecure((value) => !value)}
            >
              <MaterialCommunityIcons
                name={isPasswordSecure ? "eye-outline" : "eye-off-outline"}
                size={24}
                color={colors.secondary}
              />
            </TouchableOpacity>
          </View>

          <AppButton
            title="Login"
            style={{
              marginVertical: 40,
            }}
            onPress={() => navigation.replace("profile")}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("forgotPassword")}
          >
            <AppText>Forgot Password?</AppText>
          </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingStart: 10,
  },
  inputSection: {
    flexDirection: "row",

    alignItems: "center",

    borderBottomColor: colors.secondary,
    borderBottomWidth: 0.5,

    width: "70%",
    paddingBottom: 5,
    marginVertical: 10,
  },
});
export default LoginScreen;
