import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  productImage: {
    height: '170rem',
    width: '225rem',
    alignSelf: 'center',
    marginTop: '40vrem',
    marginBottom: '30rem',
    resizeMode: 'contain',
  },
  container: {
    width: '100%',
    paddingHorizontal: '20rem',
    flex: 1,
  },
  price: {
    fontSize: '16rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    marginBottom: '3rem',
  },
  name: {
    fontSize: '14rem',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.22rem',
    color: Colors.titleText,
    marginBottom: '2rem',
  },
  weight: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: '#666666',
  },
  buttonStyle: {
    width: '143rem',
    height: '50vrem',
    marginHorizontal: '$spacingNormal',
  },
  buttonLabel: {
    fontSize: '14rem',
    letterSpacing: '0.1rem',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: '$spacingNormal',
  },
  counter: {
    width: '34rem',
    height: '34rem',
    borderRadius: '4rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderGray,
  },
  countText: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: '#333333',
    letterSpacing: '-0.2rem',
    marginHorizontal: '22rem',
  },
  buttonsContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '8vrem',
    flex: 0,
    marginHorizontal: 0,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  loader: {
    alignSelf: 'center',
    width: '160rem',
    height: '36rem',
  },
});
