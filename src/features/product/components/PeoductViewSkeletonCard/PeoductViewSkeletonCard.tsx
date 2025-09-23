import React, {useState} from 'react';
import {LayoutChangeEvent, View} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {colors} from '@theme';
import {styles} from './styles';

export const PeoductViewSkeletonCard = () => {
  const [width, setWidth] = useState<number>(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width: _width} = event.nativeEvent.layout;
    setWidth(_width);
  };

  return (
    <View onLayout={handleLayout} style={styles.container}>
      <ContentLoader
        height={width / 50}
        foregroundColor={colors.paletteV2.white}
        backgroundColor={colors.palette.gray700}>
        <Rect x="00" y="0" rx="18" ry="18" width="50%" height="100%" />
      </ContentLoader>

      <ContentLoader
        height={width / 50}
        foregroundColor={colors.paletteV2.white}
        backgroundColor={colors.palette.gray700}>
        <Rect x="00" y="0" rx="18" ry="18" width="70%" height="100%" />
      </ContentLoader>

      <ContentLoader
        height={width / 50}
        foregroundColor={colors.paletteV2.white}
        backgroundColor={colors.palette.gray700}>
        <Rect x="00" y="0" rx="18" ry="18" width="30%" height="100%" />
      </ContentLoader>
      <ContentLoader
        height={width / 1.5}
        foregroundColor={colors.paletteV2.white}
        backgroundColor={colors.palette.gray700}>
        <Rect x="00" y="0" rx="18" ry="18" width="100%" height="100%" />
      </ContentLoader>
      <ContentLoader
        height={width / 5.5}
        foregroundColor={colors.paletteV2.white}
        backgroundColor={colors.palette.gray700}>
        <Rect x="00" y="0" rx="18" ry="18" width="100%" height="100%" />
      </ContentLoader>

      <ContentLoader
        height={width / 6.5}
        foregroundColor={colors.paletteV2.white}
        backgroundColor={colors.palette.gray700}>
        <Rect x="00" y="0" rx="18" ry="18" width="100%" height="100%" />
      </ContentLoader>
      <ContentLoader
        height={width / 50}
        foregroundColor={colors.paletteV2.white}
        backgroundColor={colors.palette.gray700}>
        <Rect x="00" y="0" rx="18" ry="18" width="90%" height="100%" />
      </ContentLoader>

      <ContentLoader
        height={width / 50}
        foregroundColor={colors.paletteV2.white}
        backgroundColor={colors.palette.gray700}>
        <Rect x="00" y="0" rx="18" ry="18" width="70%" height="100%" />
      </ContentLoader>

      <ContentLoader
        height={width / 50}
        foregroundColor={colors.paletteV2.white}
        backgroundColor={colors.palette.gray700}>
        <Rect x="00" y="0" rx="18" ry="18" width="50%" height="100%" />
      </ContentLoader>

      <ContentLoader
        height={width / 50}
        foregroundColor={colors.paletteV2.white}
        backgroundColor={colors.palette.gray700}>
        <Rect x="00" y="0" rx="18" ry="18" width="30%" height="100%" />
      </ContentLoader>
    
    </View>
  );
};
