import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Section, Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {getRemoteImageSrc} from '../../utils';
import {getMovieReviewsSelector} from '../../store/reducers/detail/selectors';

const Reviews: React.FC = () => {
  const reviews = useSelector(getMovieReviewsSelector);
  return (
    <Section title="Reviews">
      {reviews.length === 0 ? (
        <Text color={BaseColors.DIM_GRAY}>No reviews</Text>
      ) : (
        reviews.map(review => (
          <View key={review.id} mt={size.spacing.md} row centerH>
            <Avatar.Image
              size={50}
              source={{
                uri: getRemoteImageSrc(review.author_details.avatar_path),
              }}
            />
            <View
              flex={1}
              ml={size.spacing.lg}
              pb={size.spacing.md}
              style={styles.rightContent}>
              <Text bold paragraph>
                {review.author_details.name || 'Anonimous'}
              </Text>
              <Text numberOfLines={3}>{review.content}</Text>
            </View>
          </View>
        ))
      )}
    </Section>
  );
};

export default React.memo(Reviews);

const styles = StyleSheet.create({
  rightContent: {
    borderBottomWidth: 1,
    borderBottomColor: BaseColors.ALTO,
  },
});
