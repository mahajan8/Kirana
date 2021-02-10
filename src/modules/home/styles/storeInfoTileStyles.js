import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingVertical: '$spacingSuperSmall',
    alignItems: 'flex-start',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeImage: {
    width: '70rem',
    height: '70rem',
    borderRadius: '$spacingSmall',
    marginRight: '$spacingNormal',
  },
  storeDetailsContainer: {
    flex: 1,
  },
  storeName: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.1rem',
    color: Colors.titleText,
    marginTop: '$spacingSmallExtreme',
  },
  storeLocation: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.2rem',
    color: Colors.lightGray,
    marginBottom: '$spacingTiny',
  },
  details: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.17rem',
    color: Colors.darkGray,
  },
  star: {
    marginRight: '$spacingTiny',
  },
  seperator: {
    width: '1rem',
    backgroundColor: '#e0e0e0',
    marginHorizontal: '$spacingTiny',
    height: '$spacingMedium',
  },
  storeClosedContainer: {
    backgroundColor: '#f8d7da',
    borderRadius: '$spacingTiny',
    padding: '$spacingTiny',
    marginLeft: '$spacingSmallExtreme',
  },
  storeClosedText: {
    color: '#731c23',
    fontSize: '$fontTinyExtreme',
    fontFamily: Fonts.medium,
    marginLeft: '$spacingTiny',
  },
  storeShopContainer: {
    backgroundColor: '#dcebfe',
  },
  storeShopText: {
    color: '#014085',
  },
});
