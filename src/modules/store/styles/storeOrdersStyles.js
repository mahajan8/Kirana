import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  tabContainer: {
    paddingTop: '$spacingSuperSmall',
    paddingBottom: '$spacingExtraNormal',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGreen,
    borderRadius: '$spacingSmall',
  },
  tabItemContainer: {
    alignItems: 'center',
    paddingHorizontal: '$spacingNormal',
    paddingVertical: '$spacingSmall',
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: '$fontTiny',
    letterSpacing: '0.09rem',
    color: Colors.darkGreen,
  },
  selectedLabel: {
    color: Colors.white,
  },
  selectedTab: {
    borderRadius: '$spacingSmall',
    backgroundColor: Colors.themeGreen,
  },
});
