import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Score, Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {getDetailSelector} from '../../store/reducers/detail/selectors';
import {getRemoteImageSrc} from '../../utils';

const MainInfo: React.FC<{
  postPath: string;
  imageHeight: number;
}> = ({postPath, imageHeight}) => {
  const {colors} = useTheme();
  const detail = useSelector(getDetailSelector);
  return (
    <View ph={size.spacing.lg} mt={-imageHeight / 2} row>
      <FastImage
        resizeMode="cover"
        style={styles.imagePoster}
        source={{uri: getRemoteImageSrc(postPath)}}
      />
      <View ml={size.spacing.lg} flex={1}>
        <Text title bold color={colors.background}>
          {detail.title}
        </Text>
        <Text caption color={BaseColors.GRAY} mt={size.spacing.sm}>
          {detail.release_date} -{' '}
          {detail?.genres?.map(genre => genre.name).join(', ')}
        </Text>
        <Text caption color={BaseColors.GRAY}>
          Original Language: {detail.original_language}
        </Text>
        <View row centerH mt={size.spacing.sm}>
          <Score
            score={Number(((detail?.vote_average ?? 0) * 0.1).toFixed(2))}
          />
          <Text color={colors.background} bold ml={size.spacing.md}>
            User Score
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(MainInfo);

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
    paddingBottom: size.spacing.xl + 1,
  },
  imagePoster: {
    borderRadius: size.radius.md,
    width: 120,
    height: 180,
  },
});
