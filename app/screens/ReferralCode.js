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
function ReferralCode(props) {
  const [referralCode, setReferralCode] = useState();
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
              Referral Code
            </AppText>
            <View
              style={{
                width: "60%",
                alignItems: "center",
              }}
            >
              <AppText style={{ fontSize: 18, textAlign: "center" }}>
                Enter referral code provided by your referral
              </AppText>
            </View>
          </View>
          <View style={styles.inputSection}>
            <TextInput
              style={{ flex: 1 }}
              type="text"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Referel Code"
              value={referralCode}
              onChangeText={(text) => setReferralCode(text)}
            />
          </View>

          <AppButton
            title="Verify"
            style={{
              marginVertical: 40,
            }}
            //   onPress={handleVerify}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 30, bottom: 30 }}
          >
            <AppText style={{ fontSize: 20, fontWeight: "bold" }}>Skip</AppText>
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
  input: {},
  inputSection: {
    flexDirection: "row",

    alignItems: "center",

    borderBottomColor: colors.secondary,
    borderBottomWidth: 0.5,

    paddingBottom: 5,
    width: "70%",
  },
});
export default ReferralCode;
