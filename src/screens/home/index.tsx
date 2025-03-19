import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {FlatList, Keyboard, RefreshControl, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {MovieItem, RootView} from '../../components';
import size from '../../configs/size';
import {ROUTES} from '../../constants';
import {useActions} from '../../hooks';
import {getMovies} from '../../store/reducers/movie/actions';
import {getMoviesSelector} from '../../store/reducers/movie/selectors';
import {Movie} from '../../types';
import ListEmpty from './ListEmpty';
import ListHeader from './ListHeader';

type ListItemProps = {
  item: Movie;
  index: number;
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const movies = useSelector(getMoviesSelector);
  const actions = useActions({getMovies});

  const navigateToDetail = useCallback((movie: Movie) => {
    Keyboard.dismiss();
    navigation.navigate(ROUTES.MOVE_DETAIL_SCREEN, {movie});
  }, []);

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
          <RefreshControl refreshing={false} onRefresh={actions.getMovies} />
        }
        // numColumns={2}
        data={movies}
        extraData={[movies]}
        renderItem={renderItem}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        ListHeaderComponent={<ListHeader />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<ListEmpty />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
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
