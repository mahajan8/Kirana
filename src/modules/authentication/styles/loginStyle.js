import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  termsText: {
    paddingTop: '16vrem',
    fontSize: '10rem',
    lineHeight: '18rem',
    textAlign: 'center',
    fontFamily: Fonts.regular,
    color: Colors.greyBrown,
    paddingBottom: '30rem',
  },
  coloredText: {
    color: Colors.themeGreen,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '22rem',
  },
  codeSubContainer: {
    paddingEnd: '15rem',
    alignItems: 'center',
  },
  codeLabel: {
    fontFamily: Fonts.regular,
    fontSize: 10,
    lineHeight: '12rem',
    letterSpacing: '0.08rem',
    color: Colors.lightGray,
    paddingBottom: '1rem',
  },
  codeValue: {
    fontFamily: Fonts.medium,
    fontSize: '19rem',
    color: Colors.black,
  },
});
