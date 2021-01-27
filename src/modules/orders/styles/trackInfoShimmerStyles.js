import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
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
    height: '17rem',
    backgroundColor: Colors.placeHolder,
    width: '45rem',
  },
  orderDetails: {
    fontSize: '11rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    marginTop: '4rem',
  },
  price: {
    height: '17rem',
    backgroundColor: Colors.placeHolder,
    width: '30rem',
  },
  paymentStatus: {
    height: '17rem',
    backgroundColor: Colors.placeHolder,
    width: '110rem',
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
    height: '20rem',
    backgroundColor: Colors.placeHolder,
    width: '110rem',
  },
  trackingStatusSub: {
    height: '15rem',
    backgroundColor: Colors.placeHolder,
    width: '110rem',
    marginTop: '2rem',
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
});
