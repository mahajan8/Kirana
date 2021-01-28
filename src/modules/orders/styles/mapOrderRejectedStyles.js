import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  modalContainer: {
    paddingHorizontal: '$spacingExtraNormal',
    borderRadius: '$spacingExtraNormal',
  },
  container: {
    borderRadius: '$spacingExtraNormal',
    overflow: 'hidden',
  },
  imageContainer: {
    paddingHorizontal: '$spacingExtraNormal',
    paddingVertical: '$spacingExtraNormal',
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: '$spacingLessHuge',
    alignItems: 'center',
    paddingBottom: '$spacingExtraNormal',
    paddingTop: '$spacingExtraLarge',
    backgroundColor: Colors.white,
  },
  heading: {
    fontSize: '$fontNormal',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  desc: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    lineHeight: '$spacingNormalMedium',
    textAlign: 'center',
    letterSpacing: '0.2rem',
    color: Colors.darkGray,
    width: '258rem',
    marginTop: '$spacingNormal',
  },
  buttonStyle: {
    marginTop: '$spacingLarge',
    width: '230rem',
    borderRadius: '$spacingSmallExtreme',
    height: '$spacingMediumHuge',
  },
  buttonLabel: {
    fontSize: '$fontTiny',
    lineHeight: '$spacingNormalMedium',
    letterSpacing: '0.09rem',
  },
  crossIcon: {
    alignSelf: 'flex-end',
  },
});
