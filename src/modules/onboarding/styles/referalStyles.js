import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headlineContainer: {
    backgroundColor: Colors.lightBlue,
    paddingVertical: '$spacingNormalMedium',
    paddingLeft: '$spacingExtraNormal',
    paddingRight: '$spacingNormalMedium',
  },
  headlineTitle: {
    color: '#252525',
    fontSize: '$fontTiny',
    fontFamily: Fonts.semiBold,
    lineHeight: '$spacingExtraNormal',
  },
  headlineSub: {
    color: '#424242',
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    lineHeight: '$spacingExtraMedium',
  },
  greenTick: {
    marginRight: '$spacingMedium',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '$spacingExtraNormal',
    marginTop: '$spacingExtraNormal',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    width: '134rem',
    height: '$spacingMediumHuge',
    backgroundColor: 'transparent',
    borderRadius: '$spacingSmallExtreme',
  },
  buttonLabel: {
    fontSize: '$spacingSuperSmall',
    letterSpacing: '0.07rem',
  },
});
