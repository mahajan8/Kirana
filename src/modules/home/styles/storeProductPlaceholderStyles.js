import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: '24vrem',
  },
  productImageContainer: {
    height: '65rem',
    width: '65rem',
    backgroundColor: Colors.placeHolder,
    marginRight: '12rem',
  },
  productName: {
    backgroundColor: Colors.placeHolder,
    width: '120rem',
    marginBottom: '3rem',
    height: '15vrem',
  },
  productWeight: {
    width: '30rem',
    backgroundColor: Colors.placeHolder,
    height: '15vrem',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: '3rem',
  },
  price: {
    width: '50rem',
    backgroundColor: Colors.placeHolder,
    height: '15vrem',
    marginBottom: '10vrem',
  },
  productDetialsContainer: {
    paddingTop: '3rem',
  },
  buttonsContainer: {
    width: '70rem',
    backgroundColor: Colors.placeHolder,
    height: '20vrem',
  },
});
