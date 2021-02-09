import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: '$spacingNormal',
    marginTop: '$spacingExtraNormal',
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    height: '$spacingExtraNormal',
    width: '$spacingExtraLarge',
    backgroundColor: Colors.placeHolder,
    marginRight: '$spacingSmallExtreme',
  },
  orderImage: {
    height: '65rem',
    width: '65rem',
    borderRadius: '$spacingSmall',
    backgroundColor: Colors.placeHolder,
    marginRight: '$spacingMedium',
  },
  itemName: {
    height: '$spacingNormalMedium',
    width: '150rem',
    backgroundColor: Colors.placeHolder,
  },
  itemName2: {
    height: '$spacingNormalMedium',
    width: '$spacingSuperColossal',
    backgroundColor: Colors.placeHolder,
    marginTop: '$spacingTiny',
  },
  itemQuantity: {
    height: '$spacingNormalMedium',
    width: '$spacingExtraNormal',
    backgroundColor: Colors.placeHolder,
    marginTop: '$spacingTiny',
  },
  checkView: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  price: {
    height: '$spacingExtraNormal',
    width: '$spacingExtraHuge',
    backgroundColor: Colors.placeHolder,
    marginTop: '$spacingNormal',
  },
});
