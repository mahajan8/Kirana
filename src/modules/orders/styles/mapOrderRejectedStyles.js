import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  modalContainer: {
    paddingHorizontal: '20rem',
    borderRadius: '21rem',
  },
  container: {
    borderRadius: '21rem',
    overflow: 'hidden',
  },
  imageContainer: {
    paddingHorizontal: '20rem',
    paddingVertical: '20vrem',
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: '30rem',
    alignItems: 'center',
    paddingBottom: '20vrem',
    paddingTop: '27vrem',
    backgroundColor: Colors.white,
  },
  heading: {
    fontSize: '16rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  desc: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    lineHeight: '18rem',
    textAlign: 'center',
    letterSpacing: '0.2rem',
    color: Colors.darkGray,
    width: '258rem',
    marginTop: '16rem',
  },
  buttonStyle: {
    marginTop: '24rem',
    width: '230rem',
    borderRadius: '6rem',
    height: '36vrem',
  },
  buttonLabel: {
    fontSize: '12rem',
    lineHeight: '18rem',
    letterSpacing: '0.09rem',
  },
  crossIcon: {
    alignSelf: 'flex-end',
  },
});
