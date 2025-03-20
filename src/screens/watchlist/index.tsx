import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { FlatList, Keyboard, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Header, MovieItem, RootView } from "../../components";
import size from "../../configs/size";
import { ROUTES } from "../../constants";
import { useActions } from "../../hooks";
import { removeFromWacthlist } from "../../store/reducers/watchlist/actions";
import { getWatchlistSelector } from "../../store/reducers/watchlist/selectors";
import { Movie } from "../../types";
import { scale } from "../../utils";
import ListEmpty from "./ListEmpty";
import ListHeader from "./ListHeader";
import ProfileInfo from "./ProfileInfo";
// import ListHeader from './ListHeader';
// import LoadMoreBtn from './LoadMoreBtn';

type ListItemProps = {
  item: Movie;
  index: number;
};

const WatchListScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const watchlist = useSelector(getWatchlistSelector);
  const actions = useActions({ removeFromWacthlist });

  const listData = Object.values(watchlist);

  const navigateToDetail = useCallback((movie: Movie) => {
    Keyboard.dismiss();
    navigate(ROUTES.MOVE_DETAIL_SCREEN, { movie });
  }, []);

  const renderItem = useCallback(({ item, index }: ListItemProps) => {
    return (
      <MovieItem
        movie={item}
        onPress={navigateToDetail}
        onRemove={() => actions.removeFromWacthlist(item)}
      />
    );
  }, []);

  return (
    <RootView safeEnable>
      <Header />
      <ProfileInfo />
      <FlatList
        data={listData}
        extraData={[listData]}
        renderItem={renderItem}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<ListEmpty />}
        ListHeaderComponent={<ListHeader />}
      />
    </RootView>
  );
};

export default React.memo(WatchListScreen);

const styles = StyleSheet.create({
  listContainer: {
    padding: size.spacing.xxl,
    paddingBottom: scale(250),
  },
});
