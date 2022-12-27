import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "./Src/Screens/Home";
import MovieScreen from "./Src/Screens/MovieScreen";
import Welcome from "./Src/Screens/Welcome";
import ErrorPage from "./Src/Screens/ErrorPage";
import BottomNav from "./Src/Navigation/BottomNav";

// SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./assets/Fonts/NunitoSans-Regular.ttf"),
    Bold: require("./assets/Fonts/NunitoSans-Bold.ttf"),
    Black: require("./assets/Fonts/NunitoSans-Black.ttf"),
    ExtraBold: require("./assets/Fonts/NunitoSans-ExtraBold.ttf"),
    ExtraLight: require("./assets/Fonts/NunitoSans-ExtraLight.ttf"),
    Light: require("./assets/Fonts/NunitoSans-Light.ttf"),
    SemiBold: require("./assets/Fonts/NunitoSans-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const stack = createStackNavigator();
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <BottomNav />

      {/* <stack.Navigator>
        <stack.Screen
          name="home"
          options={{ headerShown: false }}
          component={Home}
        />
        <stack.Screen
          name="movie"
          options={{ headerShown: false }}
          component={MovieScreen}
        />
      </stack.Navigator> */}
    </NavigationContainer>
  );
}
