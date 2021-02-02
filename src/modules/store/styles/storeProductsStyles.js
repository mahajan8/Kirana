import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  imageBackground: {
    height: '230vrem',
    width: '100%',
  },
  darkBg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: '$spacingNormal',
    paddingTop: '$spacingSuperSmall',
    paddingBottom: '$spacingMedium',
  },
  storeDetailsContainer: {
    justifyContent: 'center',
    width: '100%',
  },
  storeLocation: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    color: Colors.lightStatusBar,
    letterSpacing: '-0.16rem',
    marginBottom: '$spacingSuperSmall',
    textAlign: 'center',
  },
  storeName: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: Colors.lightStatusBar,
    letterSpacing: '-0.22rem',
    textAlign: 'center',
  },
  image: {
    height: '$spacingExtraMassive',
    width: '$spacingExtraMassive',
    borderRadius: '$spacingMediumHuge',
    borderWidth: '2.5rem',
    borderColor: Colors.white,
    marginBottom: '$spacingExtraNormal',
  },
  searchView: {
    backgroundColor: Colors.white,
    paddingLeft: '$spacingNormal',
    borderRadius: '$spacingSmall',
    paddingVertical: '$spacingMedium',
    width: '100%',
  },
  searchText: {
    fontFamily: Fonts.regular,
    fontSize: '$fontSmall',
    color: '#979797',
    marginLeft: '$spacingExtraMedium',
  },
  backArrow: {
    position: 'absolute',
    left: 0,
  },
  storeNamePlaceHolder: {
    height: '$spacingExtraNormal',
    width: '150rem',
    backgroundColor: Colors.placeHolder,
    marginBottom: '$spacingSmallExtreme',
  },
  storeLocationPlaceHolder: {
    height: '$spacingNormal',
    width: '120rem',
    backgroundColor: Colors.placeHolder,
    marginBottom: '$spacingSuperSmall',
  },
  profilePicPlaceHolder: {
    height: '$spacingExtraMassive',
    width: '$spacingExtraMassive',
    borderRadius: '$spacingMediumHuge',
    backgroundColor: Colors.placeHolder,
    marginBottom: '$spacingExtraNormal',
  },
  cartContianer: {
    position: 'absolute',
    right: 0,
  },
});
