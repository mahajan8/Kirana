import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  productImageContainer: {
    height: '65rem',
    width: '65rem',
    borderRadius: '$spacingSmall',
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '$spacingMedium',
  },
  productImage: {
    height: '45rem',
    width: '45rem',
  },
  productName: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    lineHeight: '$spacingNormalMedium',
    width: '160rem',
    marginBottom: '$spacingTiny',
  },
  productWeight: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.subTitleText,
    letterSpacing: '-0.2rem',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: '$spacingTiny',
  },
  price: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: '#333333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '$spacingSuperSmall',
  },
  strikedPrice: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.grayText,
    textDecorationLine: 'line-through',
    marginLeft: '$spacingTiny',
  },
  quantityButton: {
    width: '$spacingExtraNormal',
    height: '$spacingExtraNormal',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderGray,
    borderRadius: '$spacingSmallExtreme',
  },
  quantityButtonIcons: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
  },
  quantityText: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    marginHorizontal: '$spacingSuperSmall',
  },
  productDetialsContainer: {
    paddingTop: '$spacingTiny',
  },
  loader: {
    alignSelf: 'flex-end',
    marginEnd: '$spacingLessHuge',
  },
  outStock: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: '#333333',
    marginBottom: '$spacingSuperSmall',
  },
  delete: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: 'red',
    textDecorationLine: 'underline',
  },
});
