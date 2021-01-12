import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingVertical: '4vrem',
    paddingHorizontal: '10rem',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '50rem',
    backgroundColor: Colors.themeGreen,
  },
  count: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.white,
    marginLeft: '5rem',
  },
});
