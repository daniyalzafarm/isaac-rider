import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OTPInputView from "@twotalltotems/react-native-otp-input";
function ForgotPasswordCodeScreen(props) {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <ScrollView>
      <Screen>
        <View style={styles.container}>
          <TouchableOpacity>
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
                width: "70%",
                marginBottom: 10,
              }}
            >
              Enter 4-digit recovery code
            </AppText>
            <AppText>
              The recovery code was sent to your mobile number. Please enter the
              code:
            </AppText>
            <OTPInputView
              style={{ width: "80%", height: 200 }}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              //   onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              codeInputFieldStyle={[
                styles.codeField,
                isVerified && styles.verified,
              ]}
              codeInputHighlightStyle={styles.codeFieldHighLighted}
              onCodeFilled={(code) => {
                setIsVerified(true);
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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

  verified: {
    borderColor: "green",
  },
  codeField: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#EFEFEF",
    color: "black",
    fontSize: 24,
    marginHorizontal: 10,
  },
  codeFieldHighLighted: {
    borderColor: colors.secondary,
  },
});
export default ForgotPasswordCodeScreen;
