import {useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {RefreshControl} from 'react-native-gesture-handler';
import Animated, {
  AnimatedRef,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import {AnimatedScrollView} from 'react-native-reanimated/lib/typescript/reanimated2/component/ScrollView';
import {RootView, View} from '../../components';
import size from '../../configs/size';
import {useActions} from '../../hooks';
import {
  getMovieCasts,
  getMovieDetail,
  getMovieKeywords,
  getMovieReviews,
} from '../../store/reducers/detail/actions';
import {Movie} from '../../types';
import AnimationHeader from './AnimationHeader';
import Cast from './Cast';
import ImagePoster from './ImagePoster';
import Keywords from './Keywords';
import LoadingSkeleton from './LoadingSkeleton';
import MainInfo from './MainInfo';
import Overview from './Overview';
import Reviews from './Reviews';

const IMAGE_WIDTH = size.screen.width;
const IMAGE_HEIGHT = IMAGE_WIDTH;

const MovieDetaiScreen: React.FC = ({}) => {
  const {params} = useRoute();
  const [loading, setLoading] = useState(true); //show loading skeleton when first mount
  const scrollRef: AnimatedRef<AnimatedScrollView> = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const {movie} = params as {movie: Movie};
  const actions = useActions({
    getMovieDetail,
    getMovieKeywords,
    getMovieReviews,
    getMovieCasts,
  });

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
            [-IMAGE_HEIGHT / 2, 0, IMAGE_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  }, [scrollOffset]);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT / 2],
        [0, 0, 1],
      ),
    };
  }, [scrollOffset]);

  const handleFetchDetail = useCallback(async () => {
    try {
      setLoading(true);
      await actions.getMovieDetail(movie.id);
      // Fetch keywords and reviews after get detail
      await Promise.all([
        actions.getMovieCasts(movie.id),
        actions.getMovieKeywords(movie.id),
        actions.getMovieReviews(movie.id),
      ]);
    } catch (error) {
    } finally {
      // delay 1s to hide loading skeleton (Improvement UX)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [movie]);

  useEffect(() => {
    handleFetchDetail();
  }, [handleFetchDetail]);

  return (
    <RootView>
      <AnimationHeader
        title={movie.title}
        containerAnimatedStyle={headerAnimatedStyle}
      />
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={handleFetchDetail} />
        }>
        <ImagePoster
          animatedStyle={imageAnimatedStyle}
          poster={movie.backdrop_path}
        />
        <MainInfo postPath={movie.poster_path} imageHeight={IMAGE_HEIGHT} />
        <View bgColor mt={size.spacing.xxl}>
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <React.Fragment>
              <Overview />
              <Cast />
              <Reviews />
              <Keywords />
            </React.Fragment>
          )}
        </View>
      </Animated.ScrollView>
    </RootView>
  );
};

export default React.memo(MovieDetaiScreen);

const styles = StyleSheet.create({
  imagePoster: {
    borderRadius: size.radius.md,
    width: 120,
    height: 180,
  },
});
