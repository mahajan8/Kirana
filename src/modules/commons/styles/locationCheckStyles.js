import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: '20rem',
    paddingBottom: '30vrem',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderRadius: '15rem',
    paddingVertical: '20vrem',
    paddingHorizontal: '30rem',
  },
  title: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.darkGreen,
    marginLeft: '10rem',
  },
  subText: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.subTitleText,
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    marginBottom: '20vrem',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    width: '122rem',
    height: '36vrem',
    borderRadius: '6rem',
  },
  buttonLabel: {
    fontSize: '10rem',
    letterSpacing: '0.07rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10vrem',
  },
});
