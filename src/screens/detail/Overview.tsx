import React from 'react';
import {Section, Text} from '../../components';
import {useSelector} from 'react-redux';
import {getMovieOverviewsSelector} from '../../store/reducers/detail/selectors';
import {BaseColors} from '../../configs/theme';

const Overview: React.FC = () => {
  const overview = useSelector(getMovieOverviewsSelector);
  return (
    <Section title="Overview" pd={0} titleColor={BaseColors.WHITE}>
      <Text paragraph lineHeight={22} color={BaseColors.WHITE}>
        {overview}
      </Text>
    </Section>
  );
};

export default React.memo(Overview);
