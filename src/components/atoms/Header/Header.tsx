import React, {ReactNode, useEffect} from 'react';
import {
  View,
  TouchableOpacityProps,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Text, BackButton} from '@components';
import {useTheme} from '@contexts/ThemeContext';
import {styles} from './styles';
import {colors} from '@theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface HeaderProps {
  title?: string;
  subTitle?: string;
  isTab?: boolean;
  isTransparent?: boolean;
  backgroundColor?: string;
  LeftActionComponent?: any;
  RightActionComponent?: ReactNode;
  hasCancel?: boolean;
  hasBack?: boolean;
  onBack?: () => void;
  onEdit?: () => void;
  onCancel?: TouchableOpacityProps['onPress'];
}

export function Header(props: HeaderProps) {
  const {
    isTransparent = false,
    hasCancel = false,
    hasBack = true,
    onCancel,
    onEdit,
  } = props;
  const navigation = useNavigation();
  const {themeColors} = useTheme();

  const handlePress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  useEffect(() => {
    //Customize the Android back button pressed ONLY when onBack has been declared
    const backAction = () => {
      props?.onBack && props.onBack();
      //return true if the back button is customized
      return !!props?.onBack;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [props?.onBack]);

  const {
    title,
    onBack,
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
  } = props;

  return (
    <SafeAreaView style={[{backgroundColor}]}>
      <View style={styles.container}>
        <View style={styles.leftAction}>
          {LeftActionComponent && LeftActionComponent}
        </View>

        <View style={styles.title}>
          {!!title && (
            <Text size={16} weight="500" style={styles.titleText}>
              {title}
            </Text>
          )}
        </View>

        <View style={styles.rightAction}>
          {RightActionComponent && RightActionComponent}
        </View>
      </View>
    </SafeAreaView>
  );
}
