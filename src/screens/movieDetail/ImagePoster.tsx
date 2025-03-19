import React from 'react';
import {ImageBackground, View as RNView, StyleSheet} from 'react-native';
import Animated, {AnimatedStyle} from 'react-native-reanimated';
import {getRemoteImageSrc} from '../../utils';

const ImagePoster: React.FC<{
  poster: string;
  animatedStyle: AnimatedStyle;
}> = ({poster, animatedStyle}) => {
  return (
    <Animated.View style={animatedStyle}>
      <ImageBackground
        blurRadius={5}
        style={styles.imageBg}
        src={getRemoteImageSrc(poster)}>
        <RNView style={styles.backdrop} />
      </ImageBackground>
    </Animated.View>
  );
};

export default React.memo(ImagePoster);

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
