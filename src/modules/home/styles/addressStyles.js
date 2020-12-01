import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

export const styles = EStyleSheet.create({
  addButton: {
    height: '30vrem',
    width: '110rem',
    borderRadius: '6rem',
  },
  buttonLabel: {
    fontSize: '10rem',
  },
  addressBox: {
    marginHorizontal: '16rem',
    paddingHorizontal: '20rem',
    paddingVertical: '15vrem',
    marginTop: '16vrem',
    backgroundColor: Colors.white,
    borderRadius: '6rem',
  },
  addressType: {
    fontSize: '14rem',
    fontWeight: '900',
    color: Colors.titleText,
  },
  locationText: {
    fontSize: '12rem',
    color: Colors.darkGray,
    fontWeight: '100',
    marginTop: '4vrem',
    marginBottom: '12vrem',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    width: null,
    paddingHorizontal: '16rem',
    paddingVertical: '7vrem',
    marginRight: '6rem',
    borderRadius: '5rem',
  },
  noAddressText: {
    marginTop: '30vrem',
    marginBottom: '40vrem',
    color: Colors.titleText,
    fontSize: '14rem',
    fontWeight: '500',
    lineHeight: '21rem',
    letterSpacing: '0.18rem',
    width: '203rem',
    textAlign: 'center',
  },
  noAddressContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAddressButton: {
    width: '203rem',
  },
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
  },
});
