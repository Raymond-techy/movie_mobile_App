import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Constants/Colors";

const { height, width } = Dimensions.get("screen");
const setWidth = (w) => (width / 100) * w;

const GenreCard = ({ Genre, active, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // style={{
      //   backgroundColor: active ? Colors.ACTIVE : Colors.BASIC_BACKGROUND,
      //   ...styles.container,
      // }}
      style={active ? styles.container2 : styles.container}
      activeOpacity={0.5}
    >
      <Text
        style={{
          // ...styles.genreText,
          color: active ? Colors.WHITE : Colors.ACTIVE,
        }}
      >
        {Genre}
      </Text>
    </TouchableOpacity>
  );
};

export default GenreCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: Colors.WHITE,
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: width * 0.25,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: Colors.ACTIVE,
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: width * 0.25,
  },
  genreText: {
    color: Colors.ACTIVE,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Regular",
  },
});
