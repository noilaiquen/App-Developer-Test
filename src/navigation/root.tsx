import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from 'react-native-screens/native-stack';
import {HeaderCenter} from '../components';
import {useTheme} from '../configs/theme';
import {ROUTES} from '../constants';
import HomeScreen from '../screens/home/index';
import MovieDetail from '../screens/movieDetail/index';

const RootStack = createNativeStackNavigator();

export const RootNavigation = (): JSX.Element => {
  const {colors} = useTheme();

  const baseOptions: NativeStackNavigationOptions = {
    headerShown: true,
    statusBarTranslucent: true,
    statusBarStyle: 'light',
    statusBarColor: colors.primary,
    replaceAnimation: 'push',
    headerCenter: () => <HeaderCenter />,
    headerStyle: {backgroundColor: colors.primary},
  };

  return (
    <RootStack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={baseOptions}>
      <RootStack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
      <RootStack.Screen
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
    </RootStack.Navigator>
  );
};
