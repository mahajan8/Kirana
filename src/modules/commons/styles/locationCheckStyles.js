import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: '$spacingExtraNormal',
    paddingBottom: '$spacingLessHuge',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderRadius: '$spacingNormal',
    paddingVertical: '$spacingExtraNormal',
    paddingHorizontal: '$spacingLessHuge',
  },
  title: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.darkGreen,
    marginLeft: '$spacingSuperSmall',
  },
  subText: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.subTitleText,
    lineHeight: '$spacingExtraNormal',
    letterSpacing: '0.2rem',
    marginBottom: '$spacingExtraNormal',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    width: '122rem',
    height: '$spacingMediumHuge',
    borderRadius: '$spacingSmallExtreme',
  },
  buttonLabel: {
    fontSize: '$spacingSuperSmall',
    letterSpacing: '0.07rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '$spacingSuperSmall',
  },
});
