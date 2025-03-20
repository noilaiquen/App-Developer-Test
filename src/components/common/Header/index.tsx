import React from "react";
import { StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import size from "../../../configs/size";
import { images } from "../../../constants";
import { scale } from "../../../utils";
import { View } from "../View";

export const Header = (): JSX.Element => {
  return (
    <View width={"100%"} center pb={size.spacing.md}>
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
