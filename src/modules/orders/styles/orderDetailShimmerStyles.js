import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    paddingHorizontal: '$spacingNormal',
    paddingTop: '4vrem',
    paddingBottom: '20vrem',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10vrem',
  },
  orderId: {
    height: '20vrem',
    width: '150rem',
    backgroundColor: Colors.placeHolder,
  },
  orderStatus: {
    borderRadius: '11rem',
    height: '21vrem',
    width: '76rem',
    backgroundColor: Colors.placeHolder,
  },
  orderTime: {
    height: '15vrem',
    width: '70rem',
    backgroundColor: Colors.placeHolder,
    marginTop: '4rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderItemList: {
    backgroundColor: Colors.lightGreen,
    width: '100%',
    paddingLeft: '$spacingNormal',
    paddingVertical: '8vrem',
  },
  orderItemsListText: {
    height: '17vrem',
    width: '80rem',
    backgroundColor: Colors.placeHolder,
  },
  seperator: {
    height: '1rem',
    backgroundColor: Colors.seperatorColor,
    width: '90%',
    alignSelf: 'center',
  },
  fullSeperator: {
    height: '20rem',
  },
  chargesContainer: {
    paddingHorizontal: '$spacingNormal',
    justifyContent: 'space-between',
    marginBottom: '4vrem',
    width: '100%',
  },
  chargesText: {
    height: '15vrem',
    width: '70rem',
    backgroundColor: Colors.placeHolder,
  },
  charges: {
    height: '15vrem',
    width: '40rem',
    backgroundColor: Colors.placeHolder,
  },
  totalText: {
    height: '18vrem',
    width: '100rem',
    backgroundColor: Colors.placeHolder,
    marginTop: '3rem',
    alignSelf: 'flex-end',
  },
  icons: {
    marginRight: '10rem',
  },
  addressName: {
    backgroundColor: Colors.placeHolder,
    width: '100rem',
    height: '16rem',
  },
  locationText: {
    backgroundColor: Colors.placeHolder,
    width: '118rem',
    height: '12rem',
  },
  storeDetailsContainer: {
    flex: 1,
  },
  dottedLine: {
    height: '100%',
    borderWidth: 0.8,
    borderStyle: 'dashed',
    marginHorizontal: '$spacingNormal',
    borderRadius: 1,
    borderColor: Colors.darkGray,
  },
  addressContainer: {
    marginVertical: '20vrem',
    marginLeft: '$spacingNormal',
  },
});
