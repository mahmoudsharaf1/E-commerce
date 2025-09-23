import React from 'react';
import {View, Dimensions} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {styles} from './styles';
import { colors } from '@theme';

export const ProductItemSkeletonCard = () => {
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = screenWidth * 0.45;
  const cardHeight = 300;

  return (
    <View style={styles.container}>
      <ContentLoader
        speed={2}
        width={cardWidth}
        height={cardHeight}
        viewBox={`0 0 ${cardWidth} ${cardHeight}`}
        backgroundColor={colors.palette.gray700}
        foregroundColor={colors.paletteV2.white}>
        
        <Rect x="0" y="0" rx="8" ry="8" width={cardWidth} height="180" />
        <Rect x="12" y="200" rx="4" ry="4" width="60" height="16" />
        
        <Rect x="12" y="225" rx="4" ry="4" width={cardWidth - 24} height="14" />
        
        <Rect x="12" y="250" rx="4" ry="4" width={cardWidth - 30} height="12" />
        
        <Rect x="12" y="270" rx="4" ry="4" width={cardWidth - 50} height="12" />
        
      </ContentLoader>
    </View>
  );
};