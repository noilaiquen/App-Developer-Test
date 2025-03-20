import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import { Text, View } from "../../components";
import size from "../../configs/size";
import { BaseColors } from "../../configs/theme";
import { scale } from "../../utils";

interface ProfileInfoProps {}

const ProfileInfo: FC<ProfileInfoProps> = () => {
  const navigation = useNavigation();

  return (
    <View color="#032541" pd={size.spacing.xl}>
      <Pressable onPress={() => navigation.goBack()}>
        <View center width={scale(31)} height={scale(38)}>
          <Icon name="left" size={28} color={BaseColors.WHITE} />
        </View>
      </Pressable>
      <View row centerV gap={size.spacing.lg} mt={size.spacing.xl}>
        <Avatar.Text
          label="J"
          size={scale(64)}
          style={{ backgroundColor: BaseColors.BUTTERFLY_BUSH }}
          color={BaseColors.WHITE}
        />
        <View>
          <Text subheading bold color={BaseColors.WHITE}>
            John Doe
          </Text>
          <Text paragraph color={BaseColors.WHITE} style={styles.joinedText}>
            Member since August 2023
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ProfileInfo);

const styles = StyleSheet.create({
  joinedText: {
    opacity: 0.7,
  },
});
