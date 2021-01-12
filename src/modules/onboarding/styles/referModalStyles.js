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
    borderRadius: '21rem',
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
    fontSize: '16rem',
    textAlign: 'center',
    width: '196rem',
  },
  referSub: {
    color: Colors.darkGray,
    fontFamily: Fonts.regular,
    fontSize: '12rem',
    lineHeight: '18rem',
    letterSpacing: '0.2rem',
    textAlign: 'center',
    width: '258rem',
    marginBottom: '25vrem',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '20rem',
    marginBottom: '25vrem',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    width: '134rem',
    height: '36vrem',
  },
  buttonLabel: {
    fontSize: '10rem',
    letterSpacing: '0.07rem',
  },
  gotReferal: {
    fontSize: '13rem',
    lineHeight: '18rem',
    color: Colors.themeGreen,
    fontFamily: Fonts.medium,
    marginBottom: '25vrem',
  },
});
