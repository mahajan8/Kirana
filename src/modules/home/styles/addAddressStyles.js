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
});
