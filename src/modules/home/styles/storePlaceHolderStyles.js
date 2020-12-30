import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: '24vrem',
  },
  storeImageContainer: {
    width: '70rem',
    height: '70rem',
    borderRadius: '8rem',
    marginRight: '16rem',
    backgroundColor: Colors.placeHolder,
  },
  storeName: {
    backgroundColor: Colors.placeHolder,
    width: '120rem',
    marginBottom: '3rem',
    height: '15vrem',
  },
  storeLocation: {
    width: '70rem',
    backgroundColor: Colors.placeHolder,
    height: '15vrem',
    marginBottom: '3rem',
  },
  storeDetails: {
    width: '50rem',
    backgroundColor: Colors.placeHolder,
    height: '15vrem',
  },
});
