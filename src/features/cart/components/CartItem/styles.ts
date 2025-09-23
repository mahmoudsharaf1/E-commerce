import {StyleSheet, Dimensions} from 'react-native';
import {colors, spacing} from '@theme';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    borderRadius: 8,
    paddingHorizontal: spacing.xxs,
    height: 35,
    borderWidth: 1,
    borderColor: colors.palette.gray600,
  },
  button: {
    width: SCREEN_WIDTH / 2,
  },
  count: {
    fontSize: spacing.md,
  },
  countButton: {
    width: 40,
    color: colors.paletteV2.white,
  },
  cartItem: {
    borderWidth: 1,
    borderColor: colors.palette.gray600,
    backgroundColor: colors.paletteV2.white,
    borderRadius: 8,
    padding: spacing.md,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: spacing.xs,
  },
  itemDetailsContainer: {
    flex: 1,
    rowGap: spacing.xs,
  },
  specialOfferContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.paletteV2.primary,
    width: 105,
    height: 23,
    paddingHorizontal: 3,
    borderRadius: 5,
  },
  specialOfferButton: {
    height: 23,
    width: 110,
    borderRadius: 5,
  },
  specialOfferText: {
    fontSize: 12,
  },
  qtyInput: {
    minWidth: 90,
    marginEnd: 8,
  },
  image: {
    width: 60,
    height: 70,
    borderRadius: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  editButton: {
    borderRightWidth: 1,
    borderRadius: 0,
    height: 30,
    borderColor: colors.palette.gray600,
  },
});
export default styles;
