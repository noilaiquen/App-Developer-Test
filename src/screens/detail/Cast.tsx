import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {Section, Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {getMovieCastsSelector} from '../../store/reducers/detail/selectors';
import {getRemoteImageSrc, scale} from '../../utils';

const Cast: React.FC = () => {
  const casts = useSelector(getMovieCastsSelector);
  return (
    <Section title="Top Billed Cast">
      <FlatList
        horizontal
        data={casts}
        extraData={casts}
        keyExtractor={item => item.id.toString()}
        // showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.card}>
            <FastImage
              style={styles.image}
              source={{uri: getRemoteImageSrc(item.profile_path)}}
            />
            <Text bold title numberOfLines={2}>
              {item.name}
            </Text>
            <Text title numberOfLines={1}>
              {item.character}
            </Text>
          </View>
        )}
      />
    </Section>
  );
};

export default React.memo(Cast);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: scale(200),
    borderRadius: size.radius.sm,
  },
  card: {
    width: scale(139),
    borderRadius: size.radius.sm,
    shadowColor: BaseColors.ALTO,
    marginRight: size.spacing.lg,
    paddingBottom: size.spacing.sm,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
    marginBottom: size.spacing.md,
    backgroundColor: BaseColors.WHITE,
  },
});
