import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: Colors.white,
  },
  noInternetTitle: {
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    fontSize: '$fontSmall',
    letterSpacing: '0.18rem',
    marginTop: '$spacingExtraHuge',
  },
  noInternetSub: {
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    fontSize: '$fontTiny',
    letterSpacing: '0.2rem',
    lineHeight: '$spacingNormalMedium',
    marginTop: '$spacingSmall',
    marginBottom: '$spacingSuperNormal',
  },
  buttonStyle: {
    height: '$spacingMediumHuge',
    width: '92rem',
  },
  buttonLabel: {
    fontSize: '$fontTiny',
    letterSpacing: '0.09rem',
  },
});
