import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  tabSpacing: {
    marginLeft: '80rem',
  },
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: '25rem',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  tabItemContainer: {
    alignItems: 'center',
    paddingVertical: '10vrem',
    paddingHorizontal: '15rem',
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    color: Colors.lightGray,
    marginTop: '4vrem',
  },
  selectedLabel: {
    color: Colors.themeGreen,
  },
});
