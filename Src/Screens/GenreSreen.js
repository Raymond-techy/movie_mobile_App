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
import ItemSeparator from "../Components/ItemSeparator";
import MovieCard from "../Components/MovieCard";

const { height, width } = Dimensions.get("screen");

const GenreScreen = ({ Genre, Movies }) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>
              {Genre} | ({Movies.length})
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            ItemSeparatorComponent={() => (
              <ItemSeparator width={10} height={10} />
            )}
            ListHeaderComponent={() => <ItemSeparator width={10} height={10} />}
            ListFooterComponent={() => <ItemSeparator width={10} height={10} />}
            showsHorizontalScrollIndicator={false}
            data={Movies}
            numColumns={1}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  paddingHorizontal: 20,
                  alignSelf: "center",
                  backgroundColor: "#1D263B",
                  borderRadius: 15,
                }}
              >
                <MovieCard
                  style={{ width: width * 0.7 }}
                  title={item.original_title}
                  imgUrl={item.poster_path}
                  rating={item.vote_average}
                  likes={item.vote_count}
                  lang={item.original_language}
                  id={item.id}
                />
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default GenreScreen;

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
    fontFamily: Fonts.EXTRA_BOLD,
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
