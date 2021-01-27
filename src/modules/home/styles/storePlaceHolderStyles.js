import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: '$spacingLarge',
  },
  storeImageContainer: {
    width: '70rem',
    height: '70rem',
    borderRadius: '$spacingSmall',
    marginRight: '$spacingNormal',
    backgroundColor: Colors.placeHolder,
  },
  storeName: {
    backgroundColor: Colors.placeHolder,
    width: '120rem',
    marginBottom: '$spacingTiny',
    height: '$spacingExtraMedium',
  },
  storeLocation: {
    width: '70rem',
    backgroundColor: Colors.placeHolder,
    height: '$spacingExtraMedium',
    marginBottom: '$spacingTiny',
  },
  storeDetails: {
    width: '50rem',
    backgroundColor: Colors.placeHolder,
    height: '$spacingExtraMedium',
  },
});
