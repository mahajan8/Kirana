import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  headerContainer: {
    paddingVertical: '$spacingSmall',
    paddingHorizontal: '$spacingNormal',
    backgroundColor: Colors.lightGreen,
  },
  headerText: {
    color: Colors.darkGreen,
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
  },
  itemSeperator: {
    height: '$spacingLarge',
  },
  listHeader: {
    marginBottom: '$spacingExtraNormal',
  },
  listFooter: {
    marginTop: '$spacingExtraNormal',
    marginBottom: '$spacingNormal',
  },
  priceRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '$spacingTiny',
  },
  priceLabel: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.07rem',
    color: Colors.darkGray,
  },
  amount: {
    fontFamily: Fonts.medium,
  },
  grandTotal: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.09rem',
    lineHeight: '$spacingNormalMedium',
    color: Colors.titleText,
  },
  grandTotalAmount: {
    color: Colors.titleText,
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
  },
  priceInfoContainer: {
    paddingHorizontal: '$spacingNormal',
    paddingTop: '$spacingSmall',
  },
  instructionsContainer: {
    backgroundColor: '#fffde9',
    paddingHorizontal: '$spacingNormal',
    marginHorizontal: '$spacingNormal',
    paddingVertical: '$spacingSmall',
    borderRadius: '$spacingSmall',
    marginBottom: '$spacingExtraNormal',
  },
  instructionsLabel: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    color: '#856305',
    marginBottom: '$spacingTinyExtreme',
  },
  instructionsText: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  buttonContainer: {
    paddingVertical: '$spacingSmall',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: -1},
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
    paddingHorizontal: '$spacingNormal',
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
