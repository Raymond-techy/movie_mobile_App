import axios from "axios";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Constants/Colors";
import ItemSeparator from "../Components/ItemSeparator";
import GenreCard from "../Components/GenreCard";
import Fonts from "../Constants/Fonts";
import MovieCard from "../Components/MovieCard";
import {
  getNowPlayingMovies,
  getTopRatedMovies,
  getTopTvShows,
  getUpcomingMovies,
} from "../Service/MovieService";
import Genres from "../Constants/Genres";
import GenreScreen from "./GenreSreen";
import Skeleton from "../Components/Skeleton";
const genres = [{ id: 4566, name: "All" }, ...Genres];

const Home = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUpcomingMovies().then((movies) => setNowPlaying(movies.data.results));
    getTopTvShows().then((movies) => setUpcomingMovies(movies.data.results));
    getTopRatedMovies().then((movies) => setTopRated(movies.data.results));
  }, []);

  const getGenreMovies = async (val) => {
    setLoading(true);
    const genreMovies = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=93c4c40d96067b30d74cb604968b767b&with_genres=${val}`
    );
    setGenreMovie(genreMovies.data.results);
    setLoading(false);
  };
  const blox = "Flick";

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        style="inverted"
        translucent={false}
        backgroundColor="#111D30"
      />
      <View style={{ padding: 20 }}>
        <Text
          style={{
            ...styles.headerTitle,
            fontSize: 49,
            fontFamily: Fonts.EXTRA_BOLD,
            marginBottom: 20,
          }}
        >
          {blox}
        </Text>
        <Text
          style={{ ...styles.headerSubTitle, color: Colors.GRAY, fontSize: 18 }}
        >
          A mobile app where you can search for info about your favorite movies
          and tv shows.Watch trailers and get to know your favorite Actors.
        </Text>
      </View>
      <View>
        <FlatList
          ItemSeparatorComponent={() => (
            <ItemSeparator width={10} height={10} />
          )}
          ListHeaderComponent={() => <ItemSeparator width={10} height={10} />}
          ListFooterComponent={() => <ItemSeparator width={10} height={10} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={genres}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <GenreCard
                Genre={item.name}
                active={item.name === activeGenre ? true : false}
                onPress={() => {
                  if (item.name === "All") return setActiveGenre(item.name);
                  setActiveGenre(item.name);
                  getGenreMovies(item.id);
                }}
              />
            </View>
          )}
        />
      </View>
      {activeGenre !== "All" ? (
        loading ? (
          <Skeleton />
        ) : (
          <GenreScreen Movies={genreMovie} Genre={activeGenre} />
        )
      ) : (
        <>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Now Showing</Text>
          </View>
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
              data={topRated}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <MovieCard
                    title={item.original_title}
                    imgUrl={item.poster_path}
                    rating={item.vote_average}
                    likes={item.vote_count / 100}
                    lang={item.original_language}
                    id={item.id}
                    type={"movie"}
                  />
                </View>
              )}
            />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Trending</Text>
          </View>
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
              data={nowPlaying}
              pagingEnabled
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <MovieCard
                    title={item.original_title}
                    imgUrl={item.poster_path}
                    rating={item.vote_average}
                    likes={item.vote_count / 100}
                    lang={item.original_language}
                    id={item.id}
                    type={"movie"}
                  />
                </View>
              )}
            />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Top TV Shows</Text>
          </View>
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
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={upcomingMovies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <MovieCard
                    title={item.name}
                    imgUrl={item.poster_path}
                    rating={item.vote_average}
                    likes={item.vote_count}
                    lang={item.original_language}
                    id={item.id}
                    type={"tv"}
                  />
                </View>
              )}
            />
          </View>
        </>
      )}
      <View style={{ height: 90 }} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111D30",
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
  headerSubTitle: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 16,
    color: Colors.ACTIVE,
  },
});
