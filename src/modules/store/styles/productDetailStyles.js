import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

export const styles = EStyleSheet.create({
  productImage: {
    height: '170rem',
    width: '225rem',
    alignSelf: 'center',
    marginTop: '40vrem',
    marginBottom: '30rem',
  },
  container: {
    width: '100%',
    paddingHorizontal: '20rem',
    flex: 1,
  },
  price: {
    fontSize: '16rem',
    fontWeight: '900',
    color: Colors.titleText,
  },
  name: {
    fontSize: '14rem',
    fontWeight: '100',
    letterSpacing: '-0.22rem',
    color: Colors.titleText,
  },
  weight: {
    fontSize: '12rem',
    fontWeight: '100',
    color: '#666666',
  },
  buttonStyle: {
    width: '143rem',
    height: '50vrem',
    flex: 1,
    marginHorizontal: '16rem',
  },
  buttonLabel: {
    fontSize: '14rem',
    letterSpacing: '0.1rem',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: '16rem',
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
  counterText: {
    fontSize: '14rem',
    fontWeight: '500',
    color: Colors.themeGreen,
  },
  countText: {
    fontSize: '12rem',
    fontWeight: '500',
    color: '#333333',
    letterSpacing: '-0.2rem',
  },
  buttonsContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '8vrem',
    flex: 0,
    marginHorizontal: 0,
  },
});
