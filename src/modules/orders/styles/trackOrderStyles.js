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
    width: '30rem',
    height: '30rem',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryTime: {
    fontFamily: Fonts.semiBold,
    fontSize: '14rem',
    color: Colors.darkGreen,
    textAlign: 'center',
  },
  minutes: {
    fontFamily: Fonts.medium,
    fontSize: '8rem',
    letterSpacing: '-0.2rem',
  },
  markerContainer: {
    ...(Platform.OS === 'android' && {
      // top: '50rem',
      justifyContent: 'flex-end',
    }),
    display: 'flex',
    alignItems: 'center',
    width: '150rem',
    // backgroundColor: 'red',
  },
  marker: {
    // ...(Platform.OS === 'ios' && {
    //   position: 'absolute',
    //   top: '-40rem',
    // }),
    // alignSelf: 'center',
    // alignSelf: 'flex-end',
  },
  markerLabelContainer: {
    borderRadius: '2rem',
    ...(Platform.OS === 'android'
      ? {
          position: 'absolute',
          // bottom: '-140rem',
        }
      : {
          marginTop: '5rem',
        }),
    width: '150rem',
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  markerLabel: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    paddingHorizontal: '12rem',
    paddingVertical: '6vrem',
    backgroundColor: Colors.white,
  },
});
