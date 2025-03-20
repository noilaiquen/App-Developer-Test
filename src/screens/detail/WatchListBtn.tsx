import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {useActions} from '../../hooks';
import {
  addToWacthlist,
  removeFromWacthlist,
} from '../../store/reducers/watchlist/actions';
import {getWatchlistSelector} from '../../store/reducers/watchlist/selectors';
import {Movie} from '../../types';
import {scale} from '../../utils';

interface WatchListBtnProps {}
const WatchListBtn: React.FC<WatchListBtnProps> = () => {
  const {params} = useRoute();
  const {movie} = params as {movie: Movie};
  const watchlist = useSelector(getWatchlistSelector);
  const actions = useActions({
    addToWacthlist,
    removeFromWacthlist,
  });

  const isAdded = !!watchlist[movie?.id ?? 0];

  return (
    <Pressable
      onPress={() =>
        actions[isAdded ? 'removeFromWacthlist' : 'addToWacthlist'](movie)
      }>
      <View style={styles.container}>
        <Ionicons name={'bookmark'} size={20} color={BaseColors.WHITE} />
        <Text paragraph bold color={BaseColors.WHITE}>
          {isAdded ? 'Remove From Watchlist' : 'Add To Watchlist'}
        </Text>
      </View>
    </Pressable>
  );
};

export default React.memo(WatchListBtn);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.spacing.sm,
    paddingHorizontal: size.spacing.md,
    borderRadius: size.radius.sm,
    borderWidth: 1,
    borderColor: BaseColors.WHITE,
    height: scale(37),
  },
});
