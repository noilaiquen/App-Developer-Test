import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from 'react-native-screens/native-stack';
import {Header} from '../components';
import {BaseColors, useTheme} from '../configs/theme';
import {ROUTES} from '../constants';
import MovieDetail from '../screens/detail/index';
import {BottomTabs} from './BottomTabs';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const {colors} = useTheme();

  // const baseOptions: NativeStackNavigationOptions = {
  //   headerShown: true,
  //   statusBarTranslucent: true,
  //   statusBarStyle: 'light',
  //   statusBarColor: colors.primary,
  //   replaceAnimation: 'push',
  //   headerCenter: () => <HeaderCenter />,
  //   headerHideShadow: true,
  //   headerStyle: {backgroundColor: BaseColors.WHITE},
  // };

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarStyle: 'dark',
        statusBarColor: colors.primary,
        replaceAnimation: 'push',
      }}>
      <Stack.Screen name={ROUTES.BOTTOM_TABS} component={BottomTabs} />
      <Stack.Screen name={ROUTES.MOVE_DETAIL_SCREEN} component={MovieDetail} />
    </Stack.Navigator>
  );
};
