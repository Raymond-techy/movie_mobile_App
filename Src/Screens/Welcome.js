import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Constants/Colors";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={Colors.BASIC_BACKGROUND}
      />
      <Image
        source={{ uri: "https://fliix.vercel.app/logo.svg" }}
        style={{ width: 150, height: 150 }}
      />
      <Text>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#11192C",
    justifyContent: "center",
    alignItems: "center",
  },
});
