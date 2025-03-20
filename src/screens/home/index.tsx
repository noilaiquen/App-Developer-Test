import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {FlatList, Keyboard, RefreshControl, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {MovieItem, RootView} from '../../components';
import size from '../../configs/size';
import {ROUTES} from '../../constants';
import {useActions, useDidUpdate} from '../../hooks';
import {getMovies} from '../../store/reducers/movie/actions';
import {
  getFilterSelector,
  getMoviesSelector,
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
  const filter = useSelector(getFilterSelector);
  const actions = useActions({getMovies});

  const navigateToDetail = useCallback((movie: Movie) => {
    Keyboard.dismiss();
    navigate(ROUTES.MOVE_DETAIL_SCREEN, {movie});
  }, []);

  useDidUpdate(() => {
    actions.getMovies();
  }, [filter]);

  useEffect(() => {
    actions.getMovies();
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
            onRefresh={() => actions.getMovies(true)}
          />
        }
        data={movies}
        extraData={[movies]}
        renderItem={renderItem}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        // keyExtractor={(item, index) => item.id.toString()}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<ListEmpty />}
        ListHeaderComponent={<ListHeader />}
        ListFooterComponent={<LoadMoreBtn onPress={actions.getMovies} />}
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
