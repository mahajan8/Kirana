import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    padding: '$spacingNormal',
  },
  seperator: {
    height: '$spacingSmall',
    backgroundColor: Colors.seperatorColor,
    width: '100%',
  },
  heading: {
    height: '$spacingNormal',
    width: '$spacingTitan',
    backgroundColor: Colors.placeHolder,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeNameContainer: {
    justifyContent: 'space-between',
    marginBottom: '$spacingSuperSmall',
  },
  addMore: {
    height: '$spacingNormal',
    width: '60rem',
    backgroundColor: Colors.placeHolder,
  },
  instructions: {
    height: '$spacingNormal',
    width: '300rem',
    backgroundColor: Colors.placeHolder,
  },
  deliveryTime: {
    height: '$spacingExtraMedium',
    width: '200rem',
    backgroundColor: Colors.placeHolder,
  },
  savings: {
    height: '$spacingExtraMedium',
    width: '200rem',
    backgroundColor: Colors.placeHolder,
  },
  detailsContainer: {
    paddingHorizontal: '$spacingNormal',
    paddingVertical: '$spacingSuperSmall',
  },
  listItemSeperator: {
    height: '$spacingLarge',
  },
  itemContainer: {
    paddingHorizontal: '$spacingNormal',
  },
  footerContainer: {
    marginTop: '$spacingExtraNormal',
  },
  borderedContainer: {
    borderWidth: '1rem',
    borderStyle: 'dashed',
    marginTop: '$spacingSuperSmall',
    borderColor: '#b5d3a6',
    backgroundColor: 'rgba(232,244,226, 0.5)',
    marginBottom: '$spacingExtraMedium',
  },
  priceSeperator: {
    marginVertical: '$spacingSmallExtreme',
    height: '1rem',
    backgroundColor: '#cacaca',
    opacity: 0.26,
  },
  priceContainer: {
    justifyContent: 'space-between',
  },
  label: {
    height: '$spacingExtraMedium',
    width: '$spacingExtraMassive',
    backgroundColor: Colors.placeHolder,
  },
  price: {
    height: '$spacingExtraMedium',
    width: '$spacingExtraHuge',
    backgroundColor: Colors.placeHolder,
  },
  grandLabel: {
    height: '$spacingExtraNormal',
    width: '90rem',
    backgroundColor: Colors.placeHolder,
  },
  grandPrice: {
    height: '$spacingExtraNormal',
    width: '60rem',
    backgroundColor: Colors.placeHolder,
  },
});
