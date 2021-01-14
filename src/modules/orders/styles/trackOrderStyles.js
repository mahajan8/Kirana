import {Platform} from 'react-native';
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
  deliveryTimeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryTime: {
    fontFamily: Fonts.semiBold,
    fontSize: '12rem',
    color: Colors.darkGreen,
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },
  minutes: {
    fontFamily: Fonts.medium,
    fontSize: '8rem',
    letterSpacing: '-0.2rem',
  },
  markerLabelContainer: {
    borderRadius: '2rem',
  },
  markerLabel: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    paddingHorizontal: '12rem',
    paddingVertical: '6vrem',
    backgroundColor: Colors.white,
  },
  markerContainer: {
    height: '100rem',
    width: '100rem',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});
