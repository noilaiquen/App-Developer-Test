import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from '../components';
import {BaseColors} from '../configs/theme';
import {ROUTES} from '../constants';
import HomeScreen from '../screens/home/index';

const Tab = createBottomTabNavigator();

type TabItem = {
  route: string;
  component: React.FC;
  iconName: string;
};

const tabs: TabItem[] = [
  {
    route: ROUTES.HOME_SCREEN,
    component: HomeScreen,
    iconName: 'home',
  },
  {
    route: ROUTES.WATCH_LIST_SCREEN,
    component: View,
    iconName: 'bookmark',
  },
];

export const BottomTabs = (): JSX.Element => {
  return (
    <Tab.Navigator
      lazy={true}
      tabBarOptions={{
        style: {
          backgroundColor: '#032541',
        },
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.route}
          name={tab.route}
          component={tab.component}
          options={{
            tabBarLabel: ({focused}) => (
              <Icon
                name={tab.iconName}
                size={30}
                color={BaseColors.WHITE}
                style={{
                  opacity: focused ? 1 : 0.5,
                }}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
