import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  listContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '$spacingNormal',
    paddingLeft: '$spacingNormal',
    marginBottom: '$spacingSmall',
    alignSelf: 'center',
  },
  productContainer: {
    backgroundColor: Colors.white,
    marginTop: '$spacingMedium',
    marginRight: '$spacingLessHuge',
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
    width: '$spacingSuperColossal',
    height: '$spacingNormal',
    backgroundColor: Colors.placeHolder,
    marginTop: '$spacingSmall',
  },
  productName: {
    width: '100%',
    backgroundColor: Colors.placeHolder,
    marginVertical: '$spacingSmallExtreme',
    height: '$spacingMedium',
  },
  productWeight: {
    width: '$spacingMassive',
    backgroundColor: Colors.placeHolder,
    marginBottom: '$spacingLessHuge',
    height: '$spacingMedium',
  },
});
