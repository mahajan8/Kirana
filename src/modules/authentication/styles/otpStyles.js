import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  resendText: {
    marginVertical: '20vrem',
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
    marginLeft: '7rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8vrem',
    paddingLeft: '20rem',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
