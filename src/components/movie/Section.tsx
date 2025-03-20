import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {BaseColors} from '../../configs/theme';
import {Text} from '../common/Text';
import {View} from '../common/View';
import size from '../../configs/size';

export interface SectionProps {
  title: string;
  titleColor?: string;
  children: any;
  pd?: number;
}

export const Section: FC<SectionProps> = ({
  title,
  children,
  titleColor,
  pd = size.spacing.lg,
}) => {
  return (
    <View pd={pd}>
      <Text headline bold color={titleColor}>
        {title}
      </Text>
      <View mt={size.spacing.sm}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  progressContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    bottom: 70,
    left: 10,
    zIndex: 10,
  },
  progressText: {
    color: BaseColors.WHITE,
    fontWeight: 'bold',
    fontSize: 10,
  },
});
