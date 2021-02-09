import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  mapView: {
    height: '80%',
    backgroundColor: 'gray',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  deliveryTime: {
    fontFamily: Fonts.semiBold,
    fontSize: '$fontTiny',
    color: Colors.darkGreen,
    textAlign: 'center',
    // position: 'absolute',
    // alignSelf: 'center',
    // top: '$spacingSmall',
  },
  minutes: {
    fontFamily: Fonts.medium,
    fontSize: '$fontTinyExtreme',
    letterSpacing: '-0.2rem',
  },
  markerLabelContainer: {
    borderRadius: '$spacingTinyExtreme',
  },
  markerLabel: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.bold,
    color: Colors.titleText,
    paddingHorizontal: '$spacingMedium',
    // paddingVertical: '$spacingSmallExtreme',
    // backgroundColor: Colors.white,
  },
  markerContainer: {
    height: '$spacingTitan',
    width: '$spacingTitan',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  driverMarker: {
    // alignItems: 'center',
    // ...(Platform.OS === 'android' && {
    //   top: '-50%',
    // }),
    // position: 'absolute',
    // left: 20,
    // marginTop: 20
    // backgroundColor: 'red'
  },
  markerIcon: {
    // position: 'absolute',
    // alignSelf: 'center',
    // top: '$spacingSmall',
  },
  markerInnerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    height: '$spacingLessHuge',
    width: '$spacingLessHuge',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
