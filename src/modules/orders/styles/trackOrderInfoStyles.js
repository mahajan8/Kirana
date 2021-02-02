import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    // left: 0,
    // right: 0,
    width: '100%',
  },
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
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  orderDetails: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    marginTop: '$spacingTiny',
  },
  price: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  paymentStatus: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.darkGray,
    letterSpacing: '-0.19rem',
    marginRight: '6rem',
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
    backgroundColor: Colors.white,
    // height: '73rem',
  },
  trackingStatus: {
    paddingVertical: '$spacingNormalMedium',
    marginLeft: '$spacingNormal',
  },
  trackingStatusLabel: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    width: '270rem',
  },
  trackingStatusSub: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    marginTop: '$spacingTinyExtreme',
    width: '270rem',
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
  expandedContainer: {
    paddingLeft: '$spacingNormalMedium',
    paddingVertical: '$spacingNormal',
    backgroundColor: Colors.white,
    paddingRight: '$spacingNormal',
  },
  expandedStatus: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.lightGray,
    lineHeight: '$spacingNormal',
    marginLeft: '$spacingNormalMedium',
  },
  expandedCurrentStatus: {
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    fontSize: '$fontSmall',
    marginLeft: '$spacingNormalMedium',
  },
  expandedCurrentSub: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    marginTop: '$spacingTinyExtreme',
    marginLeft: '$spacingNormalMedium',
    marginBottom: '$spacingNormal',
  },
  expandedStatusContainer: {
    flexDirection: 'row',
  },
  upcomingStatusCircle: {
    height: '$spacingExtraMedium',
    width: '$spacingExtraMedium',
    borderRadius: '$spacingMedium',
    borderWidth: '1.5rem',
    borderColor: Colors.borderGray,
  },
  transparentCurrentCircle: {
    height: '$spacingLarge',
    width: '$spacingLarge',
    borderRadius: '$spacingMedium',
    backgroundColor: 'rgba(67,176,42,0.2)',
    position: 'absolute',
  },
  expandedArrowIcon: {
    position: 'absolute',
    right: '$spacingNormal',
    top: '$spacingNormal',
  },
  downArrow: {
    transform: [{rotateX: '180deg'}],
  },
  checkIcon: {
    marginLeft: '$spacingSmallExtreme',
  },
  collapsibleContainer: {
    overflow: 'hidden',
  },
});
