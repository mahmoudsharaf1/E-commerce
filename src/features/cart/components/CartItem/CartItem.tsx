import {Image, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button, Text} from '@components';
import {Cart} from '@/features/cart/types/cart';
import { trunc } from '@utils/string';
import { useTheme } from '@contexts/ThemeContext';

export type CartItemProps = {
  item: Cart;
  onQuantityChange: (item: Cart, type: 'add' | 'minus') => void;
  onRemove: (id: string) => void;
  ballonItem?: boolean;
};

export const CartItem = React.memo(
  ({
    item,
    onQuantityChange,
    onRemove,
  }: CartItemProps) => {
   const { themeColors } = useTheme();
    return (
      <View style={[styles.cartItem, {backgroundColor: themeColors.background.primary}]}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={{uri: item.image || undefined}}
            resizeMode="contain"
          />

          <View style={styles.itemDetailsContainer}>
            <Text size={15} lineHeight={25}>
              {trunc(item.product_title, 40)}
            </Text>
            <Text size={15} weight="700">
              {parseFloat(`${item.quantity * item.unit_price}`).toFixed(2)}{' '}
              $
            </Text>
          </View>

          <View />
          <View style={styles.countContainer}>
            <Button
              onPress={() => onQuantityChange(item, 'add')}
              label=""
              icon="plus"
              type="transparent"
              style={styles.countButton}
              iconColor={themeColors.text.primary}
              iconSize={13}
            />
            <Text
              style={styles.count}
              size={14}
              weight="400">
              {String(item.quantity) || 0}
            </Text>
            <Button
              onPress={() => onQuantityChange(item, 'minus')}
              label=""
              type="transparent"
              icon={'minus'}
              style={styles.countButton}
              iconColor={themeColors.text.primary}
              iconSize={13}
              disabled={item.quantity === 1}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            type="transparent"
            label="Remove"
            icon="delete"
            onPress={() => onRemove(item.id)}
          />
        </View>
      </View>
    );
  },
);