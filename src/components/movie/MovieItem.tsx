import React, { FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import Ionicons from "react-native-vector-icons/Ionicons";
import size from "../../configs/size";
import { BaseColors } from "../../configs/theme";
import { MOVIE_ITEM_HEIGHT, MOVIE_ITEM_WIDTH } from "../../constants";
import { Movie } from "../../types";
import { getRemoteImageSrc, scale } from "../../utils";
import { Text } from "../common/Text";
import { View } from "../common/View";

export interface MovieItemProps {
  movie: Movie;
  onPress: (movie: Movie) => void;
  onRemove?: (movie: Movie) => void;
}

export const MovieItem: FC<MovieItemProps> = ({ movie, onPress, onRemove }) => {
  return (
    <Pressable
      onPress={() => {
        onPress(movie);
      }}>
      <View style={styles.container}>
        <View
          olh
          row
          centerH
          bgColor
          width={MOVIE_ITEM_WIDTH}
          height={scale(MOVIE_ITEM_HEIGHT)}
          br={size.radius.sm}>
          <FastImage
            style={styles.imageBg}
            source={{ uri: getRemoteImageSrc(movie.poster_path) }}
          />
          <View flex={1} height={"100%"} centerV ph={size.spacing.xl}>
            <Text numberOfLines={2} title bold>
              {movie.title}
            </Text>
            <Text caption color={BaseColors.BOULDER}>
              {movie.release_date}
            </Text>
            <Text numberOfLines={2} mt={size.spacing.xl}>
              {movie.overview}
            </Text>
          </View>
        </View>
        {onRemove && (
          <Pressable
            onPress={() => {
              onRemove(movie);
            }}
            style={styles.removeBtn}>
            <Ionicons name="close" size={18} />
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    shadowColor: BaseColors.ALTO,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
    marginBottom: size.spacing.xl,
    backgroundColor: BaseColors.WHITE,
    borderRadius: size.radius.sm,
  },
  imageBg: {
    height: "100%",
    width: scale(95),
  },
  removeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: size.spacing.sm,
    borderRadius: size.radius.sm,
  },
});
