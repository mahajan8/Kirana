import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    letterSpacing: '0.18rem',
    marginTop: '30vrem',
  },
  desc: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    letterSpacing: '0.2rem',
    lineHeight: '18rem',
    width: '260rem',
    textAlign: 'center',
    marginTop: '7vrem',
  },
  backIcon: {
    position: 'absolute',
    left: '20rem',
    top: '20vrem',
  },
});
