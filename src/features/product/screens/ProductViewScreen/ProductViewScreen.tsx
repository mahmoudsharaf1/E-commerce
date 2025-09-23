import React, {FC, useMemo, useState, useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import {BaseLayout, Icon, Text} from '@components';
import {styles} from './styles';
import {colors} from '@theme';

import {
  PeoductViewSkeletonCard,
  ProductImage,
  CartItem,
} from '@/features/product/components';

import {ProductStackParamList} from '@navigation/ProductNavigator';
import {useHeader} from '@hooks/useHeader';
import {ReducerTypes} from '@redux';
import {setCart} from '@redux/actions/cartActions';
import {setToast} from '@redux/actions/toastActions';
import { addItemToCart, createCart } from '@services';
import { useTheme } from '@contexts/ThemeContext';

interface ProductViewScreenProps
  extends StackScreenProps<ProductStackParamList, 'ProductView'> {}

export const ProductViewScreen: FC<ProductViewScreenProps> = ({
  route: {
    params: {item},
  },
}) => {
  const {themeColors} = useTheme();
  const [productCount, setProductCount] = useState(1);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state: ReducerTypes) => state.cart);


  useHeader({
    title: '',
    hasBack: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const discountPercentage = useMemo(() => 0, [item]);

  const handlePlusCount = useCallback(() => {
    setProductCount(prev => prev + 1);
  }, []);

  const handleMinusCount = useCallback(() => {
    if (productCount > 1) setProductCount(prev => prev - 1);
  }, [productCount]);

  const addToCartConfirm = useCallback(() => {
    if (item && item.id) {
      const currentCart = cart || createCart();
      const updatedCart = addItemToCart(currentCart, item, productCount);
      dispatch(setCart(updatedCart));

      dispatch(setToast('Item added to cart successfully', 'success'));

      console.log('Added to cart:', item);
      console.log('Updated cart:', updatedCart);
    }
  }, [item, productCount, cart, dispatch]);

  return (
    <BaseLayout 
      scroll 
      paddingHorizontal 
      bodyStyle={[styles.body, {backgroundColor: themeColors.background.primary}]}>
      {showSkeleton ? (
        <PeoductViewSkeletonCard />
      ) : (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text weight="700" size={20}>
              {item.title}
            </Text>

            <View style={styles.row}>
              <Text weight="700" size={24}>
                $ {item.price}
              </Text>

              {discountPercentage > 0 && (
                <View style={styles.discount}>
                  <Text weight="700" size={13} color={colors.paletteV2.red}>
                    {`${discountPercentage}%`}
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.row}>
              <Icon name="star" size={21} />
              <Text weight="700" size={13}>
                5
                <Text weight="700" size={13}>
                  {`/5`}
                </Text>
              </Text>
            </View>
          </View>

          <ProductImage tag={item.category?.id} images={item.images} />
          <Text weight="400" size={13} >
            {item.description}
          </Text>
        </View>
      )}

      <CartItem
        // Here we can disable the cart item interaction when loading
        disabled={showSkeleton}
        count={productCount}
        onPlusCount={handlePlusCount}
        onMinusCount={handleMinusCount}
        onPress={addToCartConfirm}
        loading={false}
      />
    </BaseLayout>
  );
};
