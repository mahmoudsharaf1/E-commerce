import React, {ReactElement} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {Text, Icon, IconTypes, TextProps} from '@components';
import {useTheme} from '@contexts/ThemeContext';
import {colors} from '@theme';
import {styles} from './styles';

export type ButtonProps = {
  key?: any;
  onPress: () => void;
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'transparent'
    | 'danger'
    | 'black'
    | 'orange';
  label?: string;
  style?: any;
  contentStyle?: any;
  loading?: boolean;
  disabled?: boolean;
  icon?: IconTypes;
  textSize?: number;
  iconSize?: number;
  lineHeight?: number;
  textWeight?: TextProps['weight'];
  children?: ReactElement;
  testID?: string;
  iconColor?: string;
};

export const Button = (props: ButtonProps) => {
  const {
    onPress,
    label,
    icon,
    type = 'primary',
    disabled = false,
    loading = false,
    textSize = 16,
    textWeight = '400',
    children,
    iconSize = 20,
    lineHeight = 25,
    testID,
    contentStyle,
    iconColor
  } = props;

  const {themeColors} = useTheme();

  const getBGColor = () => {
    switch (type) {
      case 'primary':
        return colors.paletteV2.primary;
      case 'secondary':
        return themeColors.background.card;
      // case 'tertiary':
      //   return styles.tertiaryContainer;
      // case 'quaternary':
      //   return styles.quaternaryContainer;
      case 'transparent':
        return 'transparent';
      case 'danger':
        return themeColors.background.card;
      case 'black':
        return colors.paletteV2.black;
      case 'orange':
        return colors.paletteV2.orange;
      default:
        return colors.paletteV2.primary;
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'primary':
        return colors.paletteV2.white;
      case 'secondary':
        return colors.paletteV2.black;
      // case 'tertiary':
      //   return colors.palette.primary_2;
      // case 'quaternary':
      //   return colors.palette.primary_4;
      case 'transparent':
        return colors.paletteV2.ochre;
      case 'danger':
        return colors.error;
      case 'black':
        return colors.paletteV2.white;
      case 'orange':
        return colors.paletteV2.black;
    }
  };

  return (
    <TouchableOpacity
      testID={`${testID}-TouchableOpacity`}
      style={[
        styles.mainContainer,
        disabled && styles.disabled,
        {
          backgroundColor: getBGColor(),
        },
        props.style,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator
          testID={`${testID}-ActivityIndicator`}
          color={getTextColor()}
        />
      ) : (
        <View
          testID={`${testID}-View`}
          style={[styles.mainContent, props.contentStyle]}>
          {icon && (
            <Icon
              testID={`${testID}-Icon`}
              name={icon}
              size={iconSize}
              color={iconColor ?? getTextColor()}
            />
          )}
          {label && (
            <Text
              testID={`${testID}-Text`}
              size={textSize}
              weight={textWeight}
              color={getTextColor()}
              style={[{lineHeight: lineHeight}, contentStyle]}>
              {label}
            </Text>
          )}
          {children && children}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
