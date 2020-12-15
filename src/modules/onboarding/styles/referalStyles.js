import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headlineContainer: {
    backgroundColor: Colors.lightBlue,
    paddingVertical: '18vrem',
    paddingLeft: '20rem',
    paddingRight: '17rem',
  },
  headlineTitle: {
    color: '#252525',
    fontSize: '12rem',
    fontFamily: Fonts.semiBold,
    lineHeight: '17rem',
  },
  headlineSub: {
    color: '#424242',
    fontSize: '9rem',
    fontFamily: Fonts.regular,
    lineHeight: '13.5rem',
  },
  greenTick: {
    marginRight: '12rem',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '20rem',
    marginTop: '20vrem',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    width: '134rem',
    height: '36vrem',
    backgroundColor: 'transparent',
    borderRadius: '6rem',
  },
  buttonLabel: {
    fontSize: '10rem',
    letterSpacing: '0.07rem',
  },
});
