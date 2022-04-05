import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ProfileScreen({ navigation }) {
  const [pic, setPic] = useState(true);
  return (
    <ScrollView>
      <Screen>
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
              marginTop: 30,
              marginBottom: 50,
            }}
          >
            <AppText
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              My Profile
            </AppText>
            <View style={{ marginVertical: 30 }}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.imageStyle}
                  source={
                    pic
                      ? require("../assets/daniyal.png")
                      : require("../assets/daniyal2.jpg")
                  }
                />
              </View>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F2F2F2",
                  height: 35,
                  width: 35,
                  borderRadius: 17.5,
                  position: "absolute",
                  bottom: 2,
                  left: 10,
                }}
                onPress={() => setPic((value) => !value)}
              >
                <MaterialCommunityIcons
                  name="camera-plus"
                  size={18}
                  color={colors.secondary}
                />
              </TouchableOpacity>
            </View>
            <AppText
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              Raft ID: R-00131
            </AppText>
          </View>

          <View style={styles.inputSection}>
            <MaterialCommunityIcons
              name="badge-account-horizontal"
              size={24}
              color={colors.primary}
            />
            <AppText style={styles.input}>37405-8120322-3</AppText>
          </View>

          <View style={styles.inputSection}>
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={colors.primary}
            />
            <AppText style={styles.input}>Dan Jones</AppText>
          </View>

          <View style={styles.inputSection}>
            <MaterialCommunityIcons
              name="phone"
              size={24}
              color={colors.primary}
            />
            <AppText style={styles.input}>0303-5285976</AppText>
          </View>

          <View style={styles.inputSection}>
            <MaterialCommunityIcons
              name="map-marker"
              size={24}
              color={colors.primary}
            />
            <AppText style={styles.input}>Islamabad/Pakistan</AppText>
          </View>

          <AppButton
            title="Continue"
            style={{
              marginVertical: 40,
            }}
            onPress={() => navigation.navigate("homeNavigator")}
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
    marginVertical: 15,
  },
  imageContainer: {
    borderColor: colors.primary,
    borderWidth: 1,
    marginLeft: 8,
    height: 150,
    width: 150,
    borderRadius: 75,
    overflow: "hidden",
  },
  imageStyle: { height: 150, width: 150, borderRadius: 75 },
});
export default ProfileScreen;
