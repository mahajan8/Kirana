import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

export const styles = EStyleSheet.create({
  termsText: {
    marginTop: '16vrem',
    fontSize: '10rem',
    lineHeight: '18rem',
    textAlign: 'center',
  },
  coloredText: {
    color: Colors.themeGreen,
  },
});
