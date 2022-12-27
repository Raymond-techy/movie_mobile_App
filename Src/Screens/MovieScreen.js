import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";
import Fonts from "../Constants/Fonts";
import {
  getMovie,
  getMovieCasts,
  getMovieVideos,
  getPoster,
} from "../Service/MovieService";
import Castcard from "../Components/Castcard";
import { StatusBar } from "expo-status-bar";
import ItemSeparator from "../Components/ItemSeparator";
import YoutubePlayer from "../Components/YoutubePlayer";
import { useIsFocused } from "@react-navigation/native";
import ActivityIndicator from "../Components/Loader";
const { height, width } = Dimensions.get("screen");
const MovieScreen = ({ route, navigation }) => {
  const { id: movie_id, type } = route.params;
  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();
  const [videos, setVideos] = useState([]);
  const focus = useIsFocused();
  useEffect(() => {
    getMovie(movie_id)
      .then((movie) => setMovie(movie.data))
      .catch((err) => navigation.navigate("error"));
    getMovieVideos(movie_id).then((movie) => setVideos(movie.data.results));
    getMovieCasts(movie_id).then((movie) => setCast(movie.data.cast));
  }, [focus]);
  if (!movie || !cast) return <ActivityIndicator visible={true} />;
  cast.length = 10;
  return (
    <>
      <StatusBar
        style="inverted"
        translucent={false}
        backgroundColor="#121829"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20,
          width: "100%",
          backgroundColor: "#121829",
          height: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          style={{
            position: "absolute",
            left: 10,
            top: 3,
            zIndex: 10,
            elevation: 8,
            backgroundColor: Colors.WHITE,
            borderRadius: 9,
            padding: 5,
          }}
          activeOpacity={0.5}
        >
          <Ionicons name="arrow-back-outline" color={Colors.BG_2} size={24} />
        </TouchableOpacity>
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: Fonts.BOLD,
            fontSize: 16,
            position: "absolute",
            top: 3,
            zIndex: 10,
          }}
        >
          {movie.original_title}
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{
              uri: getPoster(movie.poster_path),
            }}
          />

          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: 0.4 * height,
            }}
          >
            <View style={styles.iconBox}>
              <Ionicons name="ios-videocam" color={Colors.WHITE} size={24} />
              <Text style={styles.subtitle}>Genre</Text>
              <Text style={styles.title}>
                {movie.genres[0].name || "Not Found"}
              </Text>
            </View>
            <View style={styles.iconBox}>
              <Ionicons name="stopwatch" color={Colors.WHITE} size={24} />
              <Text style={styles.subtitle}>Duration</Text>
              <Text style={styles.title}>1h 20m</Text>
            </View>
            <View style={styles.iconBox}>
              <Ionicons name="ios-star" color={Colors.WHITE} size={24} />
              <Text style={styles.subtitle}>Rating</Text>
              <Text style={styles.title}>
                {movie.vote_average.toFixed(1)}/10
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: Fonts.BOLD,
              fontSize: 20,
            }}
          >
            {movie.original_title}
          </Text>
          <View
            style={{
              width: 0.93 * width,
              height: 0.8,
              backgroundColor: Colors.GRAY,
              marginVertical: 10,
              alignSelf: "center",
            }}
          />
          <FlatList
            data={cast}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Castcard
                cachekey={item.id}
                imgUrl={item.profile_path}
                name={item.name.split(" ")[0]}
              />
            )}
          />
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: Fonts.BOLD,
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            Synopsis
          </Text>
          <Text
            style={{
              color: Colors.DARK_LIGHT_GRAY,
              fontFamily: Fonts.REGULAR,
              opacity: 0.5,
              fontSize: 15,
            }}
          >
            {movie.overview}
          </Text>
        </View>
        <View>
          <View style={styles.headerContainer}>
            <Text style={{ textAlign: "center", ...styles.headerTitle }}>
              Trailer
            </Text>
          </View>
        </View>
        {videos.length > 1 ? (
          <View>
            <FlatList
              ItemSeparatorComponent={() => (
                <ItemSeparator width={10} height={10} />
              )}
              ListHeaderComponent={() => (
                <ItemSeparator width={10} height={10} />
              )}
              ListFooterComponent={() => (
                <ItemSeparator width={10} height={10} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={videos}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={{ paddingVertical: 20 }}>
                  <YoutubePlayer videoId={item.key} />
                </View>
              )}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.headerTitle}>No Trailers Yet</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121829",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontFamily: Fonts.BOLD,
    fontSize: 28,
    color: Colors.WHITE,
  },
  imageBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 35,
  },
  image: {
    resizeMode: "cover",
    borderRadius: 12,
    height: 0.45 * height,
    width: 0.65 * width,
  },
  title: {
    fontFamily: Fonts.EXTRA_BOLD,
    color: Colors.WHITE,
  },
  subtitle: {
    fontFamily: Fonts.EXTRA_LIGHT,
    color: Colors.LIGHT_GRAY,
  },
  iconBox: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 0.25,
    padding: 10,
    borderRadius: 5,
  },
});
