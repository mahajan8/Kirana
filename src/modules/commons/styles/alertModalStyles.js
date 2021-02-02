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
    borderRadius: '15rem',
    overflow: 'hidden',
    paddingHorizontal: '$spacingExtraNormal',
    paddingVertical: '$spacingLarge',
  },
  heading: {
    color: Colors.darkGreen,
    lineHeight: '$spacingLarge',
    letterSpacing: '0.2rem',
    fontSize: '16rem',
    fontFamily: Fonts.semiBold,
  },
  desc: {
    color: Colors.subTitleText,
    lineHeight: '$spacingNormalMedium',
    letterSpacing: '0.2rem',
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    marginTop: '$spacingSuperSmall',
    marginBottom: '$spacingLarge',
  },
  button: {
    width: '122rem',
    height: '36vrem',
    borderRadius: '6rem',
  },
  buttonLabel: {
    fontSize: '10rem',
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
