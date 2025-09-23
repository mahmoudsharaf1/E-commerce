import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {colors} from '@theme';

type DividerProps = {
  style?: any;
  testID?: string;
};

export const Divider = (props: DividerProps): React.ReactElement => {
  return (
    <View
      testID={props.testID}
      style={[
        styles.divider,
        {borderColor: colors.palette.gray700},
        props.style,
      ]}
    />
  );
};
