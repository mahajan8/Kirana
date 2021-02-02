import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  modalContainer: {
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    overflow: 'hidden',
    width: '320rem',
    borderRadius: '$spacingExtraNormal',
  },
  imageContainer: {
    height: '208vrem',
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
    paddingTop: '50vrem',
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  referHeadline: {
    color: Colors.titleText,
    fontFamily: Fonts.semiBold,
    fontSize: '$fontNormal',
    textAlign: 'center',
    width: '196rem',
  },
  referSub: {
    color: Colors.darkGray,
    fontFamily: Fonts.regular,
    fontSize: '$fontTiny',
    lineHeight: '$fontExtraNormal',
    letterSpacing: '0.2rem',
    textAlign: 'center',
    width: '258rem',
    marginBottom: '$spacingExtraLarge',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '$spacingExtraNormal',
    marginBottom: '$spacingExtraLarge',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    width: '134rem',
    height: '$spacingMediumHuge',
  },
  buttonLabel: {
    fontSize: '$fontSuperTiny',
    letterSpacing: '0.07rem',
  },
  gotReferal: {
    fontSize: '$spacingExtraMedium',
    lineHeight: '$spacingNormalMedium',
    color: Colors.themeGreen,
    fontFamily: Fonts.medium,
    marginBottom: '$spacingExtraLarge',
  },
});
