import PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import {TextProps as RNTextProps, StyleSheet} from 'react-native';
import {Text as RPText, useTheme} from 'react-native-paper';
import {VariantProp} from 'react-native-paper/lib/typescript/components/Typography/types';
import {BaseColors} from '../../../configs/theme';
import typography from '../../../configs/typography';
import {scale} from '../../../utils/responsive';

type TextProps = {
  deviceScale?: boolean;
  bold?: boolean;
  medium?: boolean;
  normal?: boolean;
  thin?: boolean;
  light?: boolean;
  underline?: boolean;
  italic?: boolean;

  groupTitle?: boolean;

  title?: boolean;
  subheading?: boolean;
  paragraph?: boolean;
  headline?: boolean;
  caption?: boolean;
  size?: number;
  variant?: string;

  primaryColor?: boolean;
  primaryDarkColor?: boolean;
  accentColor?: boolean;
  surfaceColor?: boolean;
  errorColor?: boolean;
  disabledColor?: boolean;
  placeholderColor?: boolean;
  backdropColor?: boolean;
  notificationColor?: boolean;
  invertColor?: boolean;
  color?: string;

  align?: string;

  flex1?: boolean;
  uppercase?: boolean;
  opacity?: number;

  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;

  ma?: number | string;
  mh?: number | string;
  mv?: number | string;
  lineHeight?: number;
  fontStyle?: string;

  style?: object | any;
  autoRemoveSpaceCharacters?: boolean;

  children: string | React.ReactNode;

  onLayout?: (event: any) => void;
} & RNTextProps;

export const Text: React.FC<TextProps> = ({
  deviceScale,
  variant,
  bold,
  medium,
  normal,
  thin,
  light,
  underline,
  italic,

  groupTitle,

  title,
  subheading,
  paragraph,
  headline,
  caption,
  size,

  primaryColor,
  primaryDarkColor,
  accentColor,
  surfaceColor,
  errorColor,
  disabledColor,
  placeholderColor,
  backdropColor,
  notificationColor,
  invertColor,
  color,

  mt,
  mr,
  mb,
  ml,

  ma,
  mh,
  mv,

  flex1,
  uppercase,
  opacity,
  style,
  align,
  lineHeight,
  fontStyle,
  children,
  onLayout,

  autoRemoveSpaceCharacters,
  ...rest
}) => {
  const {
    // fonts,
    colors,
  } = useTheme();

  const textStyles = StyleSheet.flatten([
    {
      opacity,
      fontSize: deviceScale ? scale(14) : 14,
    },
    // normal && fonts.regular,
    // thin && fonts.thin,
    // light && fonts.light,
    // medium && fonts.medium,
    // bold && fonts.bold,
    underline && {textDecorationLine: 'underline'},
    italic && {fontStyle: 'italic'},

    groupTitle && {color: BaseColors.OUTRAGEOUS_ORANGE, marginBottom: 7},

    headline && typography.headline,
    subheading && typography.subheading,
    title && typography.title,
    paragraph && typography.paragraph,
    caption && typography.caption,
    size && {fontSize: deviceScale ? scale(size) : size},

    primaryColor && {color: colors.primary},
    // primaryDarkColor && { color: colors.primaryDark },
    // accentColor && { color: colors.accent },
    // surfaceColor && { color: colors.surface },
    // errorColor && { color: colors.error },
    // disabledColor && { color: colors.disabled },
    // placeholderColor && { color: colors.placeholder },
    // backdropColor && { color: colors.backdrop },
    // notificationColor && { color: colors.notification },
    // invertColor && { color: colors.lightText },
    color && {color},

    mt && {marginTop: mt},
    mr && {marginRight: mr},
    mb && {marginBottom: mb},
    ml && {marginLeft: ml},

    ma && {margin: ma},
    mh && {marginHorizontal: mh},
    mv && {marginVertical: mv},

    flex1 && {flex: 1},
    uppercase && {textTransform: 'uppercase'},
    align && {textAlign: align},
    lineHeight && {lineHeight: deviceScale ? scale(lineHeight) : lineHeight},
    fontStyle && {fontStyle},
    style && style,
  ]);

  const _variant = useMemo(() => {
    if (variant) return variant;
    if (bold) return 'bold';
    if (medium) return 'medium';
    if (light) return 'light';
    if (thin) return 'thin';
    return 'regular';
  }, [bold, medium, normal, thin, light, variant]) as
    | VariantProp<never>
    | undefined;

  return (
    <RPText style={textStyles} onLayout={onLayout} variant={_variant} {...rest}>
      {children}
    </RPText>
  );
};

Text.propTypes = {
  deviceScale: PropTypes.bool,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
  normal: PropTypes.bool,
  thin: PropTypes.bool,
  light: PropTypes.bool,
  underline: PropTypes.bool,
  italic: PropTypes.bool,

  groupTitle: PropTypes.bool,

  title: PropTypes.bool,
  subheading: PropTypes.bool,
  paragraph: PropTypes.bool,
  headline: PropTypes.bool,
  caption: PropTypes.bool,
  size: PropTypes.number,
  variant: PropTypes.string,

  primaryColor: PropTypes.bool,
  primaryDarkColor: PropTypes.bool,
  accentColor: PropTypes.bool,
  surfaceColor: PropTypes.bool,
  errorColor: PropTypes.bool,
  disabledColor: PropTypes.bool,
  placeholderColor: PropTypes.bool,
  backdropColor: PropTypes.bool,
  notificationColor: PropTypes.bool,
  invertColor: PropTypes.bool,
  color: PropTypes.string,

  align: PropTypes.string,

  flex1: PropTypes.bool,
  uppercase: PropTypes.bool,
  opacity: PropTypes.number,

  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  ma: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mh: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lineHeight: PropTypes.number,
  fontStyle: PropTypes.string,

  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  autoRemoveSpaceCharacters: PropTypes.bool,
};
