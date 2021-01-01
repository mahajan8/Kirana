import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  mapView: {
    flex: 1,
    backgroundColor: 'gray',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  subTitle: {
    fontSize: '11rem',
    fontFamily: Fonts.regular,
    color: Colors.lightGray,
  },
  titleContainer: {
    marginLeft: '13rem',
  },
  needHelp: {
    fontSize: '14rem',
    color: Colors.themeGreen,
    letterSpacing: '0.1rem',
    fontFamily: Fonts.medium,
  },
});
