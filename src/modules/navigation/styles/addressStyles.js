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
    alignItems: 'center',
    paddingTop: '127vrem',
  },
  noAddressButton: {
    width: '204rem',
    height: '40vrem',
  },
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
  },
  list: {
    paddingBottom: '20vrem',
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: '20rem',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderRadius: '15rem',
    paddingVertical: '20vrem',
    paddingHorizontal: '30vrem',
  },
  deleteTitle: {
    fontSize: '14rem',
    fontWeight: '900',
    color: Colors.darkGreen,
    marginBottom: '10vrem',
  },
  deleteDesc: {
    fontSize: '12rem',
    fontWeight: '100',
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    color: Colors.subTitleText,
    marginBottom: '20vrem',
  },
  modalButton: {
    borderRadius: '6rem',
    width: '122rem',
    height: '36vrem',
  },
  modalButtonLabel: {
    fontSize: '10rem',
  },
  modalButtonsContainer: {
    justifyContent: 'space-between',
  },
});
