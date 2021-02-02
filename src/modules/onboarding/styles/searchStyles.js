import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  currentLocationContainer: {
    paddingHorizontal: '$spacingExtraNormal',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '$spacingExtraNormal',
    marginTop: '$spacingSmall',
  },
  currentLocationModal: {
    paddingVertical: '$spacingExtraMedium',
    marginTop: 0,
  },
  locationIcon: {
    marginRight: '$spacingMedium',
  },
  currentLocation: {
    color: Colors.themeGreen,
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
  },
  subText: {
    color: Colors.themeGreen,
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
  },
  searchContainer: {
    backgroundColor: '#FFF',
    borderRadius: '$spacingSmall',
    paddingHorizontal: '$spacingExtraNormal',
    flex: 0,
  },
  searchBarContainer: {
    borderRadius: '$spacingSmall',
    justifyContent: 'center',
  },
  input: {
    fontSize: '$fontTiny',
    letterSpacing: '0.16rem',
    paddingHorizontal: '$spacingExtraHuge',
    margin: 0,
    borderWidth: 0,
    backgroundColor: '#f5f5f5',
    fontFamily: Fonts.regular,
  },
  searchLogo: {
    position: 'absolute',
    marginLeft: '$spacingNormal',
    left: 0,
    zIndex: 100,
    alignSelf: 'center',
  },
  separator: {
    height: 0,
  },
  itemRow: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  rowIcon: {
    marginRight: '$spacingSuperSmall',
    marginTop: '$spacingTinyExtreme',
  },
  locationMain: {
    color: Colors.titleText,
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    marginBottom: '$spacingTiny',
  },
  locationSecondary: {
    color: Colors.darkGray,
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
  },
  title: {
    color: Colors.titleText,
    fontSize: '$fontNormal',
    fontFamily: Fonts.medium,
    marginLeft: '$spacingExtraNormal',
    marginTop: '$spacingNormal',
    marginBottom: '$spacingSuperSmall',
  },
  useCurrentText: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    letterSpacing: '0.2rem',
    marginLeft: '-6rem',
  },
  modalSeperator: {
    width: '100%',
    backgroundColor: Colors.seperatorColor,
    height: '1vrem',
  },
  savedAddresses: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.subTitleText,
    lineHeight: '$spacingNormalMedium',
    marginBottom: '$spacingTiny',
  },
  savedAddressContainer: {
    paddingHorizontal: '$spacingExtraNormal',
    marginTop: '$spacingExtraNormal',
    paddingBottom: '$spacingSuperSmall',
  },
  scrollContainer: {
    paddingBottom: '$spacingExtraNormal',
    flexGrow: 1,
  },
  addressImageContainer: {
    width: '68rem',
    height: '68rem',
    borderRadius: '$spacingSmall',
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '$spacingNormal',
  },
  addressName: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: '#333333',
    marginTop: '$spacingTiny',
  },
  addressLocation: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    lineHeight: '$spacingExtraNormal',
    letterSpacing: '0.2rem',
    width: '220rem',
    marginTop: '$spacingTinyExtreme',
  },
  addressContainer: {
    paddingVertical: '$spacingMedium',
  },
  seperator: {
    backgroundColor: '#f7f7f7',
    width: '100%',
    height: '$spacingSmallExtreme',
  },
  keyboardContainer: {
    flexGrow: 1,
  },
});
