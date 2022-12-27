import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Constants/Colors";
import Fonts from "../Constants/Fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ErrorPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          style="inverted"
          translucent={false}
          backgroundColor="#111D30"
        />

        <ImageBackground
          source={require("../../assets/Images/404.png")}
          style={{ width: 400, height: 400 }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        style={styles.back}
      >
        <View>
          <Text style={styles.backText}>Go Back Home</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ErrorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    backgroundColor: "#111D30",
    width: "50%",
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  backText: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 20,
    color: Colors.WHITE,
  },
});
