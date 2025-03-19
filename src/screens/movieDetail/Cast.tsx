import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {Section, Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {getRemoteImageSrc, scale} from '../../utils';
import {getMovieCastsSelector} from '../../store/reducers/detail/selectors';

const Cast: React.FC = () => {
  const casts = useSelector(getMovieCastsSelector);
  return (
    <Section title="Casts">
      <FlatList
        horizontal
        data={casts}
        extraData={casts}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View width={scale(150)} mr={size.spacing.md} center>
            <FastImage
              style={styles.image}
              source={{uri: getRemoteImageSrc(item.profile_path)}}
            />
            <Text bold numberOfLines={1}>
              {item.name}
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
    borderRadius: size.radius.md,
  },
  chip: {
    marginRight: size.spacing.sm,
    marginBottom: size.spacing.sm,
    backgroundColor: BaseColors.ALTO,
  },
});
