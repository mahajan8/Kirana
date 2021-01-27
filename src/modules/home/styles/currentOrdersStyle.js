import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    paddingHorizontal: '$spacingNormal',
    flexDirection: 'row',
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
  trackingCircleContainer: {
    alignItems: 'center',
    width: '$spacingNormal',
  },
  title: {
    fontSize: '$fontNormal',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  subTitle: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.subTitleText,
    marginTop: '$spacingSuperSmall',
  },
  detailsContainer: {
    paddingVertical: '$spacingExtraNormal',
    marginLeft: '$spacingNormal',
    flex: 1,
  },
  buttonStyle: {
    height: '$spacingLessHuge',
    width: null,
    paddingHorizontal: '$spacingSuperSmall',
    marginLeft: '$spacingSuperSmall',
    borderRadius: '$spacingSmallExtreme',
    backgroundColor: 'transparent',
    borderColor: Colors.themeGreen,
  },
  buttonLabel: {
    fontSize: '$fontSmall',
  },
  greenBackground: {
    backgroundColor: Colors.lightGreen,
  },
});
