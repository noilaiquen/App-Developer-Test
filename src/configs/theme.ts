import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
  configureFonts,
  useTheme,
} from 'react-native-paper';

const {LightTheme: _LightTheme, DarkTheme: _DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const fontConfig = configureFonts({
  config: {
    bold: {
      // ...otherBodyMedium,
      fontFamily: 'Roboto-Bold',
      letterSpacing: 0,
      fontWeight: 'bold',
      lineHeight: 24,
      fontSize: 16,
    },
    medium: {
      // ...otherBodyMedium,
      fontFamily: 'Roboto-Medium',
      letterSpacing: 0,
      fontWeight: 'normal',
      lineHeight: 20,
      fontSize: 14,
    },
    regular: {
      // ...otherBodyMedium,
      fontFamily: 'Roboto-Regular',
      letterSpacing: 0,
      fontWeight: 'normal',
      lineHeight: 20,
      fontSize: 14,
    },
    light: {
      // ...otherBodyMedium,
      fontFamily: 'Roboto-Light',
      letterSpacing: 0,
      fontWeight: 'normal',
      lineHeight: 20,
      fontSize: 14,
    },
    thin: {
      // ...otherBodyMedium,
      fontFamily: 'Roboto-Thin',
      letterSpacing: 0,
      fontWeight: 'normal',
      lineHeight: 20,
      fontSize: 14,
    },
  },
});

const BaseColors = {
  ORANGE_ROUGHY: '#cf4d1d',
  CARROT_ORRANGE: '#F7902A',
  WHITE: '#ffffff',
  DERSERT_STORM: '#F5F5F4',
  GRAY_BACKGROUND: '#E5E5E5',
  GRAY: '#F3F3F3',
  SOLITUDE: '#E5EDFF',
  ALTO: '#E3E3E3',
  BLACK: '#000000',
  TUNDORA: '#444444',
  EMPEROR: '#545454',
  BOULDER: '#848484',
  BEANSTALKS: '#081c22',
  SCARLET: '#eb2f06',
  CRIMSON: '#ef233c',
  CORNFLOWER_BLUE: '#5493F2',
  SILVER_CHALICE: '#A6A6A6',
  EUCALYPTUS: '#21d07a',
  MANTLE: '#8D9F95',
  VARDEN: '#FFF6E0',
  CARROT_ORANGE: '#F29527',
  TEXAS_ROSE: '#FFA85D',
  NAVY_BLUE: '#1D9CE4',
  ROYAL_BLUE: '#4573E8',
  PUERTO_RICO: '#44BBA0',
  SILVER: '#BCBCBC',
  ORANGE_PEEL: '#F2A001',
  FORGET_ME: '#FFF4F0',
  DODGER_BLUE: '#1890FF',
  RED: '#FF0000',
  DIM_GRAY: '#6D6D6D',
  DARK_GRAY: '#909090',
  LIGHT_APRICOT: '#FDD5BF',
  PEACH_CREAM: '#FFEDDC',
  OUTRAGEOUS_ORANGE: '#F15C22',
  TANGERINE: '#E59905',
  WEDGE_WOOD: '#479696',
  BUTTERFLY_BUSH: '#595085',
  NOBEL: '#959595',
  ARTIFICIAL_TURF: '#41B95E',
};

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ..._LightTheme,
  fonts: fontConfig,
  colors: {
    ...MD3LightTheme.colors,
    ..._LightTheme.colors,
    primary: BaseColors.BEANSTALKS,
    error: BaseColors.SCARLET,
  },
};

const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ..._DarkTheme,
  fonts: fontConfig,
  colors: {
    ...MD3DarkTheme.colors,
    ..._DarkTheme.colors,
    error: BaseColors.SCARLET,
  },
};

export {
  BaseColors,
  CombinedDarkTheme as DarkTheme,
  CombinedDefaultTheme as DefaultTheme,
  fontConfig as fonts,
  useTheme,
};
