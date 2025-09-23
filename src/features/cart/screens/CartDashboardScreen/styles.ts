import { colors, spacing } from '@theme';
import {StyleSheet,Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export const styles = StyleSheet.create({
     container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    rowGap: spacing.md,
    paddingBottom: spacing.xxxxxl,
  },
  divider: {
    marginVertical: spacing.sm,
  },
   totalContainer: {
      shadowColor: colors.paletteV2.gray,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 7.49,
      elevation: 3,
      width: SCREEN_WIDTH,
      padding: spacing.xxl,
      paddingTop: spacing.md,
      bottom: 0,
      position: 'absolute',
      flexDirection: 'row',
      columnGap: spacing.md,
      justifyContent: 'center',
    },
});