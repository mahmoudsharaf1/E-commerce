import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import { NAVIGATORS } from './constants';
import { useTheme } from '@contexts/ThemeContext';
import { CartNavigator } from './CartNavigator';
import { ProductNavigator } from './ProductNavigator';

export const navigationRef = createNavigationContainerRef();

const StackNavigation = createStackNavigator();

const MainRoutes = () => {
  const { theme, themeColors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.background.primary }}>
      <StatusBar
        backgroundColor={
          Platform.OS === 'android' ? themeColors.background.primary : undefined
        }
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        translucent={false}
      />
      <NavigationContainer ref={navigationRef}>
        <StackNavigation.Navigator screenOptions={{ headerShown: false }}>
          <StackNavigation.Screen
            name={NAVIGATORS.DASHBOARD}
            component={ProductNavigator}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <StackNavigation.Screen
            name={NAVIGATORS.CART}
            component={CartNavigator}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </StackNavigation.Navigator>
      </NavigationContainer>
    </View>
  );
};

export type BaseStackParamList = {
  [key: string]: undefined | Record<string, any>;
};

export function navigate(
  name: keyof BaseStackParamList,
  params?: BaseStackParamList[keyof BaseStackParamList],
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export default MainRoutes;
