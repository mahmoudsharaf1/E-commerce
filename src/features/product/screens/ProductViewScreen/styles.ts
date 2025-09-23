import {colors, spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    rowGap: spacing.lg,
  },
  titleContainer: {
    rowGap: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    columnGap: spacing.xs,
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    columnGap: spacing.xxs,
    alignItems: 'center',
  },
  discount: {
    backgroundColor: colors.paletteV2.red + '20',
    borderRadius: 8,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xxs,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
