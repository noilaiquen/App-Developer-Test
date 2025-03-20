import React, {useMemo, useRef, useState} from 'react';
import {Keyboard, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Dropdown, Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {useActions} from '../../hooks';
import {changeFilter} from '../../store/reducers/movie/actions';
import {getFilterSelector} from '../../store/reducers/movie/selectors';
import {scale} from '../../utils';

interface ListHeaderProps {}

const ListHeader: React.FC<ListHeaderProps> = () => {
  const filter = useSelector(getFilterSelector);
  const timeout = useRef<NodeJS.Timeout | undefined>();
  const actions = useActions({changeFilter});
  const [keyword, setKeyword] = useState<string>('');

  const doSearch = () => {
    Keyboard.dismiss();
    actions.changeFilter('keyword', keyword);
  };

  const onChangeText = (text: string) => {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      const value = (text ?? '')?.trim();
      if (value === '') {
        actions.changeFilter('keyword', '');
      } else {
        setKeyword(value);
      }
      setKeyword(text?.trim());
    }, 300);
  };

  const canSearch = useMemo(() => keyword.length > 0, [keyword]);

  return (
    <View style={styles.container}>
      <Dropdown
        onChange={value => actions.changeFilter('type', value?.value)}
        defaultValue={filter.type}
        label="List"
        data={[
          {name: 'Now Playing', value: 'now_playing'},
          {name: 'Upcoming', value: 'upcoming'},
          {name: 'Popular', value: 'popular'},
        ]}
      />
      <Dropdown
        onChange={value => actions.changeFilter('order', value?.value)}
        label="Sort by"
        defaultValue={filter.order}
        data={[
          {name: 'By alphabetical order', value: 'original_title.asc'},
          {name: 'By rating', value: 'vote_average.desc'},
          {name: 'By release date', value: 'release_date.desc'},
        ]}
      />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={onChangeText}
      />

      <Button
        disabled={!canSearch}
        mode="contained"
        buttonColor={canSearch ? BaseColors.BEANSTALKS : BaseColors.ALTO}
        onPress={doSearch}
        style={styles.button}>
        <Text
          bold
          size={16}
          deviceScale
          color={canSearch ? BaseColors.WHITE : BaseColors.BLACK}
          opacity={canSearch ? 1 : 0.5}>
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
    shadowColor: BaseColors.ALTO,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  button: {
    marginTop: size.spacing.md,
    marginBottom: size.spacing.xxl,
    borderRadius: scale(25),
  },
});
