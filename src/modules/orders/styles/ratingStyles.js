import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  blueContainer: {
    backgroundColor: Colors.lightBlue,
    paddingVertical: '$spacingNormalMedium',
    paddingHorizontal: '$spacingExtraNormal',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cross: {
    alignSelf: 'flex-end',
    marginBottom: '$spacingNormalMedium',
  },
  heading: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    lineHeight: '$spacingSuperNormal',
    color: Colors.titleText,
    width: '200rem',
  },
  ratingTitle: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    marginTop: '$spacingLessHuge',
  },
  starsContainer: {
    marginTop: '$spacingExtraMedium',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  star: {
    marginRight: '$spacingExtraMedium',
  },
  inputContainer: {
    height: '$spacingSuperColossal',
  },
  inputDelivery: {
    height: '$spacingSuperColossal',
    marginBottom: '$spacingLessHuge',
  },
});
