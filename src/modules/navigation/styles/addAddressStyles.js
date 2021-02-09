import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  scrollContainer: {
    paddingBottom: '$spacingExtraNormal',
    flexGrow: 1,
  },
  mapView: {
    height: '170vrem',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  saveAddressText: {
    fontSize: '$fontTiny',
    color: Colors.lightGray,
  },
  saveAddressContainer: {
    marginLeft: '$spacingExtraNormal',
    marginTop: '$spacingLarge',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '$spacingSmall',
    marginBottom: '$spacingExtraHuge',
  },
  buttonStyle: {
    width: '70rem',
    height: '$spacingMediumHuge',
    borderRadius: '$spacingSmall',
    marginRight: '$spacingSuperSmall',
  },
  buttonLabel: {
    fontSize: '$fontTiny',
  },
  unSelectedLabel: {
    color: Colors.darkGray,
  },
  selectedButton: {
    borderColor: Colors.themeGreen,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationTitle: {
    fontSize: '$fontNormal',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    width: '200rem',
    marginLeft: '$spacingSmallExtreme',
  },
  locationSub: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.titleText,
    width: '250rem',
  },
  locationContainer: {
    paddingHorizontal: '$spacingExtraNormal',
    marginTop: '$spacingVeryLarge',
  },
  changeButton: {
    width: '65rem',
    height: '$spacingVeryLarge',
    borderRadius: '$spacingSmallExtreme',
    backgroundColor: Colors.lightGreen,
  },
  changeButtonLabel: {
    fontSize: '$spacingSuperSmall',
    color: Colors.themeGreen,
  },
});
