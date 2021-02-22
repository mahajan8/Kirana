import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: '$spacingNormal',
    flexDirection: 'row',
  },
  quantityContainer: {
    justifyContent: 'center',
  },
  itemCount: {
    color: Colors.themeGreen,
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    letterSpacing: '-0.22rem',
    width: '$spacingHuge',
  },
  strikedCount: {
    textDecorationLine: 'line-through',
    color: Colors.grayText,
  },
  itemImage: {
    width: '65rem',
    height: '65rem',
    borderRadius: '$spacingSmall',
    marginRight: '$spacingMedium',
  },
  itemName: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    lineHeight: '$spacingNormalMedium',
    color: Colors.titleText,
    width: '170rem',
    paddingTop: '$spacingTiny',
    marginBottom: '$spacingTiny',
  },
  itemWeight: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.2rem',
    color: Colors.subTitleText,
  },
  itemPrice: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    textAlign: 'right',
    alignSelf: 'center',
    flex: 1,
  },
  viewOriginal: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.medium,
    letterSpacing: '0.07rem',
    color: Colors.themeGreen,
    marginLeft: '$spacingTiny',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seperator: {
    height: '$spacingSuperSmall',
    width: '1rem',
    backgroundColor: Colors.lightGray,
    marginHorizontal: '$spacingSmallExtreme',
  },
});
