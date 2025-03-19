import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import size from '../../configs/size';
import {BaseColors, useTheme} from '../../configs/theme';
import {MOVIE_ITEM_HEIGHT, MOVIE_ITEM_WIDTH} from '../../constants';
import {Movie} from '../../types';
import {getRemoteImageSrc} from '../../utils';
import {Text} from '../common/Text';
import {View} from '../common/View';
import {Score} from './Score';

export interface MovieItemProps {
  movie: Movie;
  index: number;
  onPress: (movie: Movie) => void;
}

export const MovieItem: FC<MovieItemProps> = ({movie, index, onPress}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(movie)}>
      <View
        olh
        width={MOVIE_ITEM_WIDTH}
        height={MOVIE_ITEM_HEIGHT}
        br={size.radius.md}
        mb={size.spacing.xl}
        mr={index % 2 === 0 ? size.spacing.lg : 0}>
        <FastImage
          style={styles.imageBg}
          source={{uri: getRemoteImageSrc(movie.poster_path)}}
        />
        <View bgColor>
          <View
            style={[
              styles.progressContainer,
              {backgroundColor: colors.primary},
            ]}>
            <Score score={parseFloat((movie.vote_average * 0.1).toFixed(1))} />
          </View>
          <View height={90} bgColor>
            <Text numberOfLines={2} title bold mt={size.spacing.xl}>
              {movie.title}
            </Text>
            <Text caption color={BaseColors.BOULDER}>
              {movie.release_date}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    height: MOVIE_ITEM_HEIGHT - 90,
    width: MOVIE_ITEM_WIDTH,
  },
  progressContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    bottom: 70,
    left: 10,
    zIndex: 10,
  },
  progressText: {
    color: BaseColors.WHITE,
    fontWeight: 'bold',
    fontSize: 10,
  },
});
