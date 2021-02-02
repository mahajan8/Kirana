import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    padding: '$spacingNormal',
  },
  seperator: {
    height: '7vrem',
    backgroundColor: Colors.seperatorColor,
    width: '100%',
  },
  heading: {
    height: '16vrem',
    width: '100rem',
    backgroundColor: Colors.placeHolder,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeNameContainer: {
    justifyContent: 'space-between',
    marginBottom: '10vrem',
  },
  addMore: {
    height: '16vrem',
    width: '60rem',
    backgroundColor: Colors.placeHolder,
  },
  instructions: {
    height: '16vrem',
    width: '300rem',
    backgroundColor: Colors.placeHolder,
  },
  deliveryTime: {
    height: '14vrem',
    width: '200rem',
    backgroundColor: Colors.placeHolder,
  },
  savings: {
    height: '14vrem',
    width: '200rem',
    backgroundColor: Colors.placeHolder,
  },
  detailsContainer: {
    paddingHorizontal: '$spacingNormal',
    paddingVertical: '10vrem',
  },
  listItemSeperator: {
    height: '24vrem',
  },
  itemContainer: {
    paddingHorizontal: '$spacingNormal',
  },
  footerContainer: {
    marginTop: '20vrem',
  },
  borderedContainer: {
    borderWidth: '1rem',
    borderStyle: 'dashed',
    marginTop: '$spacingSuperSmall',
    borderColor: '#b5d3a6',
    backgroundColor: 'rgba(232,244,226, 0.5)',
    marginBottom: '14vrem',
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
    height: '14vrem',
    width: '70rem',
    backgroundColor: Colors.placeHolder,
  },
  price: {
    height: '14vrem',
    width: '40rem',
    backgroundColor: Colors.placeHolder,
  },
  grandLabel: {
    height: '20vrem',
    width: '90rem',
    backgroundColor: Colors.placeHolder,
  },
  grandPrice: {
    height: '20vrem',
    width: '60rem',
    backgroundColor: Colors.placeHolder,
  },
});
