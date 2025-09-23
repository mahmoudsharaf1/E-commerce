import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CartDashboardScreen } from '@/features/cart/screens';
import { SCREENS } from './constants';

export type CartStackParamList = {
  [SCREENS.CART.DASHBOARD]: undefined;
};

export const CartNavigator = () => {
  const Stack = createStackNavigator<CartStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={SCREENS.CART.DASHBOARD}
        component={CartDashboardScreen}
      />
    </Stack.Navigator>
  );
};
