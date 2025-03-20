import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {scale} from '../../utils';

const WatchListBtn: React.FC = () => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Ionicons name={'bookmark'} size={20} color={BaseColors.WHITE} />
        <Text paragraph bold color={BaseColors.WHITE}>
          Add To Watchlist
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
