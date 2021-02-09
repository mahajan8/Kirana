import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    marginTop: '$spacingLessHuge',
    color: Colors.title,
    letterSpacing: '0.18rem',
  },
  subTitle: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    lineHeight: '$spacingNormalMedium',
    letterSpacing: '0.2rem',
    marginTop: '$spacingSmall',
    color: Colors.darkGray,
    width: '260rem',
    textAlign: 'center',
  },
});
