import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {ProductStackParamList} from '@navigation/ProductNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {Product} from '@features/product/types/product';
import {ProductItem, ProductItemSkeletonCard} from '@/features/product/components';
import {BaseLayout} from '@components/templates';
import {styles} from './styles';
import {useHeader} from '@hooks/useHeader';
import {Icon, Text} from '@components';
import {EmptyListView} from '@components/organisms';
import {products} from '@/features/product/utils/product';
import {useProduct} from '@/features/product/hooks';
import {NAVIGATORS, SCREENS} from '@navigation/constants';
import { colors } from '@theme';
import { useSelector } from 'react-redux';
import { ReducerTypes } from '@redux';
import { useTheme } from '@contexts/ThemeContext';

interface ProductListScreenProps
  extends StackScreenProps<ProductStackParamList, 'ProductList'> {}

export const ProductListScreen: FC<ProductListScreenProps> = ({
  navigation: {navigate},
}) => {
  const { themeColors, theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const {onRefresh, refreshing} = useProduct();
  const [loading, setLoading] = useState(true);
  const cart = useSelector((state: ReducerTypes) => state.cart);
  const cartItemCount = useMemo(() => cart?.items?.length || 0, [cart?.items]);

  useEffect(() => {
    // Just for design preview
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderItem = useCallback(
    ({item}: {item: Product}) => (
      <ProductItem
        card={item}
        // I'm passing the full item here because data is static,
        // but if data comes from API, I would only pass the product ID
        onPress={() => navigate(SCREENS.PRODUCT.VIEW, {item})}
      />
    ),
    [navigate],
  );

  useHeader({
    title: 'SOFTXPERT',
    hasBack: false,
    LeftActionComponent: <Icon name={isDarkMode ? 'sun' : 'moon'} size={25} onPress={toggleTheme} />,
    RightActionComponent:<View style={styles.badgeContainer}>
    <Icon name="cart" size={25} color={themeColors.text.primary}
      onPress={() => navigate(NAVIGATORS.CART as any, {
      screen: SCREENS.CART.DASHBOARD})}
    />
    {cartItemCount > 0 && (
      <View style={styles.badge}>
        <Text color={colors.paletteV2.white} size={10} >
          {cartItemCount}
        </Text>
      </View>
    )}
  </View>,


  });

  return (
    <BaseLayout
      paddingHorizontal={true}
      paddingVertical={false}>
      <View style={styles.container}>
        {loading ? (
          <FlatList
            data={Array.from({length: 6})}
            keyExtractor={(_, i) => i.toString()}
            renderItem={() => <ProductItemSkeletonCard />}
            numColumns={2}
            columnWrapperStyle={styles.column}
            contentContainerStyle={styles.listContainer}
          />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(_, i) => i.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
            contentContainerStyle={styles.listContainer}
            columnWrapperStyle={styles.column}
            ListEmptyComponent={<EmptyListView title={'Empty'} description="" />}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[themeColors.text.primary]}
                tintColor={themeColors.text.primary}
              />
            }
          />
        )}
      </View>
    </BaseLayout>
  );
};
