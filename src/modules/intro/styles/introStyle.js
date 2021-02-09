import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    alignItems: 'center',
  },
  introImageBackground: {
    height: '265vrem',
    width: '100%',
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
    paddingTop: '$spacingMassive',
    marginBottom: '$spacingLarge',
  },
  introTitle: {
    color: '#333333',
    fontSize: '$fontNormal',
    fontFamily: Fonts.semiBold,
    marginBottom: '$spacingExtraMedium',
    textAlign: 'center',
  },
  introSubText: {
    color: Colors.subTitleText,
    fontSize: '$fontTiny',
    letterSpacing: '0.2rem',
    lineHeight: '$spacingNormalMedium',
    maxWidth: '290rem',
    textAlign: 'center',
    fontFamily: Fonts.regular,
  },
  activeDotStyle: {
    width: '$spacingSmallExtreme',
    height: '$spacingSmallExtreme',
    borderRadius: '$spacingTiny',
    backgroundColor: Colors.themeGreen,
    justifyContent: 'space-between',
  },
  buttonStyle: {
    marginTop: '140vrem',
  },
  paginationContainer: {
    paddingVertical: 0,
    marginTop: '$spacingLarge',
  },
  ownStore: {
    lineHeight: '$spacingNormalMedium',
    fontSize: '$fontTiny',
    color: '#424242',
    alignSelf: 'center',
    fontFamily: Fonts.medium,
  },
  greenText: {
    color: Colors.themeGreen,
    fontFamily: Fonts.medium,
  },
  splashLogo: {
    width: '210rem',
    height: '$spacingExtraHuge',
  },
  shopkeeperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '$spacingExtraNormal',
    justifyContent: 'center',
  },
});
