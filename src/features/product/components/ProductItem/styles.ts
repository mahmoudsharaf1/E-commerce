import {StyleSheet} from 'react-native';
import {spacing, colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.palette.gray700,
    flexGrow: 1,
    rowGap: spacing.md,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: spacing.sm,
  },
  content: {
    flex: 1,
    rowGap: spacing.xxs,
    paddingHorizontal: spacing.sm,
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {lineHeight: 25},
  badge: {
    position: 'absolute',
    top: spacing.sm,
    left: spacing.sm,
    backgroundColor: colors.paletteV2.blueGrey,
    borderRadius: 8,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xxs,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discount: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.paletteV2.red + '20',
    borderRadius: 8,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xxs,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
