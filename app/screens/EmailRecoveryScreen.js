import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function EmailRecoveryScreen(props) {
  const [email, setEmail] = useState();
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
            <TouchableOpacity>
              <MaterialCommunityIcons
                style={{ marginBottom: 50, padding: 0, marginLeft: 0 }}
                name="chevron-left"
                size={50}
                color={colors.secondary}
              />
            </TouchableOpacity>
            <AppText
              style={{
                fontSize: 30,
                fontWeight: "bold",
                marginBottom: 5,
                paddingStart: 15,
              }}
            >
              Enter the Email
            </AppText>
          </View>
          <View style={styles.inputSection}>
            <MaterialCommunityIcons
              name="email"
              size={24}
              color={colors.primary}
            />
            <TextInput
              style={styles.input}
              type="email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email Address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <AppButton
            title="Continue"
            style={{
              marginVertical: 40,
            }}
            //   onPress={handleEmail}
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
    alignItems: "center",
    paddingHorizontal: 30,
  },
  input: {
    paddingStart: 10,
  },
  inputSection: {
    flexDirection: "row",

    alignItems: "center",

    borderBottomColor: colors.secondary,
    borderBottomWidth: 0.5,

    paddingBottom: 5,
    width: "90%",
  },
});
export default EmailRecoveryScreen;
