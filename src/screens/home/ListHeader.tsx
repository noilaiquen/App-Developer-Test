import React, {useRef, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {Text, View} from '../../components';
import size from '../../configs/size';
import {useActions} from '../../hooks';
import {getMovies, searchMovies} from '../../store/reducers/movie/actions';

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
    <View pv={size.spacing.md}>
      <Searchbar
        value={keyword}
        placeholder="Search movies"
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default React.memo(ListHeader);
