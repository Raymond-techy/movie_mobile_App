import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Fonts from "../Constants/Fonts";
import { getLanguage, getPoster } from "../Service/MovieService";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const MovieCard = ({ title, imgUrl, rating, likes, lang, id, type, style }) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (type === "tv") return null;
          navigation.navigate("homeNav", {
            screen: "movie",
            params: {
              id,
              type,
            },
          });
        }}
        activeOpacity={0.5}
      >
        <ImageBackground
          fadeDuration={0}
          style={[styles.container, style]}
          source={{ uri: getPoster(imgUrl) }}
          imageStyle={{ borderRadius: 12 }}
        >
          <View style={styles.rating}>
            <AntDesign name="staro" size={20} color={Colors.RATING} />
            <Text style={styles.ratingNum}>{rating}</Text>
          </View>

          <TouchableNativeFeedback>
            <Ionicons
              onPress={() => setLiked((prevState) => !prevState)}
              name={liked ? "heart" : "heart-outline"}
              size={20}
              color={liked ? Colors.HEART : Colors.WHITE}
              style={{
                position: "absolute",
                bottom: 15,
                left: 15,
                zIndex: 100,
                borderRadius: 50,
                padding: 10,
                backgroundColor: "#000000A3",
              }}
            />
          </TouchableNativeFeedback>
        </ImageBackground>
      </TouchableOpacity>
      <View>
        <Text style={styles.movieTitle} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.movieSubTitleContainer}>
          <Text style={styles.movieSubtitle}>
            {getLanguage(lang).english_name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    height: 290,
    width: 210,
    borderRadius: 12,
    elevation: 5,
    padding: 10,
    marginVertical: 10,
    opacity: 0.8,
  },
  movieTitle: {
    fontSize: 20,
    fontFamily: Fonts.EXTRA_BOLD,
    color: Colors.WHITE,
    marginTop: 5,
    marginLeft: 10,
    width: 180,
  },
  movieSubtitle: {
    fontSize: 12,
    fontFamily: Fonts.REGULAR,
    color: Colors.WHITE,
  },
  movieSubTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // marginLeft: -28,
  },
  rating: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#000000A3",
    width: 60,
    padding: 5,
    borderRadius: 5,
    position: "absolute",
    zIndex: 10,
    right: 5,
  },
  ratingNum: {
    fontSize: 18,
    fontFamily: Fonts.REGULAR,
    color: Colors.RATING,
    marginLeft: 7,
  },
});
