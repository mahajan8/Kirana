import EStyleSheet from 'react-native-extended-stylesheet';
import {Fonts} from '../../../utils/values/Fonts';
const {Colors} = require('../../../utils/values/Colors');

export const styles = EStyleSheet.create({
  headingContainer: {
    paddingVertical: '14vrem',
    paddingRight: '16rem',
    paddingLeft: '20rem',
    backgroundColor: Colors.lightGreen,
    justifyContent: 'space-between',
    marginBottom: '20vrem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewarded: {
    color: Colors.darkGreen,
    fontFamily: Fonts.medium,
    fontSize: '12rem',
  },
  inviteRow: {
    justifyContent: 'space-between',
    paddingHorizontal: '16rem',
    marginBottom: '16vrem',
  },
  number: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  rewardDate: {
    fontFamily: Fonts.regular,
    fontSize: '10rem',
    color: Colors.darkGray,
    marginLeft: '4rem',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: '20rem',
    paddingBottom: '25vrem',
  },
  bannerContainer: {
    paddingHorizontal: '15rem',
    paddingVertical: '6vrem',
    backgroundColor: Colors.lightBlue,
    justifyContent: 'space-between',
    borderRadius: '10rem',
  },
  nextFree: {
    fontSize: '13rem',
    fontFamily: Fonts.regular,
    color: '#466eb6',
    letterSpacing: '-0.05rem',
    width: '140rem',
  },
  freeDeliveryCount: {
    fontFamily: Fonts.semiBold,
  },
});
