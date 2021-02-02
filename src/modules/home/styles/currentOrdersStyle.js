import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: '$spacingNormal',
    flexDirection: 'row',
    shadowOffset: {width: 0, height: -2},
    shadowRadius: 2,
    shadowOpacity: 0.1,
    elevation: 10,
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
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  subTitle: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    marginTop: '$spacingTinyExtreme',
  },
  detailsContainer: {
    paddingVertical: '$spacingNormal',
    marginLeft: '$spacingNormal',
    flex: 1,
  },
  buttonStyle: {
    height: '$spacingLessHuge',
    width: '92rem',
    marginLeft: '$spacingSuperSmall',
    borderRadius: '$spacingSmallExtreme',
  },
  buttonLabel: {
    fontSize: '$fontSuperTiny',
  },
  awaitingBackground: {
    backgroundColor: Colors.lightBlue,
  },
});
