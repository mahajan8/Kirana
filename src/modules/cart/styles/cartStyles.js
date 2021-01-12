import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    padding: '16vrem',
  },
  seperator: {
    height: '7vrem',
    backgroundColor: Colors.seperatorColor,
    width: '100%',
  },
  grayHeading: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.2rem',
    color: Colors.darkGray,
    textTransform: 'uppercase',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeNameContainer: {
    justifyContent: 'space-between',
    marginBottom: '4vrem',
  },
  addMore: {
    fontSize: '11rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
  },
  instructionsInput: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    // color: Colors.lightGray,
    marginLeft: '10rem',
    flex: 1,
    ...(Platform.OS === 'android' && {
      paddingVertical: 0,
      paddingHorizontal: 0,
    }),
  },
  detailsContainer: {
    paddingHorizontal: '16rem',
    paddingVertical: '10vrem',
  },
  detailsText: {
    fontSize: '10rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
  },
  listItemSeperator: {
    height: '24vrem',
  },
  itemContainer: {
    paddingHorizontal: '16rem',
  },
  footerContainer: {
    marginTop: '20vrem',
  },
  borderedContainer: {
    borderWidth: '1rem',
    borderStyle: 'dashed',
    marginTop: '10vrem',
    borderColor: '#b5d3a6',
    backgroundColor: 'rgba(232,244,226, 0.5)',
    marginBottom: '14vrem',
    borderRadius: 0.1,
  },
  priceLabel: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.07rem',
    color: Colors.darkGray,
  },
  amount: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    color: Colors.titleText,
  },
  slicedAmount: {
    color: Colors.lightGray,
    marginRight: '9rem',
    textDecorationLine: 'line-through',
  },
  grandTotalLabel: {
    fontFamily: Fonts.medium,
    fontSize: '13rem',
    letterSpacing: '-0.09rem',
    color: Colors.titleText,
  },
  grandTotalAmount: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  priceSeperator: {
    marginVertical: '6vrem',
    height: '1rem',
    backgroundColor: '#cacaca',
    opacity: 0.26,
  },
  priceContainer: {
    justifyContent: 'space-between',
  },
  overWeightContainer: {
    backgroundColor: '#f8d7da',
  },
  overWeightText: {
    color: '#731c23',
  },
  listEmptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartEmptyTitle: {
    marginTop: '30vrem',
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    letterSpacing: '0.18rem',
    color: Colors.titleText,
  },
  cartEmptySubTitle: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    letterSpacing: '0.2rem',
    color: Colors.darkGray,
    lineHeight: '18rem',
    width: '260rem',
    textAlign: 'center',
    marginTop: '7vrem',
  },
  list: {
    flexGrow: 1,
  },
  emptyButton: {
    position: 'absolute',
    bottom: '20vrem',
  },
  fullContainer: {
    flex: 1,
  },
});
