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
  deliveryTime: {
    fontFamily: Fonts.semiBold,
    fontSize: '$fontTiny',
    color: Colors.darkGreen,
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
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
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    paddingHorizontal: '$spacingMedium',
    paddingVertical: '$spacingSmallExtreme',
    backgroundColor: Colors.white,
  },
  markerContainer: {
    height: '$spacingTitan',
    width: '$spacingTitan',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  driverMarker: {
    alignItems: 'center',
    ...(Platform.OS === 'ios' && {
      top: '-50%',
    }),
  },
  markerIcon: {
    position: 'absolute',
    alignSelf: 'center',
    top: '$spacingSmall',
  },
});
