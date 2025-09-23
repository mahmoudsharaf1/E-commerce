import {colors} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.paletteV2.white,
  },
  container: {
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
  },
  tabContainer: {
    flex: 1,
    backgroundColor: colors.paletteV2.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.palette.gray600,
    height: 40,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {},
  tabInactive: {
    //
  },
  activeView: {
    //
  },
  inActiveView: {
    display: 'none',
  },
});
