import EStyleSheet from 'react-native-extended-stylesheet';
import {Fonts} from '../../../utils/values/Fonts';
const {Colors} = require('../../../utils/values/Colors');

export const styles = EStyleSheet.create({
  headingContainer: {
    paddingVertical: '$spacingExtraMedium',
    paddingRight: '$spacingNormal',
    paddingLeft: '$spacingExtraNormal',
    backgroundColor: Colors.lightGreen,
    justifyContent: 'space-between',
    marginBottom: '$spacingExtraNormal',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewarded: {
    color: Colors.darkGreen,
    fontFamily: Fonts.medium,
    fontSize: '$fontTiny',
  },
  inviteRow: {
    justifyContent: 'space-between',
    paddingHorizontal: '$spacingNormal',
    marginBottom: '$spacingNormal',
  },
  number: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  rewardDate: {
    fontFamily: Fonts.regular,
    fontSize: '$fontSuperTiny',
    color: Colors.darkGray,
    marginLeft: '$spacingTiny',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: '$spacingExtraNormal',
    paddingBottom: '$spacingExtraLarge',
  },
  bannerContainer: {
    paddingHorizontal: '$spacingNormal',
    paddingVertical: '$spacingSmallExtreme',
    backgroundColor: Colors.lightBlue,
    justifyContent: 'space-between',
    borderRadius: '$spacingSuperSmall',
  },
  nextFree: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.regular,
    color: '#466eb6',
    letterSpacing: '-0.05rem',
    width: '140rem',
  },
  freeDeliveryCount: {
    fontFamily: Fonts.semiBold,
  },
});
