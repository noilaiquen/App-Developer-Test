import { useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl } from "react-native-gesture-handler";
import Animated, { AnimatedRef, useAnimatedRef } from "react-native-reanimated";
import { AnimatedScrollView } from "react-native-reanimated/lib/typescript/reanimated2/component/ScrollView";
import { Header, RootView, View } from "../../components";
import { useActions } from "../../hooks";
import {
  getMovieCredits,
  getMovieDetail,
  getMovieReleaseDate,
} from "../../store/reducers/detail/actions";
import { Movie } from "../../types";
import Cast from "./Cast";
import LoadingSkeleton from "./LoadingSkeleton";
import MainInfo from "./MainInfo";
import { StyleSheet } from "react-native";

const MovieDetaiScreen: React.FC = ({}) => {
  const { params } = useRoute();
  const [loading, setLoading] = useState(true); //show loading skeleton when first mount
  const scrollRef: AnimatedRef<AnimatedScrollView> = useAnimatedRef();
  const { movie } = params as { movie: Movie };
  const actions = useActions({
    getMovieDetail,
    getMovieCredits,
    getMovieReleaseDate,
  });

  const handleFetchDetail = useCallback(async () => {
    try {
      setLoading(true);
      await actions.getMovieDetail(movie.id);
      // Fetch keywords and reviews after get detail
      await Promise.all([actions.getMovieCredits(movie.id), actions.getMovieReleaseDate(movie.id)]);
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
    <RootView safeEnable>
      <Header />
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        refreshControl={<RefreshControl refreshing={false} onRefresh={handleFetchDetail} />}>
        <MainInfo postPath={movie.poster_path} />
        <View bgColor>{loading ? <LoadingSkeleton /> : <Cast />}</View>
      </Animated.ScrollView>
    </RootView>
  );
};

export default React.memo(MovieDetaiScreen);

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
  },
});
