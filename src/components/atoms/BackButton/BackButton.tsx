import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Icon} from '@components';
import {useTheme} from '@contexts/ThemeContext';
import {styles} from './styles';


export const BackButton = ({onPress}: {onPress: () => void}) => {
  const {themeColors} = useTheme();

  return (
    <TouchableOpacity testID={'BackButton'} hitSlop={24} onPress={onPress}>
      <Icon
        testID={'BackButton-Icon'}
        name={'arrowLeftLine'}
        style={styles.icon}
        color={themeColors.text.primary}
      />
    </TouchableOpacity>
  );
};
