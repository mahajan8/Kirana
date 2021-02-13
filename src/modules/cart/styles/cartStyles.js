import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    padding: '$spacingNormal',
    paddingTop: '$spacingMedium',
  },
  seperator: {
    height: '$spacingSmallExtreme',
    backgroundColor: Colors.seperatorColor,
    width: '100%',
  },
  grayHeading: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.2rem',
    color: Colors.darkGray,
    textTransform: 'uppercase',
    marginBottom: '$spacingSuperSmall',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeNameContainer: {
    justifyContent: 'space-between',
    marginBottom: '$spacingTiny',
  },
  addMore: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    paddingVertical: '$spacingTiny',
  },
  instructionsInput: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    // color: Colors.lightGray,
    marginLeft: '$spacingSuperSmall',
    flex: 1,
    ...(Platform.OS === 'android' && {
      paddingVertical: 0,
      paddingHorizontal: 0,
    }),
  },
  detailsContainer: {
    paddingHorizontal: '$spacingNormal',
    paddingVertical: '$spacingSuperSmall',
  },
  detailsText: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
  },
  listItemSeperator: {
    height: '$spacingLarge',
  },
  itemContainer: {
    paddingHorizontal: '$spacingNormal',
  },
  footerContainer: {
    marginTop: '$spacingExtraNormal',
  },
  borderedContainer: {
    borderWidth: '1rem',
    borderStyle: 'dashed',
    borderColor: '#b5d3a6',
    backgroundColor: 'rgba(232,244,226, 0.5)',
    borderRadius: 0.1,
    marginBottom: '$spacingExtraMedium',
  },
  priceLabel: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.07rem',
    color: Colors.darkGray,
  },
  amount: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    color: Colors.titleText,
  },
  slicedAmount: {
    color: Colors.lightGray,
    marginRight: '$spacingSmall',
    textDecorationLine: 'line-through',
  },
  grandTotalLabel: {
    fontFamily: Fonts.medium,
    fontSize: '$fontSmall',
    letterSpacing: '-0.09rem',
    color: Colors.titleText,
  },
  grandTotalAmount: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  priceSeperator: {
    marginVertical: '$spacingSmallExtreme',
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
    marginTop: '$spacingLessHuge',
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    letterSpacing: '0.18rem',
    color: Colors.titleText,
  },
  cartEmptySubTitle: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    letterSpacing: '0.2rem',
    color: Colors.darkGray,
    lineHeight: '$spacingNormalMedium',
    width: '260rem',
    textAlign: 'center',
    marginTop: '$spacingSmall',
  },
  list: {
    flexGrow: 1,
  },
  emptyButton: {
    position: 'absolute',
    bottom: '$spacingExtraNormal',
  },
  fullContainer: {
    flex: 1,
  },
  deliveryTimeShimmer: {
    height: '$spacingExtraMedium',
    width: '200rem',
    backgroundColor: Colors.placeHolder,
  },
});
