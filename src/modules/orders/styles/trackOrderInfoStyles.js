import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  orderInfoContainer: {
    paddingVertical: '12vrem',
    paddingLeft: '$spacingNormal',
    paddingRight: '12rem',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: -3},
    elevation: 5,
    shadowRadius: 2,
    shadowOpacity: 0.1,
  },
  itemCountText: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  orderDetails: {
    fontSize: '11rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    marginTop: '4rem',
  },
  price: {
    fontSize: '12rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  paymentStatus: {
    fontSize: '12rem',
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
    width: '3rem',
    height: '3rem',
    backgroundColor: Colors.borderGray,
    borderRadius: '3rem',
    marginHorizontal: '4rem',
  },
  trackingInfoContainer: {
    paddingLeft: '$spacingNormal',
    paddingRight: '12rem',
    // height: '73rem',
  },
  trackingStatus: {
    paddingVertical: '18vrem',
    marginLeft: '15rem',
  },
  trackingStatusLabel: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    width: '270rem',
  },
  trackingStatusSub: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    marginTop: '2rem',
    width: '270rem',
  },
  trackingCircleContainer: {
    alignItems: 'center',
    width: '16rem',
  },
  outerCircle: {
    backgroundColor: Colors.themeGreen,
    height: '16rem',
    width: '16rem',
    borderRadius: '8rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    backgroundColor: Colors.white,
    height: '7rem',
    width: '7rem',
    borderRadius: '4rem',
  },
  line: {
    width: '1rem',
    backgroundColor: Colors.borderGray,
    height: '18vrem',
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
    right: '12rem',
  },
  expandedContainer: {
    paddingLeft: '17rem',
    paddingVertical: '16vrem',
    backgroundColor: Colors.white,
    paddingRight: '$spacingNormal',
  },
  expandedStatus: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.lightGray,
    lineHeight: '$spacingNormal',
    marginLeft: '17rem',
  },
  expandedCurrentStatus: {
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    fontSize: '14rem',
    marginLeft: '17rem',
  },
  expandedCurrentSub: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    marginTop: '2vrem',
    marginLeft: '17rem',
    marginBottom: '16vrem',
  },
  expandedStatusContainer: {
    flexDirection: 'row',
  },
  upcomingStatusCircle: {
    height: '14rem',
    width: '14rem',
    borderRadius: '12rem',
    borderWidth: '1.5rem',
    borderColor: Colors.borderGray,
  },
  transparentCurrentCircle: {
    height: '24rem',
    width: '24rem',
    borderRadius: '12rem',
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
    marginLeft: '6rem',
  },
});
