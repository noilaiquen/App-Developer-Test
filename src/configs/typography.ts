import {StyleSheet} from 'react-native';
import {scale} from '../utils/responsive';

export default StyleSheet.create({
  headline: {
    fontSize: scale(24),
  },
  subheading: {
    fontSize: scale(21),
  },
  title: {
    fontSize: scale(18),
  },
  paragraph: {
    fontSize: scale(16),
  },
  caption: {
    fontSize: scale(12),
  },
});
