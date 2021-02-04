import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    letterSpacing: '0.18rem',
    marginTop: '$spacingLessHuge',
  },
  desc: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    letterSpacing: '0.2rem',
    lineHeight: '$spacingNormalMedium',
    width: '260rem',
    textAlign: 'center',
    marginTop: '$spacingSmall',
  },
  backIcon: {
    position: 'absolute',
    left: '$spacingExtraNormal',
    top: '$spacingExtraNormal',
  },
  buttonStyle: {
    marginBottom: '$spacingExtraNormal',
  },
});
