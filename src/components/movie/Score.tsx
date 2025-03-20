import React, {FC, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import {BaseColors} from '../../configs/theme';
import {View} from '../common/View';

export interface ScoreProps {
  score: number;
}

export const Score: FC<ScoreProps> = ({score}) => {
  const [_score, setScore] = useState(0);

  useEffect(() => {
    setScore(score);
  }, [score]);

  return (
    <View color="#032541" width={44} height={44} br={22} center>
      <Progress.Circle
        showsText
        size={40}
        thickness={3}
        strokeCap="round"
        color={BaseColors.EUCALYPTUS}
        progress={_score}
        textStyle={styles.progressText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressText: {
    color: BaseColors.WHITE,
    fontWeight: 'bold',
    fontSize: 10,
  },
});
