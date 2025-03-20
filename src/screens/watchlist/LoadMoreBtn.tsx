import React, { FC } from "react";
import { Pressable } from "react-native";
import { useTheme } from "react-native-paper";
import { Text, View } from "../../components";
import { BaseColors } from "../../configs/theme";
import { scale } from "../../utils";
import size from "../../configs/size";

interface LoadMoreBtnProps {
  onPress: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onPress }) => {
  const { colors } = useTheme();
  return (
    <Pressable onPress={onPress}>
      <View center color={colors.primary} height={scale(50)} br={size.radius.sm}>
        <Text size={scale(20)} bold color={BaseColors.WHITE}>
          Load More
        </Text>
      </View>
    </Pressable>
  );
};

export default React.memo(LoadMoreBtn);
