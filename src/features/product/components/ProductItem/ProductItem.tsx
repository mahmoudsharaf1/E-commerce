import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {Text} from '@components';
import {useTheme} from '@contexts/ThemeContext';
import {styles} from './styles';
import {Product} from '@/features/product/types/product';

type ProductItemProps = {
  card: Product;
  onPress: () => void;
};

export const ProductItem = ({card, onPress}: ProductItemProps) => {
  const {title, price, category, description} = card;
  const {themeColors} = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{uri: category.image}} />

      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View style={styles.detailsContainer}>
            <Text size={14} weight="700" color={themeColors.text.primary}>
              $ {''}
              {price || 0}
            </Text>
          </View>

          <Text
            numberOfLines={1}
            style={styles.text}
            size={13}
            weight="600"
            color={themeColors.text.primary}>
            {title}
          </Text>
          <Text
            numberOfLines={2}
            style={styles.text}
            size={11}
            weight="400"
            color={themeColors.text.secondary}
            >
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
