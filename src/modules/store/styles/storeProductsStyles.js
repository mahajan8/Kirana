import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

export const styles = EStyleSheet.create({
  imageBackground: {
    height: '230vrem',
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: '16rem',
    paddingTop: '33vrem',
    paddingBottom: '12vrem',
  },
  storeLocation: {
    fontSize: '10rem',
    fontWeight: '100',
    color: Colors.lightStatusBar,
    letterSpacing: '-0.16rem',
    marginBottom: '10vrem',
  },
  storeName: {
    fontSize: '14rem',
    fontWeight: '500',
    color: Colors.lightStatusBar,
    letterSpacing: '-0.22rem',
  },
  image: {
    height: '70rem',
    width: '70rem',
    borderRadius: '35rem',
    borderWidth: '2.5rem',
    borderColor: Colors.white,
    marginBottom: '20vrem',
  },
  searchView: {
    backgroundColor: Colors.white,
    paddingLeft: '16rem',
    borderRadius: '8rem',
    paddingVertical: '12vrem',
    width: '100%',
  },
  searchText: {
    fontWeight: '100',
    fontSize: '14rem',
    color: '#979797',
    marginLeft: '13rem',
  },
  backArrow: {
    position: 'absolute',
    left: '20rem',
    top: '45vrem',
  },
});
