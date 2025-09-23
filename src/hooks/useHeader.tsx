import React, {useCallback, useEffect, useLayoutEffect, useMemo} from 'react';
import {BackHandler, TouchableOpacity, View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BackButton, HeaderProps, Text} from '@components';
import {useTheme} from '@contexts/ThemeContext';
import {colors, spacing} from '@theme';

const HEADER_TOP_MARGIN = 10;

export function useHeader(
  headerProps: HeaderProps,
  _deps: Parameters<typeof useLayoutEffect>[1] = [],
) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const {themeColors} = useTheme();
  const insets = useSafeAreaInsets();
  const headerHeight = useMemo(() => insets.top + 60, [insets.top]);

  const {
    isTransparent = false,
    hasCancel = false,
    hasBack = true,
    onCancel,
    onEdit,
  } = headerProps;

  const handlePress = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);

  useEffect(() => {
    // Customize the Android back button pressed ONLY when onBack has been declared
    const backAction = () => {
      headerProps?.onBack && headerProps.onBack();
      // return true if the back button is customized
      return !!headerProps?.onBack;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerProps?.onBack]);

  const {
    title,
    subTitle,
    onBack,
    isTab,
    backgroundColor = isTransparent
      ? 'transparent'
      : themeColors.background.primary,
    LeftActionComponent = hasBack ? (
      <BackButton onPress={onBack ? onBack : handlePress} />
    ) : (
      <></>
    ),
    RightActionComponent = hasCancel ? (
      <TouchableOpacity hitSlop={40} onPress={onCancel || handlePress}>
        <Text color={colors.paletteV2.primary}>Cancel</Text>
      </TouchableOpacity>
    ) : (
      onEdit && (
        <TouchableOpacity hitSlop={40} onPress={onEdit}>
          <Text weight="600" color={colors.paletteV2.primary}>
            Edit
          </Text>
        </TouchableOpacity>
      )
    ),
  } = headerProps;

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerStyle: {
          backgroundColor: themeColors.background.primary,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          height: headerHeight,
          borderBottomColor: themeColors.text.primary,
        },
        headerLeftContainerStyle: {
          marginStart: spacing.lg,
          marginVertical: HEADER_TOP_MARGIN,
        },
        headerRightContainerStyle: {
          marginEnd: spacing.lg,
          marginVertical: HEADER_TOP_MARGIN,
        },
        headerTransparent: isTransparent,
        headerTitle: () => (
          <View style={{paddingBottom: HEADER_TOP_MARGIN}}>
            <Text
              style={{
                marginTop: HEADER_TOP_MARGIN,
                textAlign: 'center',
              }}
              size={isTab ? 10 : 20}
              weight={'400'}
              >
              {title}
            </Text>
            {subTitle && (
              <Text
                style={{
                  textAlign: 'center',
                }}
                weight={isTab ? '600' : '400'}
                size={16}>
                {subTitle}
              </Text>
            )}
          </View>
        ),
        headerTitleAlign: 'center',
        headerLeft: () => LeftActionComponent,
        headerRight: () => RightActionComponent,
      });
    }, [
      LeftActionComponent,
      RightActionComponent,
      backgroundColor,
      headerHeight,
      isTransparent,
      navigation,
      themeColors.background.primary,
      title,
    ]),
  );
}
