import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import {useHeaderHeight} from 'react-native-screens/native-stack';
import {Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';

const AnimationHeader: React.FC<{
  title: string;
  containerAnimatedStyle: any;
}> = ({title, containerAnimatedStyle}) => {
  const {colors} = useTheme();
  return (
    <Animated.View style={[styles.headerContain, containerAnimatedStyle]}>
      <View
        style={[
          styles.header,
          {
            height: useHeaderHeight(),
            backgroundColor: colors.primary,
          },
        ]}>
        <Text
          title
          bold
          color={BaseColors.WHITE}
          deviceScale={false}
          align="center"
          numberOfLines={1}>
          {title}
        </Text>
      </View>
    </Animated.View>
  );
};

export default React.memo(AnimationHeader);

const styles = StyleSheet.create({
  headerContain: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: size.spacing.md,
  },
});
