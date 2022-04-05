import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import TopTab from "../components/TopTab";
import colors from "../config/colors";

function HomeScreen(props) {
  const [isOnline, setIsOnline] = useState(false);
  const [balance, setBalance] = useState(1025);

  const [select, setSelect] = useState("instant");
  return (
    <Screen>
      <View style={styles.container}>
        <View //Top bar
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={require("../assets/daniyal.png")}
            />
            <View style={[styles.statusMark, isOnline && styles.onlineMark]} />
          </TouchableOpacity>
          <View>
            <AppText style={[styles.status, isOnline && styles.online]}>
              {isOnline ? "Online" : "Offline"}
            </AppText>
          </View>
          <View style={{ width: 50, marginRight: 15 }}>
            {isOnline && (
              <Switch
                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                trackColor={{ false: "#767577", true: "green" }}
                thumbColor={isOnline ? "green" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setIsOnline((value) => !value)}
                value={isOnline}
              />
            )}
          </View>
        </View>
        <View // balance bar
          style={{
            alignItems: "center",
            backgroundColor: colors.primary,
            paddingVertical: 30,
          }}
        >
          <AppText style={{ fontSize: 45, color: "white", marginBottom: 10 }}>
            PKR {balance}
          </AppText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AppText style={{ color: "white" }}>Fuel Balance</AppText>
            <TouchableOpacity
              style={{
                backgroundColor: "#f4f3f4",
                borderRadius: 15,
                paddingHorizontal: 20,
                paddingVertical: 5,
                marginLeft: 15,
              }}
            >
              <AppText>Withdraw</AppText>
            </TouchableOpacity>
          </View>
        </View>
        {/* Tabs */}
        <View style={{ flexDirection: "row" }}>
          <TopTab
            title="Instant"
            selectionState={select}
            selection="instant"
            count={0}
            onPress={() => {
              setSelect("instant");
            }}
          />
          <TopTab
            title="Scheduled"
            selectionState={select}
            selection="scheduled"
            count={0}
            onPress={() => {
              setSelect("scheduled");
            }}
          />
          {!isOnline && (
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                flex: 1,
                width: "100%",
                flexDirection: "row",
                padding: 29,
                backgroundColor: "#E1E1E1",
                opacity: 0.8,
              }}
            />
          )}
        </View>
        {!isOnline && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 80,
            }}
          >
            <Switch
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
              trackColor={{ false: "#767577", true: "#f4f3f4" }}
              thumbColor={isOnline ? "green" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsOnline((value) => !value)}
              value={isOnline}
            />
            <AppText style={{ fontSize: 20, marginTop: 30 }}>
              Click Button to Go Online
            </AppText>
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    marginLeft: 15,
  },
  imageStyle: { height: 50, width: 50, borderRadius: 25 },
  statusMark: {
    position: "absolute",
    top: 5,
    right: 2,
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
  onlineMark: {
    backgroundColor: "green",
  },
  status: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
  },
  online: {
    color: "green",
  },
});
export default HomeScreen;
