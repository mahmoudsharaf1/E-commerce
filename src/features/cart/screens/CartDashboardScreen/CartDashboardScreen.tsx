import { BaseLayout, Divider, EmptyListView, Text } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import React, {FC, useCallback, useEffect, useMemo} from 'react';
import {FlatList, View} from 'react-native';
import { styles } from './styles';
import { CartStackParamList } from '@navigation/CartNavigator';
import { CartItem } from '@/features/cart/components';
import { useHeader } from '@hooks/useHeader';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerTypes } from '@redux';
import { removeItemFromCart } from '@services';
import { setCart } from '@redux/actions/cartActions';
import { Cart } from '../../types/cart';
import { useTheme } from '@contexts/ThemeContext';

interface CartDashboardScreenProps 
  extends StackScreenProps<CartStackParamList, 'CartDashboard'> {}

export const CartDashboardScreen: FC<CartDashboardScreenProps> = ({
  navigation: {goBack},
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: ReducerTypes) => state.cart) as Cart;
  const {themeColors} = useTheme();
  useEffect(() => {
    console.log('Current cart:', cart);
    console.log('Cart items:', cart?.items);
    if (cart?.items?.length > 0) {
      console.log('First item structure:', cart.items[0]);
    }
  }, [cart]);

  const handleQuantityChange = useCallback(
    (item: Cart, type: 'add' | 'minus') => {
      const productId = typeof item.product === 'object' ? item.product.id : item.product;
      let newQuantity = type === 'add' ? item.quantity + 1 : item.quantity - 1;
      if (newQuantity < 1) newQuantity = 1;
      const updatedCart = {
        ...cart,
        items: cart.items.map(cartItem =>
          (typeof cartItem.product === 'object' ? cartItem.product.id : cartItem.product) === productId
            ? {...cartItem, quantity: newQuantity, total_price: newQuantity * cartItem.unit_price}
            : cartItem
        )
      };
      dispatch(setCart(updatedCart));
    },
    [cart, dispatch],
  );

  const handleRemove = useCallback((productId: number) => {
    const updatedCart = removeItemFromCart(cart, productId);
    dispatch(setCart(updatedCart));
  }, [cart, dispatch]);

  const renderCartItem = useCallback(
    ({item}: {item: Cart}) => {
      if (!item) return null;
      const productId = typeof item.product === 'object' ? item.product.id : item.product;
      const productTitle = typeof item.product === 'object' ? item.product.title : `Product ${item.product}`;
      const productImage = typeof item.product === 'object' ? item.product.images?.[0] : '';
      const transformedItem = {
        id: productId?.toString() || 'unknown',
        product_id: productId || 0,
        product_title: productTitle || 'Unknown Product',
        image: productImage || '',
        quantity: item.quantity || 0,
        unit_price: item.unit_price || 0,
        total_price: item.total_price || 0,
      };
      return (
        <CartItem
          item={transformedItem}
          onQuantityChange={(cartItem, type) => handleQuantityChange(item, type)}
          onRemove={() => handleRemove(productId)}
        />
      );
    },
    [handleQuantityChange, handleRemove],
  );

  const totalPrice = useMemo(() => {
    return cart?.items?.reduce((sum, item) => sum + (item.total_price || 0), 0) || 0;
  }, [cart]);

  useHeader({title: 'Cart', hasBack: true});
  
  return (
   <BaseLayout
      paddingHorizontal={false}
      safeAreaView={false}
      scroll>
      <View style={styles.container}>
        {!cart?.items?.length ? (
          <EmptyListView
            title="Your cart is empty"
            description="Add items to your cart to see them here"
            button={{
              label: "Start Shopping",
              onPress: goBack,
            }}
          />
        ) : (
          <FlatList
            data={cart.items}
            renderItem={renderCartItem}
            keyExtractor={(item, index) => {
              if (item && item.product && item.product.id) {
                return item.product.id.toString();
              }
              return `cart-item-${index}`;
            }}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <Divider style={styles.divider} />}
            />
        )}
      </View>
      {cart?.items?.length > 0 && (
        <View style={[styles.totalContainer, {backgroundColor: themeColors.background.primary}]}>
              <Text size={16} weight="700">
                Total: ${totalPrice.toFixed(2)}
              </Text>
            </View>
            )}
    </BaseLayout>
  );
};
