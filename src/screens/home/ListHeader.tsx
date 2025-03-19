import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import {Dropdown, Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {useActions} from '../../hooks';
import {getMovies, searchMovies} from '../../store/reducers/movie/actions';
import {scale} from '../../utils';

interface ListHeaderProps {}

const ListHeader: React.FC<ListHeaderProps> = () => {
  const timeout = useRef<NodeJS.Timeout | undefined>();
  const [keyword, setKeyword] = useState('');
  const actions = useActions({searchMovies, getMovies});

  const onChangeText = (text: string) => {
    setKeyword(text);
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if (text.trim().length === 0) {
        actions.getMovies();
      } else {
        actions.searchMovies(text);
      }
    }, 700);
  };
  return (
    <View style={styles.container}>
      <Dropdown
        onChange={() => {}}
        label="Sort by"
        data={[
          {name: 'Now Playing', value: 1},
          {name: 'Upcoming', value: 2},
          {name: 'Popular', value: 3},
        ]}
      />
      <Dropdown
        onChange={() => {}}
        label="Sort by"
        data={[
          {name: 'By alphabetical order', value: 1},
          {name: 'By rating', value: 2},
          {name: 'By release date', value: 3},
        ]}
      />
      <TextInput
        value={keyword}
        style={styles.input}
        placeholder="Search movies"
        onChangeText={onChangeText}
      />

      <Button
        mode="contained"
        buttonColor={BaseColors.ALTO}
        style={styles.button}>
        <Text bold size={16} deviceScale color={BaseColors.BLACK} opacity={0.5}>
          Search
        </Text>
      </Button>
    </View>
  );
};

export default React.memo(ListHeader);

const styles = StyleSheet.create({
  container: {
    paddingVertical: size.spacing.md,
    gap: size.spacing.md,
  },
  input: {
    padding: size.spacing.md,
    fontSize: scale(16),
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    margin: 0,
    height: scale(50),
    borderRadius: size.radius.sm,
    borderWidth: 1,
    borderColor: BaseColors.ALTO,
    backgroundColor: 'white',
  },
  button: {
    marginTop: size.spacing.md,
    marginBottom: size.spacing.xxl,
    borderRadius: scale(25),
  },
});
