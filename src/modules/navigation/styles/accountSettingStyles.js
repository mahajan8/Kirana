import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    backgroundColor: Colors.lightBlue,
    justifyContent: 'space-between',
    paddingLeft: '$spacingExtraNormal',
    paddingRight: '$spacingNormal',
    paddingVertical: '$spacingSmallExtreme',
    marginBottom: '$spacingLessHuge',
  },
  headlineText: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.darkGreen,
  },
  changeButton: {
    width: '$spacingColossal',
    height: '$spacingLessHuge',
    borderRadius: '$spacingSmallExtreme',
    backgroundColor: Colors.lightGreen,
  },
  changeButtonLabel: {
    fontSize: '$fontSuperTiny',
    color: Colors.themeGreen,
  },
  container: {
    paddingTop: '$spacingExtraNormal',
    paddingHorizontal: '$spacingExtraNormal',
  },
  numberContainer: {
    borderWidth: 1,
    borderRadius: '$spacingSmallExtreme',
    borderColor: Colors.borderGray,
    paddingVertical: '$spacingSmall',
    paddingLeft: '$spacingNormal',
    paddingRight: '$spacingSuperSmall',
    justifyContent: 'space-between',
  },
  numberLabel: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    lineHeight: '$spacingNormal',
    letterSpacing: '0.09rem',
    color: Colors.themeGreen,
  },
  number: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  currentNumberRow: {
    justifyContent: 'space-between',
  },
  seperator: {
    height: '1rem',
    backgroundColor: '#cacaca',
    marginVertical: '$spacingNormal',
  },
  currentNumberLabel: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    lineHeight: '$spacingExtraNormal',
  },
  currentNumber: {
    fontSize: '$fontExtraNormal',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    lineHeight: '$spacingExtraNormal',
  },
  heading: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: '#424242',
    lineHeight: '$spacingExtraNormal',
    marginBottom: '$spacingExtraNormal',
  },
  input: {
    marginTop: '$spacingSmallExtreme',
    width: '100%',
  },
  resendText: {
    marginTop: '$spacingExtraNormal',
    fontSize: '$fontTiny',
    letterSpacing: '0.2rem',
    textAlign: 'center',
  },
  coloredText: {
    color: Colors.themeGreen,
    fontFamily: Fonts.medium,
  },
  errorMessage: {
    fontSize: '$fontTiny',
    color: '#ea4e3c',
    letterSpacing: '0.22rem',
    fontFamily: Fonts.regular,
    marginLeft: '$spacingSmallExtreme',
  },
});
