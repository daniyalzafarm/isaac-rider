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
function VerificationCodeScreen(props) {
  const [verificatinCode, setVerificatinCode] = useState();
  //   const [password, setPassword] = useState();
  //   const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <ScrollView>
      <Screen>
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
              marginBottom: 80,
            }}
          >
            <FontAwesome5
              name="shopping-basket"
              size={80}
              color={colors.primary}
            />
            <AppText style={{ fontSize: 20 }}>RIDER</AppText>
          </View>
          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <AppText
              style={{ fontSize: 30, fontWeight: "bold", marginBottom: 5 }}
            >
              We sent you a code
            </AppText>
            <View
              style={{
                width: "60%",
                alignItems: "center",
              }}
            >
              <AppText style={{ fontSize: 18, textAlign: "center" }}>
                Enter it below to verify +92 303 5285976.
              </AppText>
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.inputSection}>
              <TextInput
                style={{ flex: 1 }}
                type="text"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Waiting for SMS to arrive"
                value={verificatinCode}
                onChangeText={(text) => setVerificatinCode(text)}
              />
            </View>
            <TouchableOpacity style={{ alignSelf: "flex-start" }}>
              <AppText style={{ color: colors.primary, fontSize: 14 }}>
                Didn't receive SMS?
              </AppText>
            </TouchableOpacity>
          </View>
          <AppButton
            title="Verify"
            style={{
              marginVertical: 40,
            }}
            //   onPress={handleVerify}
          />
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
export default VerificationCodeScreen;
