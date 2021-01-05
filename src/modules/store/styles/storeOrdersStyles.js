import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  tabContainer: {
    paddingTop: '10vrem',
    paddingBottom: '20vrem',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGreen,
    borderRadius: '8rem',
  },
  tabItemContainer: {
    alignItems: 'center',
    paddingHorizontal: '15rem',
    paddingVertical: '7vrem',
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: '12rem',
    letterSpacing: '0.09rem',
    color: Colors.darkGreen,
    marginTop: '4vrem',
  },
  selectedLabel: {
    color: Colors.white,
  },
  selectedTab: {
    borderRadius: '8rem',
    backgroundColor: Colors.themeGreen,
  },
});
