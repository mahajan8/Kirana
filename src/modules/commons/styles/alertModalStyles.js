import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    paddingHorizontal: '20rem',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    borderRadius: '15rem',
    overflow: 'hidden',
    paddingHorizontal: '20rem',
    paddingVertical: '25vrem',
  },
  heading: {
    color: Colors.darkGreen,
    lineHeight: '24rem',
    letterSpacing: '0.2rem',
    fontSize: '16rem',
    fontFamily: Fonts.semiBold,
  },
  desc: {
    color: Colors.subTitleText,
    lineHeight: '19rem',
    letterSpacing: '0.2rem',
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    marginTop: '10rem',
    marginBottom: '25rem',
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
