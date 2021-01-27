import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  greenContainer: {
    paddingTop: '$spacingExtraNormal',
    paddingHorizontal: '$spacingExtraNormal',
    paddingBottom: '$spacingLarge',
    backgroundColor: Colors.themeGreen,
  },
  number: {
    fontSize: '$fontNormal',
    fontFamily: Fonts.medium,
    color: Colors.white,
    lineHeight: '$spacingSuperNormal',
  },
  completeSetup: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    color: Colors.white,
    textDecorationLine: 'underline',
  },
  banner: {
    backgroundColor: Colors.lightBlue,
    marginHorizontal: '$spacingExtraNormal',
    height: '70vrem',
    borderRadius: '$spacingSmallExtreme',
    marginVertical: '$spacingNormal',
    padding: '$spacingNormal',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLabel: {
    fontFamily: Fonts.regular,
    fontSize: '$fontTiny',
    color: '#424242',
    lineHeight: '$spacingNormalMedium',
    letterSpacing: '0.08rem',
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '$spacingSuperSmall',
    paddingHorizontal: '$spacingNormal',
  },
  seperator: {
    marginHorizontal: '$spacingExtraNormal',
    backgroundColor: Colors.seperatorColor,
    height: '1vrem',
    marginVertical: '5.5vrem',
  },
  freeDeliveryTextContainer: {
    marginLeft: '$spacingNormal',
  },
  freeDelivery: {
    fontFamily: Fonts.medium,
    fontSize: '$fontSuperTiny',
    color: Colors.darkGreen,
  },
  freeDeliverySub: {
    fontFamily: Fonts.regular,
    fontSize: '$fontTinyExtreme',
    color: '#424242',
    letterSpacing: '0.13rem',
    width: '121rem',
  },
  arrow: {
    flex: 1,
    alignItems: 'flex-end',
  },
  optionIcon: {
    marginRight: '$spacingExtraNormal',
  },
});
