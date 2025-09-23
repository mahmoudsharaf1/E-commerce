import {StyleSheet} from 'react-native';
import {spacing} from '@theme';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
    borderRadius: 8,
    borderWidth: 0,
  },
  mainContent: {
    //flex: 1,
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: spacing.sm,
  },
  disabled: {
    opacity: 0.5,
  },
});
