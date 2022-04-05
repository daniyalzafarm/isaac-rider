import React from "react";
import { View, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PerformanceScreen from "../screens/PerformanceScreen";
import PaymentScreen from "../screens/PaymentScreen";
import HomeScreen from "../screens/HomeScreen";
import EarningScreen from "../screens/EarningScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeButton from "../components/HomeButton";

const Tab = createBottomTabNavigator();
function HomeNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="home"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="performance"
        component={PerformanceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="speedometer"
              color={color}
              size={size}
            />
          ),
          tabBarLabel: "Performance",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="payments"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cash" color={color} size={size} />
          ),
          tabBarLabel: "Payments",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <HomeButton onPress={() => navigation.navigate("home")} />
          ),
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
          tabBarLabel: "Home",
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="earnings"
        component={EarningScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dollar-sign" color={color} size={size} />
          ),
          tabBarLabel: "Earnings",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarLabel: "My Profile",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default HomeNavigator;
