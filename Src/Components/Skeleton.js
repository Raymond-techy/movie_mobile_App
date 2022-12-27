import { Animated, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Skeleton() {
  const opacity = useRef(new Animated.Value(0.1));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.1,
          useNativeDriver: true,
          duration: 800,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <View style={styles.container}>
      <View style={styles.skeletonCard}>
        <View>
          <Animated.View style={[{ opacity: opacity.current }, styles.img]} />
        </View>
        <View style={styles.right}>
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
        </View>
      </View>
      <View style={styles.skeletonCard}>
        <View>
          <Animated.View style={[{ opacity: opacity.current }, styles.img]} />
        </View>
        <View style={styles.right}>
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
        </View>
      </View>
      <View style={styles.skeletonCard}>
        <View>
          <Animated.View style={[{ opacity: opacity.current }, styles.img]} />
        </View>
        <View style={styles.right}>
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
        </View>
      </View>
      <View style={styles.skeletonCard}>
        <View>
          <Animated.View style={[{ opacity: opacity.current }, styles.img]} />
        </View>
        <View style={styles.right}>
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
        </View>
      </View>
      <View style={styles.skeletonCard}>
        <View>
          <Animated.View style={[{ opacity: opacity.current }, styles.img]} />
        </View>
        <View style={styles.right}>
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
        </View>
      </View>
      <View style={styles.skeletonCard}>
        <View>
          <Animated.View style={[{ opacity: opacity.current }, styles.img]} />
        </View>
        <View style={styles.right}>
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
          <Animated.View
            style={[{ opacity: opacity.current }, styles.skeleton]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
  skeleton: {
    marginBottom: 10,
    width: "100%",
    height: 12,
    borderRadius: 15,
    backgroundColor: "#1D263B",
  },
  right: {
    paddingTop: 5,
    marginLeft: 10,
    width: "70%",
  },
  img: {
    paddingBottom: 30,
    width: 290,
    height: 210,
    borderRadius: 15,
    backgroundColor: "#1D263B",
  },
  skeletonCard: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 30,
  },
});
