import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  listContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '15vrem',
    paddingLeft: '$spacingNormal',
    marginBottom: '8vrem',
    alignSelf: 'center',
  },
  productContainer: {
    backgroundColor: Colors.white,
    marginTop: '12vrem',
    marginRight: '30rem',
    width: '110rem',
  },
  productVerticalContainer: {
    width: '150rem',
  },
  productImage: {
    height: '100rem',
    width: '100%',
    backgroundColor: Colors.placeHolder,
  },
  productPrice: {
    width: '80rem',
    height: '15vrem',
    backgroundColor: Colors.placeHolder,
    marginTop: '8vrem',
  },
  productName: {
    width: '100%',
    backgroundColor: Colors.placeHolder,
    marginVertical: '5rem',
    height: '12vrem',
  },
  productWeight: {
    width: '50rem',
    backgroundColor: Colors.placeHolder,
    marginBottom: '30vrem',
    height: '12vrem',
  },
});
