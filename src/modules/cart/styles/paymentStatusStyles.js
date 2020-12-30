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
    marginTop: '20vrem',
    color: Colors.title,
  },
  subTitle: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    marginTop: '20vrem',
    color: Colors.subTitleText,
    width: '200rem',
    textAlign: 'center',
  },
});
