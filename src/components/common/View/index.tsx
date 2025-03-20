import React from 'react';
import {View as RNView, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';

interface ViewProps {
  bgColor?: boolean;
  cardColor?: boolean;
  color?: string;
  width?: number | string;
  height?: number | string;
  gap?: number;
  mg?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mh?: number;
  mv?: number;
  pd?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  ph?: number;
  pv?: number;
  br?: number;
  flex?: number;
  row?: boolean;
  center?: boolean;
  centerH?: boolean;
  centerV?: boolean;
  olh?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onLayout?: (event: any) => void;
}

export const View: React.FC<ViewProps> = ({
  children,
  bgColor,
  cardColor,
  color,
  width,
  height,
  gap,
  mg,
  mt,
  mb,
  ml,
  mr,
  mh,
  mv,
  pd,
  pt,
  pb,
  pl,
  pr,
  ph,
  pv,
  br,
  flex,
  row,
  center,
  centerH,
  centerV,
  olh,
  style,
  onLayout,
  ...rest
}) => {
  const {colors} = useTheme();

  const _styles = StyleSheet.flatten([
    bgColor && {backgroundColor: colors.background},
    color && {backgroundColor: color},
    width && {width},
    height && {height},
    gap && {gap},
    mg && {margin: mg},
    mt && {marginTop: mt},
    mb && {marginBottom: mb},
    ml && {marginLeft: ml},
    mr && {marginRight: mr},
    mh && {marginHorizontal: mh},
    mv && {marginVertical: mv},
    pd && {padding: pd},
    pt && {paddingTop: pt},
    pb && {paddingBottom: pb},
    pl && {paddingLeft: pl},
    pr && {paddingRight: pr},
    ph && {paddingHorizontal: ph},
    pv && {paddingVertical: pv},
    br && {borderRadius: br},
    olh && {overflow: 'hidden'},
    flex && {flex},
    row && {flexDirection: 'row'},
    center && {justifyContent: 'center', alignItems: 'center'},
    centerH && {alignItems: row ? 'center' : 'flex-start'},
    centerV && {justifyContent: row ? 'flex-start' : 'center'},
    style && style,
  ]) as StyleProp<ViewStyle>;

  return (
    <RNView style={_styles} onLayout={onLayout} {...rest}>
      {children}
    </RNView>
  );
};
