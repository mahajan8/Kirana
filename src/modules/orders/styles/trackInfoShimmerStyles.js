import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  orderInfoContainer: {
    paddingVertical: '$spacingMedium',
    paddingLeft: '$spacingNormal',
    paddingRight: '$spacingMedium',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: -3},
    elevation: 5,
    shadowRadius: 2,
    shadowOpacity: 0.1,
  },
  itemCountText: {
    height: '$spacingNormal',
    backgroundColor: Colors.placeHolder,
    width: '45rem',
  },
  orderDetails: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    marginTop: '$spacingTiny',
  },
  price: {
    height: '$spacingNormal',
    backgroundColor: Colors.placeHolder,
    width: '$spacingLessHuge',
  },
  paymentStatus: {
    height: '$spacingNormal',
    backgroundColor: Colors.placeHolder,
    width: '110rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: '$spacingTiny',
    height: '$spacingTiny',
    backgroundColor: Colors.borderGray,
    borderRadius: '$spacingTiny',
    marginHorizontal: '$spacingTiny',
  },
  trackingInfoContainer: {
    paddingLeft: '$spacingNormal',
    paddingRight: '$spacingMedium',
    // height: '73rem',
  },
  trackingStatus: {
    paddingVertical: '$spacingNormalMedium',
    marginLeft: '$spacingNormal',
  },
  trackingStatusLabel: {
    height: '$spacingExtraNormal',
    backgroundColor: Colors.placeHolder,
    width: '110rem',
  },
  trackingStatusSub: {
    height: '$spacingExtraMedium',
    backgroundColor: Colors.placeHolder,
    width: '110rem',
    marginTop: '$spacingTinyExtreme',
  },
  trackingCircleContainer: {
    alignItems: 'center',
    width: '$spacingNormal',
  },
  outerCircle: {
    backgroundColor: Colors.themeGreen,
    height: '$spacingNormal',
    width: '$spacingNormal',
    borderRadius: '$spacingSmall',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    backgroundColor: Colors.white,
    height: '7rem',
    width: '7rem',
    borderRadius: '$spacingTiny',
  },
  line: {
    width: '1rem',
    backgroundColor: Colors.borderGray,
    height: '$spacingNormalMedium',
  },
  dottedLine: {
    flex: 1,
    borderWidth: 0.7,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderColor: Colors.borderGray,
  },
  arrowIcon: {
    position: 'absolute',
    right: '$spacingMedium',
  },
});
