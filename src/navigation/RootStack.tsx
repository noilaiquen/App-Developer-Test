import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { useTheme } from "../configs/theme";
import { ROUTES } from "../constants";
import MovieDetail from "../screens/detail/index";
import { BottomTabs } from "./BottomTabs";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: false,
        statusBarStyle: "dark",
        statusBarColor: colors.background,
        replaceAnimation: "push",
      }}>
      <Stack.Screen name={ROUTES.BOTTOM_TABS} component={BottomTabs} />
      <Stack.Screen name={ROUTES.MOVE_DETAIL_SCREEN} component={MovieDetail} />
    </Stack.Navigator>
  );
};
