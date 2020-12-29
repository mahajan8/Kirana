import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
  container: {
    paddingVertical: '10vrem',
    paddingLeft: '16rem',
    paddingRight: '13rem',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  addAddressHeading: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.titleText,
  },
  addAddressSub: {
    letterSpacing: '0.17rem',
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    marginTop: '2rem',
  },
  addAddressContainer: {
    marginLeft: '10rem',
    flex: 1,
  },
  addButton: {
    width: '83rem',
    height: '30vrem',
    borderRadius: '6rem',
  },
  addButtonLabel: {
    fontSize: '10rem',
  },
  addressType: {
    fontFamily: Fonts.semiBold,
    textTransform: 'uppercase',
  },
  change: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
  },
  notDeliverable: {
    color: '#e96c76',
    width: '160rem',
  },
  notDeliverableContainer: {
    alignItems: 'center',
    paddingVertical: '12vrem',
  },
  paymentButtonContainer: {
    paddingVertical: '10vrem',
    paddingHorizontal: '16rem',
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
});