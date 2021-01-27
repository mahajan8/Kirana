import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: '$spacingNormal',
    marginTop: '20vrem',
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    height: '19vrem',
    width: '25rem',
    backgroundColor: Colors.placeHolder,
    marginRight: '6rem',
  },
  orderImage: {
    height: '65rem',
    width: '65rem',
    borderRadius: '8rem',
    backgroundColor: Colors.placeHolder,
    marginRight: '12rem',
  },
  itemName: {
    height: '18vrem',
    width: '150rem',
    backgroundColor: Colors.placeHolder,
  },
  itemName2: {
    height: '18vrem',
    width: '80rem',
    backgroundColor: Colors.placeHolder,
    marginTop: '3rem',
  },
  itemQuantity: {
    height: '17vrem',
    width: '20rem',
    backgroundColor: Colors.placeHolder,
    marginTop: '3rem',
  },
  checkView: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  price: {
    height: '20vrem',
    width: '40rem',
    backgroundColor: Colors.placeHolder,
    marginTop: '15vrem',
  },
});
