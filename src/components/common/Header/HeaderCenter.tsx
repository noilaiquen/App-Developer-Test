import React from "react";
import { StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { scale } from "../../../utils";
import { View } from "../View";
import { images } from "../../../constants";

export const HeaderCenter = (): JSX.Element => {
  return (
    <View>
      <FastImage resizeMode="contain" source={images.logo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: scale(80),
    height: scale(57),
  },
});
