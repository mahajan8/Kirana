import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: '$spacingExtraLarge',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  tabItemContainer: {
    alignItems: 'center',
    paddingVertical: '$spacingSuperSmall',
    paddingHorizontal: '$spacingNormal',
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: '$fontTiny',
    letterSpacing: '0.2rem',
    color: Colors.lightGray,
    marginTop: '$spacingTiny',
  },
  selectedLabel: {
    color: Colors.themeGreen,
  },
});
