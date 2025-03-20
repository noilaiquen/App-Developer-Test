import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {Score, Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {getDetailSelector} from '../../store/reducers/detail/selectors';
import {getMovieDuration, getRemoteImageSrc, scale} from '../../utils';

const MainInfo: React.FC<{
  postPath: string;
  imageHeight: number;
}> = ({postPath, imageHeight}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const detail = useSelector(getDetailSelector);

  // console.log('detail', detail.certification);

  return (
    <>
      <View pd={size.spacing.lg} color={colors.secondary}>
        <View row centerV mb={size.spacing.xl}>
          <Pressable onPress={() => navigation.goBack()}>
            <View center width={scale(31)} height={scale(38)}>
              <Icon name="left" size={28} color={BaseColors.WHITE} />
            </View>
          </Pressable>
          <View flex={1} center>
            <Text subheading bold color={BaseColors.WHITE}>
              {detail.title}
              <Text
                subheading
                color={BaseColors.WHITE}>{` (${detail.release_date?.slice(
                0,
                4,
              )})`}</Text>
            </Text>
          </View>
        </View>
        <View row>
          <FastImage
            resizeMode="cover"
            style={styles.imagePoster}
            source={{uri: getRemoteImageSrc(postPath)}}
          />
          <View ml={size.spacing.lg} flex={1} gap={4}>
            <View center style={styles.certificate}>
              <Text paragraph color={BaseColors.WHITE}>
                {detail?.certification}
              </Text>
            </View>
            <View row centerH gap={4}>
              <Text paragraph color={BaseColors.GRAY}>
                {detail.release_date} {'(SG)'}
              </Text>
              <View width={4} height={4} br={2} bgColor />
              <Text paragraph color={BaseColors.GRAY}>
                {getMovieDuration(detail.runtime ?? 0)}
              </Text>
            </View>
            <Text paragraph color={BaseColors.GRAY}>
              {detail.genres?.map(item => item.name).join(', ')}
            </Text>
            <Text paragraph bold color={BaseColors.GRAY}>
              Status:{' '}
              <Text paragraph color={BaseColors.GRAY}>
                {detail.status}
              </Text>
            </Text>
            <Text paragraph bold color={BaseColors.GRAY}>
              Origin Language:{' '}
              <Text paragraph color={BaseColors.GRAY}>
                {detail.spoken_languages?.map(item => item.name).join(',')}
              </Text>
            </Text>
            {/* <View row centerH mt={size.spacing.sm}>
            <Score
              score={Number(((detail?.vote_average ?? 0) * 0.1).toFixed(2))}
            />
            <Text color={colors.background} bold ml={size.spacing.md}>
              User Score
            </Text>
          </View> */}
          </View>
        </View>
      </View>
      <View pd={size.spacing.lg} color={colors.primary}>
        <View row>
          <View center mt={size.spacing.sm}>
            <Score
              score={Number(((detail?.vote_average ?? 0) * 0.1).toFixed(2))}
            />
            <Text title color={colors.background} bold ml={size.spacing.md}>
              User Score
            </Text>
          </View>
          <View center mt={size.spacing.sm} flex={1}>
            <Text title color={BaseColors.WHITE} bold numberOfLines={2}>
              {detail.tagline}
            </Text>
          </View>
        </View>
      </View>
    </>
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
    width: scale(112),
    height: scale(150),
  },
  certificate: {
    borderWidth: 1,
    borderColor: BaseColors.WHITE,
    borderRadius: size.radius.sm,
    paddingVertical: scale(3),
    paddingHorizontal: scale(8),
    width: scale(60),
    opacity: 0.7,
  },
});
