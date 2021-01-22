import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: Colors.white,
  },
  noInternetTitle: {
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    fontSize: '14rem',
    letterSpacing: '0.18rem',
    marginTop: '40vrem',
  },
  noInternetSub: {
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    lineHeight: '18rem',
    marginTop: '7vrem',
    marginBottom: '22vrem',
  },
  buttonStyle: {
    height: '36vrem',
    width: '92rem',
  },
  buttonLabel: {
    fontSize: '12rem',
    letterSpacing: '0.09rem',
  },
});
