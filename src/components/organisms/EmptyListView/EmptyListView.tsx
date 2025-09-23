import React, {FC} from 'react';
import {View} from 'react-native';

import {Text, Button, Icon} from '@components';
import {useTheme} from '@contexts/ThemeContext';
import {styles} from './styles';

type EmptyListViewProps = {
  title: string;
  description: string;
  button?: {
    label: string;
    onPress: () => void;
  };
  testID?: string;
};

export const EmptyListView: FC<EmptyListViewProps> = props => {
  const {title, description, button, testID} = props;
  const {themeColors} = useTheme();
  return (
    <View testID={`${testID}-container`} style={styles.root}>
      <Icon name="emptyCart" size={100} color={themeColors.text.secondary} />
      <Text testID={`${testID}-title`} size={18} weight="600">
        {title}
      </Text>
      <Text
        testID={`${testID}-description`}
        size={14}
        style={styles.description}
        color={themeColors.text.secondary}>
        {description}
      </Text>
      {button && (
        <Button
          testID={`${testID}-button`}
          type='orange'
          label={button.label}
          onPress={button.onPress}
        />
      )}
    </View>
  );
};
