import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    left: 24,
    right: 24,
    zIndex: 100,
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 8,
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0, // Horizontal offset
      height: 3.95, // Vertical offset
    },
    shadowOpacity: 0.25, // Opacity derived from #00000040
    shadowRadius: 41.5 / 2, // Blur radius (approximately half of the CSS blur radius)
    elevation: 8, // Elevation for Android (approximation of shadow depth)
  },
  text: {
    flex: 1,
    lineHeight: 30,
  },
});
