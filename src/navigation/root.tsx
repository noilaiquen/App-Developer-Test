import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from 'react-native-screens/native-stack';
import {HeaderCenter, Text, View} from '../components';
import {BaseColors, useTheme} from '../configs/theme';
import {ROUTES} from '../constants';
import HomeScreen from '../screens/home/index';
import MovieDetail from '../screens/movieDetail/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const RootNavigation = () => {
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
    <RootStack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={baseOptions}>
      <RootStack.Screen name={ROUTES.BOTTOM_TABS} component={BottomTabs} />
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

export const BottomTabs = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: () => <Ionicons name="home" size={30} />,
          // You can add tabBarIcon here
        }}
      />
      <Tab.Screen
        name="Search"
        component={View} // Replace with your Search screen component
        options={{
          tabBarLabel: () => <Ionicons name="home" size={30} />,
          // You can add tabBarIcon here
        }}
      />
    </Tab.Navigator>
  );
};
