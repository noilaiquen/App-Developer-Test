import React from 'react';
import {StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Section, Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {getMovieKeywordsSelector} from '../../store/reducers/detail/selectors';

const Keywords: React.FC = () => {
  const keywords = useSelector(getMovieKeywordsSelector);
  return (
    <Section title="Keyword">
      {keywords.length === 0 ? (
        <Text color={BaseColors.DIM_GRAY}>No keyword</Text>
      ) : (
        <View flex={1} row style={styles.content}>
          {keywords.map(keyword => (
            <Chip key={keyword.id + ''} style={styles.chip}>
              {keyword.name}
            </Chip>
          ))}
        </View>
      )}
    </Section>
  );
};

export default React.memo(Keywords);

const styles = StyleSheet.create({
  content: {
    flexWrap: 'wrap',
  },
  chip: {
    marginRight: size.spacing.sm,
    marginBottom: size.spacing.sm,
    backgroundColor: BaseColors.ALTO,
  },
});
