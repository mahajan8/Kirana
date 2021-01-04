import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  headerContainer: {
    paddingVertical: '8vrem',
    paddingHorizontal: '16rem',
    backgroundColor: Colors.lightGreen,
  },
  headerText: {
    color: Colors.darkGreen,
    fontSize: '12rem',
    fontFamily: Fonts.medium,
  },
  itemSeperator: {
    height: '24vrem',
  },
  listHeader: {
    marginBottom: '20vrem',
  },
  listFooter: {
    marginTop: '20vrem',
    marginBottom: '15vrem',
  },
  priceRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '4vrem',
  },
  priceLabel: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.07rem',
    color: Colors.darkGray,
  },
  amount: {
    fontFamily: Fonts.medium,
  },
  grandTotal: {
    fontSize: '13rem',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.09rem',
    lineHeight: '18rem',
    color: Colors.titleText,
  },
  grandTotalAmount: {
    color: Colors.titleText,
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
  },
  priceInfoContainer: {
    paddingHorizontal: '16rem',
    paddingTop: '8vrem',
  },
  instructionsContainer: {
    backgroundColor: '#fffde9',
    paddingHorizontal: '16rem',
    marginHorizontal: '16rem',
    paddingVertical: '8vrem',
    borderRadius: '8rem',
    marginBottom: '20vrem',
  },
  instructionsLabel: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    color: '#856305',
    marginBottom: '2rem',
  },
  instructionsText: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  buttonContainer: {
    paddingVertical: '8vrem',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonLabel: {
    letterSpacing: '0.1rem',
  },
  buttonsRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '16rem',
  },
  rowButton: {
    width: '150rem',
  },
  loaderContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
