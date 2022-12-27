import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Colors from "../Constants/Colors";
import Fonts from "../Constants/Fonts";
import axios from "axios";
import ItemSeparator from "../Components/ItemSeparator";
import MovieCard from "../Components/MovieCard";
import Skeleton from "../Components/Skeleton";
const { width } = Dimensions.get("screen");
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRes, setSearchRes] = useState();
  const [loading, setLoading] = useState(false);
  const searchFetch = async () => {
    setLoading(true);
    const searchRes = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=93c4c40d96067b30d74cb604968b767b&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    );
    const movieRes = await searchRes.data.results;
    setSearchRes(movieRes);
    setLoading(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.Search}>
          <TextInput
            placeholderTextColor="#fff"
            value={searchQuery}
            placeholder="Search movie ..."
            onChangeText={(text) => {
              setSearchQuery(text);
              searchFetch();
            }}
            style={styles.textInput}
          />
          <View></View>
        </View>
        {searchRes ? (
          <View>
            {/* {loading && <Skeleton />} */}
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
              showsHorizontalScrollIndicator={false}
              data={searchRes}
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
                    type={"movie"}
                  />
                </View>
              )}
            />
          </View>
        ) : (
          <ScrollView>
            <Skeleton />
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_2,
    paddingvertical: 40,
  },
  textInput: {
    flex: 1,
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: Fonts.REGULAR,
    paddingLeft: 6,
    zIndex: 100,
  },
  searIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  Search: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colors.HEART,
    borderWidth: 1,
    padding: 5,
    borderRadius: 15,
    width: "95%",
    // backgroundColor: Colors.light,
    // opacity: 0.2,
    alignSelf: "center",
  },
});
