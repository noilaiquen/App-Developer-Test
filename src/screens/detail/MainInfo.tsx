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
import Overview from './Overview';
import WatchListBtn from './WatchListBtn';

const MainInfo: React.FC<{
  postPath: string;
}> = ({postPath}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const detail = useSelector(getDetailSelector);

  console.log(JSON.stringify(detail, null, 2));

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
          </View>
        </View>
      </View>
      <View
        pd={size.spacing.xl}
        pb={size.spacing.xxl}
        color={colors.primary}
        gap={20}>
        <View row>
          <View mt={size.spacing.sm}>
            <View center>
              <Score
                score={Number(((detail?.vote_average ?? 0) * 0.1).toFixed(2))}
              />
              <Text title color={colors.background} bold>
                User Score
              </Text>
            </View>
          </View>
          <View center mt={size.spacing.sm} flex={1} gap={10}>
            {detail?.director ? (
              <View>
                <Text title color={BaseColors.WHITE} bold numberOfLines={2}>
                  {detail?.director?.name}
                </Text>
                <Text paragraph color={BaseColors.WHITE}>
                  {detail?.director?.job}
                </Text>
              </View>
            ) : null}
            {detail?.writer ? (
              <View>
                <Text title color={BaseColors.WHITE} bold numberOfLines={2}>
                  {detail?.writer?.name}
                </Text>
                <Text paragraph color={BaseColors.WHITE}>
                  {detail?.writer?.job}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View row>
          <Text color={BaseColors.WHITE}>{detail?.tagline}</Text>
        </View>
        <Overview />
        <View row>
          <WatchListBtn />
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
