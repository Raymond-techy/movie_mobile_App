import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNav, { SearchNav } from "./HomeNav";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Home from "../Screens/Home";
import MovieScreen from "../Screens/MovieScreen";
import ErrorPage from "../Screens/ErrorPage";
import Search from "../Screens/Search";
import About from "../Screens/About";

const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 40,
          right: 40,
          elevation: 8,
          borderRadius: 18,
          backgroundColor: "#c0c0c0",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="homeNav"
        component={HomeNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shield-home"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="searchNav"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={24} />
          ),
        }}
        component={SearchNav}
      />
      <Tab.Screen
        name="about"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="info" color={color} size={24} />
          ),
        }}
        component={About}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
