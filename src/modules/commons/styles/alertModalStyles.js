import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    paddingHorizontal: '$spacingExtraNormal',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    borderRadius: '$spacingNormal',
    overflow: 'hidden',
    paddingHorizontal: '$spacingExtraNormal',
    paddingVertical: '$spacingLarge',
  },
  heading: {
    color: Colors.darkGreen,
    lineHeight: '$spacingLarge',
    letterSpacing: '0.2rem',
    fontSize: '$fontNormal',
    fontFamily: Fonts.semiBold,
  },
  desc: {
    color: Colors.subTitleText,
    lineHeight: '$spacingNormalMedium',
    letterSpacing: '0.2rem',
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    marginTop: '$spacingSuperSmall',
    marginBottom: '$spacingLarge',
  },
  button: {
    width: '122rem',
    height: '$spacingMediumHuge',
    borderRadius: '$spacingSmallExtreme',
  },
  buttonLabel: {
    fontSize: '$fontSuperTiny',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  twoButtons: {
    justifyContent: 'space-around',
  },
});
