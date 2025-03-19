import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from 'react-native-screens/native-stack';
import {HeaderCenter} from '../components';
import {BaseColors, useTheme} from '../configs/theme';
import {ROUTES} from '../constants';
import MovieDetail from '../screens/movieDetail/index';
import {BottomTabs} from './BottomTabs';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const {colors} = useTheme();

  const baseOptions: NativeStackNavigationOptions = {
    headerShown: true,
    statusBarTranslucent: true,
    statusBarStyle: 'light',
    statusBarColor: colors.primary,
    replaceAnimation: 'push',
    headerCenter: () => <HeaderCenter />,
    headerHideShadow: true,
    headerStyle: {backgroundColor: BaseColors.WHITE},
  };

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={baseOptions}>
      <Stack.Screen name={ROUTES.BOTTOM_TABS} component={BottomTabs} />
      <Stack.Screen
        name={ROUTES.MOVE_DETAIL_SCREEN}
        component={MovieDetail}
        options={{
          headerTranslucent: true,
          headerStyle: {backgroundColor: 'transparent'},
          headerCenter: () => null,
          headerTintColor: colors.background,
          headerBackTitle: 'Back',
          statusBarColor: 'transparent',
          headerHideShadow: true,
        }}
      />
    </Stack.Navigator>
  );
};
