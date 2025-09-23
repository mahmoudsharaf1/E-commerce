import {StyleSheet} from 'react-native';
import {colors, spacing} from '@theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: spacing.sm,
    backgroundColor: colors.paletteV2.black,
  },
  leftAction: {},
  title: {
    flex: 1,
  },
  titleText: {
    textAlign: 'center',
    color: colors.paletteV2.black,
  },
  rightAction: {},
});
