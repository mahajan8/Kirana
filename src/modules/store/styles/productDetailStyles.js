import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  productImage: {
    height: '170rem',
    width: '225rem',
    alignSelf: 'center',
    marginTop: '$spacingExtraHuge',
    marginBottom: '$spacingLessHuge',
    resizeMode: 'contain',
  },
  container: {
    width: '100%',
    paddingHorizontal: '$spacingExtraNormal',
    flex: 1,
  },
  price: {
    fontSize: '$fontNormal',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    marginBottom: '$spacingTiny',
  },
  name: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.22rem',
    color: Colors.titleText,
    marginBottom: '$spacingTinyExtreme',
  },
  weight: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: '#666666',
  },
  buttonStyle: {
    width: '90%',
    height: '50vrem',
  },
  buttonLabel: {
    fontSize: '$fontSmall',
    letterSpacing: '0.1rem',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: '70vrem',
    marginHorizontal: '$spacingNormal',
    justifyContent: 'center',
  },
  counter: {
    width: '$spacingMediumHuge',
    height: '$spacingMediumHuge',
    borderRadius: '$spacingTiny',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderGray,
  },
  countText: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: '#333333',
    letterSpacing: '-0.2rem',
  },
  countTextContainer: {
    width: '50rem',
    alignItems: 'center',
  },
  buttonsContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '$spacingSmall',
    flex: 0,
    marginHorizontal: 0,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  loader: {
    alignSelf: 'center',
    width: '57rem',
  },
});
