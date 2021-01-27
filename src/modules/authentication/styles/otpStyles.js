import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  resendText: {
    marginVertical: '$spacingExtraNormal',
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    textAlign: 'center',
    fontFamily: Fonts.medium,
  },
  coloredText: {
    color: Colors.themeGreen,
  },
  errorMessage: {
    fontSize: '11rem',
    color: '#ea4e3c',
    letterSpacing: '0.22rem',
    fontFamily: Fonts.regular,
    marginLeft: '$spacingSmall',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '$spacingSmall',
    paddingLeft: '$spacingExtraNormal',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
