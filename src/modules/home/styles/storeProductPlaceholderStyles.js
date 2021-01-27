import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: '$spacingLarge',
  },
  productImageContainer: {
    height: '65rem',
    width: '65rem',
    backgroundColor: Colors.placeHolder,
    marginRight: '$spacingMedium',
  },
  productName: {
    backgroundColor: Colors.placeHolder,
    width: '120rem',
    marginBottom: '$spacingTiny',
    height: '$spacingExtraMedium',
  },
  productWeight: {
    width: '$spacingLessHuge',
    backgroundColor: Colors.placeHolder,
    height: '$spacingExtraMedium',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: '$spacingTiny',
  },
  price: {
    width: '50rem',
    backgroundColor: Colors.placeHolder,
    height: '$spacingExtraMedium',
    marginBottom: '$spacingSuperSmall',
  },
  productDetialsContainer: {
    paddingTop: '$spacingTiny',
  },
  buttonsContainer: {
    width: '70rem',
    backgroundColor: Colors.placeHolder,
    height: '$spacingExtraNormal',
  },
});
