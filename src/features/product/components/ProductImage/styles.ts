import {StyleSheet} from 'react-native';
import {colors, spacing} from '@theme';

export const styles = StyleSheet.create({
  container: {},
  imageWrapper: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
  },
  mainImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
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
  thumbnailList: {
    marginTop: 12,
    flexDirection: 'row',
  },
  thumbnailWrapper: {
    width: 80,
    height: 70,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 8,
    position: 'relative',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  selectedThumbnail: {
    borderWidth: 2,
    borderColor: colors.paletteV2.orange,
  },
  extraOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.paletteV2.black + '80',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 0,
    backgroundColor: colors.paletteV2.white,
  },
  gallery: {
    flex: 1,
  }
});
