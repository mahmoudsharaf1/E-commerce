import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from './constants';
import { ProductListScreen, ProductViewScreen } from '@/features/product/screens';

export type ProductStackParamList = {
  [SCREENS.PRODUCT.LIST]: undefined;
  [SCREENS.PRODUCT.VIEW]: { productId: string };
};

export const ProductNavigator = () => {
  const Stack = createStackNavigator<ProductStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={SCREENS.PRODUCT.LIST}
        component={ProductListScreen}
      />
      <Stack.Screen
        name={SCREENS.PRODUCT.VIEW}
        component={ProductViewScreen}
      />
    </Stack.Navigator>
  );
};
