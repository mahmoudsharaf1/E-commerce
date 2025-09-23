import React, {useState} from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';

import {styles} from './styles';
import {Text} from '@components';
import {colors} from '@theme';
import {getProductTag} from '@/features/product/utils/product';

type ProductImageProps = {
  images: string[];
  tag: string;
};

export const ProductImage = ({images, tag}: ProductImageProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const displayedThumbnails = images?.slice(0, 4);
  const extraCount = images?.length - 4;
  const productTag = getProductTag(tag);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: images?.[selectedIndex]}}
          style={styles.mainImage}
        />
        {!!productTag.text && (
          <View
            style={[
              styles.badge,
              {backgroundColor: productTag.backgroundColor},
            ]}>
            <Text weight="500" size={12} color={productTag.textColor}>
              {productTag.text}
            </Text>
          </View>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.thumbnailList}>
        {displayedThumbnails?.map((img, index) => {
          const isSelected = index === selectedIndex;
          const showExtra = index === 3 && extraCount > 0;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedIndex(index)}>
              <View
                style={[
                  styles.thumbnailWrapper,
                  isSelected && styles.selectedThumbnail,
                ]}>
                <Image source={{uri: img}} style={styles.thumbnailImage} />
                {showExtra && (
                  <View style={styles.extraOverlay}>
                    <Text
                      size={16}
                      color={colors.paletteV2.white}
                      weight="600">{`+${extraCount}`}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
