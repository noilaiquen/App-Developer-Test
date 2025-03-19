import React from 'react';
import {Section, Text} from '../../components';
import {useSelector} from 'react-redux';
import {getMovieOverviewsSelector} from '../../store/reducers/detail/selectors';

const Overview: React.FC = () => {
  const overview = useSelector(getMovieOverviewsSelector);
  return (
    <Section title="Overview">
      <Text paragraph lineHeight={22}>
        {overview}
      </Text>
    </Section>
  );
};

export default React.memo(Overview);
