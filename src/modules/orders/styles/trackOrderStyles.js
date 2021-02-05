import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  title: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  subTitle: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.lightGray,
    width: '200rem',
  },
  titleContainer: {
    marginLeft: '$spacingExtraMedium',
  },
  needHelp: {
    fontSize: '$fontSmall',
    color: Colors.themeGreen,
    letterSpacing: '0.1rem',
    fontFamily: Fonts.medium,
  },
});
