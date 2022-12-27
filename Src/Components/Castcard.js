import { Image, Text, View } from "react-native";
import React from "react";
import Colors from "../Constants/Colors";
import Fonts from "../Constants/Fonts";
import { getPoster } from "../Service/MovieService";
import ExpoFastImage from "expo-fast-image";

const Castcard = ({ name, imgUrl, cachekey }) => {
  return (
    <View style={{ justifyContent: "center" }}>
      {/* <Image
        source={{
          uri: getPoster(imgUrl),
        }}
        style={{ width: 60, height: 60, borderRadius: 50 }}
        resizeMode="contain"
      /> */}
      <ExpoFastImage
        cacheKey={cachekey}
        uri={getPoster(imgUrl)}
        style={{ width: 60, height: 60, borderRadius: 50 }}
      />
      <Text
        style={{
          color: Colors.LIGHT_GRAY,
          fontFamily: Fonts.REGULAR,
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default Castcard;
