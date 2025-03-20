import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from '../../components';
import size from '../../configs/size';

const ListEmpty: React.FC = () => {
  return (
    <View pv={size.spacing.sm} width={size.screen.width} height={300} center>
      <LottieView
        autoPlay
        source={require('../../assets/animations/no_result.json')}
      />
    </View>
  );
};

export default React.memo(ListEmpty);
