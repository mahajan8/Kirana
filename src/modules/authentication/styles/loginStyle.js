import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  termsText: {
    fontSize: '$fontSuperTiny',
    lineHeight: '$spacingNormalMedium',
    textAlign: 'center',
    fontFamily: Fonts.regular,
    color: Colors.greyBrown,
    paddingBottom: '$spacingExtraNormal',
  },
  coloredText: {
    color: Colors.themeGreen,
  },
  bottomTextContainer: {
    paddingTop: '$spacingNormal',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '$spacingSuperNormal',
  },
  codeSubContainer: {
    paddingEnd: '$spacingNormal',
    alignItems: 'center',
  },
  codeLabel: {
    fontFamily: Fonts.regular,
    fontSize: 10,
    lineHeight: '$spacingMedium',
    letterSpacing: '0.08rem',
    color: Colors.lightGray,
    paddingBottom: '$spacingTinyExtreme',
  },
  codeValue: {
    fontFamily: Fonts.medium,
    fontSize: '$fontExtraNormal',
    color: Colors.black,
  },
  numberInputContainer: {
    marginTop: 0,
  },
  bottomButton: {
    paddingBottom: 0,
  },
});
