import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

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
    shadowOffset: {width: 0, height: 0},
    elevation: 3,
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  addressType: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  locationText: {
    fontSize: '12rem',
    color: Colors.darkGray,
    fontFamily: Fonts.regular,
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
    height: '30vrem',
    marginRight: '6rem',
    borderRadius: '5rem',
  },
  noAddressText: {
    marginTop: '30vrem',
    marginBottom: '40vrem',
    color: Colors.titleText,
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    lineHeight: '21rem',
    letterSpacing: '0.18rem',
    width: '203rem',
    textAlign: 'center',
  },
  noAddressContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noAddressButton: {
    width: '204rem',
    height: '40vrem',
  },
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: '20vrem',
    flex: 1,
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
    fontFamily: Fonts.semiBold,
    color: Colors.darkGreen,
    marginBottom: '10vrem',
  },
  deleteDesc: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
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
