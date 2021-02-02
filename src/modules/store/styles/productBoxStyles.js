import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  productImage: {
    height: '$spacingTitan',
    width: '110rem',
    alignSelf: 'center',
  },
  container: {
    marginTop: '$spacingNormal',
    marginRight: '$spacingLessHuge',
    width: '110rem',
    height: '200vrem',
  },
  verticalContainer: {
    width: '150rem',
  },
  price: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    marginTop: '$spacingSmall',
    marginBottom: '$spacingTinyExtreme',
  },
  name: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    color: Colors.titleText,
    marginBottom: '$spacingTinyExtreme',
  },
  weight: {
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    color: '#787787',
  },
  buttonStyle: {
    width: '100%',
    height: '$spacingExtraLarge',
    borderRadius: '$spacingTinyExtreme',
  },
  buttonLabel: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    letterSpacing: '0.1rem',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counter: {
    width: '$spacingExtraLarge',
    height: '$spacingExtraLarge',
    borderRadius: '$spacingSmallExtreme',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderGray,
  },
  countText: {
    fontSize: '$spacingMedium',
    fontFamily: Fonts.medium,
    color: '#333333',
    letterSpacing: '-0.2rem',
  },
  verticalButton: {
    // marginBottom: '15rem',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  addLabel: {
    fontSize: '$spacingMedium',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.1rem',
  },
  loader: {alignSelf: 'center'},
});
