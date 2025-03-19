import {Dimensions} from 'react-native';
import {scale} from '../utils/responsive';

export default {
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  spacing: {
    sm: scale(5),
    md: scale(10),
    lg: scale(15),
    xl: scale(20),
    xxl: scale(25),
  },
  radius: {
    sm: scale(5),
    md: scale(10),
    lg: scale(15),
    xl: scale(20),
    xxl: scale(25),
  },
  input: {
    width: scale(300),
    height: scale(53), // for normal input
    fontSize: scale(15),
  },
  button: {
    width: scale(300),
    height: scale(53),
  },
};
