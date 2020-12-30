import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    marginBottom: '20vrem',
    alignItems: 'flex-start',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeImage: {
    width: '70rem',
    height: '70rem',
    borderRadius: '8rem',
    marginRight: '16rem',
  },
  storeName: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.1rem',
    color: Colors.titleText,
    marginTop: '7rem',
  },
  storeLocation: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.2rem',
    color: Colors.lightGray,
    marginBottom: '4vrem',
  },
  details: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.17rem',
    color: Colors.darkGray,
  },
  star: {
    marginRight: '3rem',
  },
  seperator: {
    width: '1rem',
    backgroundColor: '#e0e0e0',
    marginHorizontal: '7rem',
    height: '12vrem',
  },
  storeClosedContainer: {
    backgroundColor: '#f8d7da',
    borderRadius: '3rem',
    padding: '5rem',
    marginLeft: '6rem',
  },
  storeClosedText: {
    color: '#731c23',
    fontSize: '8rem',
    fontFamily: Fonts.medium,
    marginLeft: '4rem',
  },
  storeShopContainer: {
    backgroundColor: '#dcebfe',
  },
  storeShopText: {
    color: '#014085',
  },
});
