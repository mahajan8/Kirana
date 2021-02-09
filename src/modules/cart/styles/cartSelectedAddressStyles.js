import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
  container: {
    paddingVertical: '$spacingSuperSmall',
    paddingLeft: '$spacingNormal',
    paddingRight: '$spacingExtraMedium',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  addAddressHeading: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.titleText,
  },
  addAddressSub: {
    letterSpacing: '0.17rem',
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    marginTop: '$spacingTinyExtreme',
  },
  addAddressContainer: {
    marginLeft: '$spacingSuperSmall',
    flex: 1,
  },
  addButton: {
    width: '83rem',
    height: '$spacingLessHuge',
    borderRadius: '$spacingSmallExtreme',
  },
  addButtonLabel: {
    fontSize: '$fontSuperTiny',
  },
  addressType: {
    fontFamily: Fonts.semiBold,
    textTransform: 'uppercase',
  },
  change: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
  },
  notDeliverable: {
    color: '#e96c76',
    width: '160rem',
  },
  notDeliverableContainer: {
    alignItems: 'center',
    paddingVertical: '$spacingMedium',
  },
  paymentButtonContainer: {
    paddingVertical: '$spacingSuperSmall',
    paddingHorizontal: '$spacingNormal',
    shadowOffset: {width: 0, height: -1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 7,
    backgroundColor: Colors.white,
  },
  payButton: {
    width: '100%',
    height: '44vrem',
  },
  loader: {
    height: '$spacingMassive',
  },
  changeButton: {
    height: '$spacingNormalMedium',
    justifyContent: 'center',
  },
});
