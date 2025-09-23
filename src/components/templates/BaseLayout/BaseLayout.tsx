import React, {ReactNode, useMemo} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  View,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {useTheme} from '@contexts/ThemeContext';
import {spacing} from '@theme';
import {styles} from './styles';

type BaseLayoutProps = {
  children: ReactNode | ReactNode[];
  background?: ImageSourcePropType;
  safeAreaView?: boolean;
  scroll?: boolean;
  padding?: boolean;
  paddingVertical?: boolean;
  paddingHorizontal?: boolean;
  transparent?: boolean;
  testID?: string;
  bodyStyle?: any;
};

export const BaseLayout = (props: BaseLayoutProps) => {
  const {
    testID,
    children,
    background,
    safeAreaView = false,
    scroll = false,
    padding = true,
    paddingVertical = true,
    paddingHorizontal = true,
    transparent = false,
    bodyStyle,
  } = props;
  const {themeColors} = useTheme();

  const SafeAreaViewContainer = useMemo(
    () => (safeAreaView ? SafeAreaView : View),
    [safeAreaView],
  );

  const ScrollContainer = useMemo(() => (scroll ? ScrollView : View), [scroll]);

  const BackgroundContainer = useMemo(
    () => (background ? ImageBackground : View) as React.ComponentType<any>,
    [background],
  );

  const paddingLogic = {
    paddingHorizontal:
      padding && paddingHorizontal ? spacing.screenHorizontal : 0,
    paddingVertical: padding && paddingVertical ? spacing.lg : 0,
    paddingBottom:
      padding && paddingVertical
        ? !safeAreaView
          ? spacing.lg * 2
          : spacing.lg
        : 0,
  };

  return (
    <View
      testID={`${testID}-container`}
      style={[
        {flex: 1},
        {
          backgroundColor: transparent
            ? 'transparent'
            : themeColors.background.primary,
        },
      ]}>
      <BackgroundContainer
        testID={`${testID}-background`}
        source={background}
        style={{paddingTop: 0, flex: 1}}>
        <SafeAreaViewContainer style={[styles.body, bodyStyle]}>
          <View style={{flex: 1, rowGap: 24}}>
            <ScrollContainer
              style={[
                !scroll && {flex: 1, overflow: 'hidden', ...paddingLogic},
              ]}
              bounces={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[
                styles.contentContainer,
                paddingLogic,
              ]}
              scrollEventThrottle={16}>
              {!Array.isArray(children)
                ? children
                : children.length > 0 && children[0]}
            </ScrollContainer>
            {Array.isArray(children) && children.length > 1 && (
              <View
                style={{
                  paddingHorizontal: 24,
                  paddingBottom: 24,
                }}>
                {children[1]}
              </View>
            )}
          </View>
        </SafeAreaViewContainer>
      </BackgroundContainer>
    </View>
  );
};
