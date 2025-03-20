import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { BaseColors } from "../configs/theme";
import { ROUTES } from "../constants";
import HomeScreen from "../screens/home";
import WatchListScreen from "../screens/watchlist";
import { Platform } from "react-native";

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
    iconName: "home",
  },
  {
    route: ROUTES.WATCH_LIST_SCREEN,
    component: WatchListScreen,
    iconName: "bookmark",
  },
];

export const BottomTabs = (): JSX.Element => {
  return (
    <Tab.Navigator
      lazy={true}
      tabBarOptions={{
        style: {
          backgroundColor: "#032541",
          ...Platform.select({
            android: {
              paddingBottom: 10,
            },
            ios: {},
          }),
        },
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.route}
          name={tab.route}
          component={tab.component}
          options={{
            tabBarLabel: ({ focused }) => (
              <Icon
                name={tab.iconName}
                size={26}
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
