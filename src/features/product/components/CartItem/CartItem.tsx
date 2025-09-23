import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button, Text} from '@components';
import {colors} from '@theme';
import { useTheme } from '@contexts/ThemeContext';

export type CartItemProps = {
  count: number;
  onPress: () => void;
  onPlusCount: () => void;
  onMinusCount: () => void;
  loading: boolean;
  disabled: boolean;
};

export const CartItem = (props: CartItemProps) => {
    const {themeColors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: themeColors.background.primary}]}>
      <Button
        label="Add to Cart"
        style={styles.button}
        type="orange"
        onPress={props.onPress}
        loading={props?.loading}
        disabled={props.disabled}
      />
      <View style={styles.countContainer}>
        <Button
          onPress={props.onPlusCount}
          label=""
          icon="plus"
          type="transparent"
          style={styles.countButton}
          iconColor={colors.paletteV2.black}
        />
        <Text
          style={styles.count}
          size={16}
          color={colors.paletteV2.black}
          weight="500">
          {props.count || 0}
        </Text>
        <Button
          onPress={props.onMinusCount}
          label=""
          type="transparent"
          icon="minus"
          style={styles.countButton}
          iconColor={colors.paletteV2.black}
          disabled={props.count === 1}
        />
      </View>
    </View>
  );
};
