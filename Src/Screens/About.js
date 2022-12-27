import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Constants/Colors";
import Fonts from "../Constants/Fonts";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>I'm</Text>
      <Text style={styles.title}>Adunola AbdulRahman</Text>
      <View>
        <Text style={styles.subtitle}>
          I am a frontend software developer and programmer based in Nigeria,who
          builds thoughtful, engaging and aesthetically pleasing interactive
          mobile and web applications. If you are in search of a frontend
          developer who enjoys solving problems and is eager to learn and
          contribute, I'd love to hear from you.
        </Text>
      </View>
      <View></View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_2,
    padding: 10,
  },
  title: {
    fontFamily: Fonts.EXTRA_BOLD,
    color: Colors.WHITE,
    fontSize: 30,
  },
  subtitle: {
    fontFamily: Fonts.REGULAR,
    color: Colors.LIGHT_GRAY,
  },
  stackContainer: {
    flexDirection: "row",
  },
});
