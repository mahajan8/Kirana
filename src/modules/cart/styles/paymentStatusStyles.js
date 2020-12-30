import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    marginTop: '30vrem',
    color: Colors.title,
    letterSpacing: '0.18rem',
  },
  subTitle: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    lineHeight: '18rem',
    letterSpacing: '0.2rem',
    marginTop: '8vrem',
    color: Colors.darkGray,
    width: '260rem',
    textAlign: 'center',
  },
});
