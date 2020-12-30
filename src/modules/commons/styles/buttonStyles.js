import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  button: {
    borderRadius: '10rem',
    height: '50vrem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.themeGreen,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
  },
  disabledButton: {
    backgroundColor: Colors.seperatorColor,
  },
  bordered: {
    borderColor: Colors.borderGray,
    borderWidth: '1rem',
    backgroundColor: Colors.white,
  },
});