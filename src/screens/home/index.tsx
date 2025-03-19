import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {FlatList, Keyboard, RefreshControl, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {MovieItem, RootView} from '../../components';
import size from '../../configs/size';
import {ROUTES} from '../../constants';
import {useActions} from '../../hooks';
import {getMovies, refreshMovies} from '../../store/reducers/movie/actions';
import {
  getMoviesSelector,
  getNextPageSelector,
} from '../../store/reducers/movie/selectors';
import {Movie} from '../../types';
import ListEmpty from './ListEmpty';
import ListHeader from './ListHeader';
import LoadMoreBtn from './LoadMoreBtn';

type ListItemProps = {
  item: Movie;
  index: number;
};

const HomeScreen: React.FC = () => {
  const {navigate} = useNavigation();
  const movies = useSelector(getMoviesSelector);
  const nextPage = useSelector(getNextPageSelector);
  const actions = useActions({getMovies, refreshMovies});

  const navigateToDetail = useCallback((movie: Movie) => {
    Keyboard.dismiss();
    navigate(ROUTES.MOVE_DETAIL_SCREEN, {movie});
  }, []);

  const onLoadMore = useCallback(() => {
    actions.getMovies(nextPage);
  }, [nextPage]);

  useEffect(() => {
    actions.getMovies(nextPage);
  }, []);

  const renderItem = useCallback(({item, index}: ListItemProps) => {
    return <MovieItem movie={item} index={index} onPress={navigateToDetail} />;
  }, []);

  return (
    <RootView>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={actions.refreshMovies}
          />
        }
        data={movies}
        extraData={[movies]}
        renderItem={renderItem}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<ListEmpty />}
        ListHeaderComponent={<ListHeader />}
        ListFooterComponent={<LoadMoreBtn onPress={onLoadMore} />}
      />
    </RootView>
  );
};

export default React.memo(HomeScreen);

const styles = StyleSheet.create({
  listContainer: {
    padding: size.spacing.xxl,
  },
});
