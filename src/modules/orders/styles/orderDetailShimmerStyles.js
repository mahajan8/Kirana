import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    paddingHorizontal: '$spacingNormal',
    paddingTop: '$spacingTiny',
    paddingBottom: '$spacingExtraNormal',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '$spacingSuperSmall',
  },
  orderId: {
    height: '$spacingExtraNormal',
    width: '150rem',
    backgroundColor: Colors.placeHolder,
  },
  orderStatus: {
    borderRadius: '$spacingMedium',
    height: '$spacingSuperNormal',
    width: '$spacingColossal',
    backgroundColor: Colors.placeHolder,
  },
  orderTime: {
    height: '$spacingNormal',
    width: '$spacingExtraMassive',
    backgroundColor: Colors.placeHolder,
    marginTop: '$spacingTiny',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderItemList: {
    backgroundColor: Colors.lightGreen,
    width: '100%',
    paddingLeft: '$spacingNormal',
    paddingVertical: '$spacingSmall',
  },
  orderItemsListText: {
    height: '$spacingNormalMedium',
    width: '$spacingSuperColossal',
    backgroundColor: Colors.placeHolder,
  },
  seperator: {
    height: '1rem',
    backgroundColor: Colors.seperatorColor,
    width: '90%',
    alignSelf: 'center',
  },
  fullSeperator: {
    height: '$spacingExtraNormal',
  },
  chargesContainer: {
    paddingHorizontal: '$spacingNormal',
    justifyContent: 'space-between',
    marginBottom: '$spacingTiny',
    width: '100%',
  },
  chargesText: {
    height: '$spacingNormal',
    width: '$spacingExtraMassive',
    backgroundColor: Colors.placeHolder,
  },
  charges: {
    height: '$spacingNormal',
    width: '$spacingExtraHuge',
    backgroundColor: Colors.placeHolder,
  },
  totalText: {
    height: '$spacingNormalMedium',
    width: '$spacingTitan',
    backgroundColor: Colors.placeHolder,
    marginTop: '$spacingTiny',
    alignSelf: 'flex-end',
  },
  icons: {
    marginRight: '$spacingSuperSmall',
  },
  addressName: {
    backgroundColor: Colors.placeHolder,
    width: '$spacingTitan',
    height: '$spacingNormal',
  },
  locationText: {
    backgroundColor: Colors.placeHolder,
    width: '118rem',
    height: '$spacingMedium',
  },
  storeDetailsContainer: {
    flex: 1,
  },
  dottedLine: {
    height: '100%',
    borderWidth: 0.8,
    borderStyle: 'dashed',
    marginHorizontal: '$spacingNormal',
    borderRadius: 1,
    borderColor: Colors.darkGray,
  },
  addressContainer: {
    marginVertical: '$spacingExtraNormal',
    marginLeft: '$spacingNormal',
  },
});
