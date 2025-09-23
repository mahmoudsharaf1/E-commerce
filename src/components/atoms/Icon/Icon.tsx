import * as React from 'react';
import {ComponentType} from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {iconRegistry} from '@theme/icons';

export type IconTypes = keyof typeof iconRegistry;

export interface BaseIconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  name: IconTypes;

  /**
   * An optional tint color for the icon
   */
  color?: string;

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number;

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps['onPress'];

  /**
   * An optional parameter for testID automation
   */
  testID?: string;
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: BaseIconProps) {
  const {
    name,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    testID,
    ...WrapperProps
  } = props;

  const isPressable = !!WrapperProps.onPress;
  const Wrapper = (
    WrapperProps?.onPress ? TouchableOpacity : View
  ) as ComponentType<TouchableOpacityProps | ViewProps>;

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    color !== undefined && {tintColor: color},
    size !== undefined && {width: size, height: size},
    $imageStyleOverride,
  ];

  return (
    <Wrapper
      testID={`${testID}-Wrapper`}
      accessibilityRole={isPressable ? 'imagebutton' : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}>
      <Image
        testID={`${testID}-Image`}
        style={$imageStyle}
        source={iconRegistry[name]}
      />
    </Wrapper>
  );
}

const $imageStyleBase: ImageStyle = {
  resizeMode: 'contain',
};
