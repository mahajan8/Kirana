import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

export const styles = EStyleSheet.create({
  scrollContainer: {
    paddingBottom: '20vrem',
    flexGrow: 1,
  },
  mapView: {
    height: '170vrem',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  saveAddressText: {
    fontSize: '12rem',
    color: Colors.lightGray,
  },
  saveAddressContainer: {
    marginLeft: '30rem',
    marginTop: '24vrem',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8rem',
    marginBottom: '40vrem',
  },
  buttonStyle: {
    width: '70rem',
    height: '37vrem',
    borderRadius: '7rem',
    marginRight: '10rem',
  },
  buttonLabel: {
    fontSize: '12rem',
  },
  unSelectedLabel: {
    color: Colors.darkGray,
  },
  selectedButton: {
    borderColor: Colors.themeGreen,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationTitle: {
    fontSize: '16rem',
    fontWeight: '500',
    color: Colors.titleText,
    width: '200rem',
    marginLeft: '6rem',
  },
  locationSub: {
    fontSize: '12rem',
    fontWeight: '100',
    color: Colors.titleText,
    width: '250rem',
  },
  locationContainer: {
    paddingHorizontal: '20rem',
    marginTop: '28vrem',
  },
  changeButton: {
    width: '65rem',
    height: '27vrem',
    borderRadius: '6rem',
    backgroundColor: Colors.lightGreen,
  },
  changeButtonLabel: {
    fontSize: '10rem',
    color: Colors.themeGreen,
  },
});
