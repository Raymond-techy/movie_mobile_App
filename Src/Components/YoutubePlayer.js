import { StyleSheet, Dimensions } from "react-native";
import React, { useState, useCallback } from "react";
import YoutubeIframe from "react-native-youtube-iframe";

const { width } = Dimensions.get("screen");
const YoutubePlayer = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);
  const [Width, setWidth] = useState(width * 0.8);
  const onStateChanged = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
    if (state === "playing") {
      setPlaying(true);
    }
    if (state === "paused") {
      setPlaying(false);
    }
  }, []);
  return (
    <>
      <YoutubeIframe
        height={250}
        width={Width}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChanged}
      />
    </>
  );
};

export default YoutubePlayer;

const styles = StyleSheet.create({});
