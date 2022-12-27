import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import MovieScreen from "../Screens/MovieScreen";
import ErrorPage from "../Screens/ErrorPage";
import Search from "../Screens/Search";

const HomeNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="movie"
        component={MovieScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="error"
        component={ErrorPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;

export const SearchNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
