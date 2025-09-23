import {StyleSheet, Dimensions} from 'react-native';
import {colors, spacing} from '@theme';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.paletteV2.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7.49,
    elevation: 3,
    width: SCREEN_WIDTH,
    padding: spacing.xl,
    paddingTop: spacing.md,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    columnGap: spacing.md,
    justifyContent: 'center',
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SCREEN_WIDTH / 2.9,
    backgroundColor: colors.paletteV2.orange00,
    borderRadius:8,
    paddingHorizontal:spacing.xxs
  },
  button: {
    width: SCREEN_WIDTH / 2,
  },
  count: {
    fontSize: spacing.md,
  },
  countButton: {
    width: 40,
  },
});
export default styles;
