import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  imageBackground: {
    height: '230vrem',
    width: '100%',
  },
  darkBg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
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
  storeDetailsContainer: {
    justifyContent: 'center',
    width: '100%',
  },
  storeLocation: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    color: Colors.lightStatusBar,
    letterSpacing: '-0.16rem',
    marginBottom: '10vrem',
    textAlign: 'center',
  },
  storeName: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.lightStatusBar,
    letterSpacing: '-0.22rem',
    textAlign: 'center',
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
    fontFamily: Fonts.regular,
    fontSize: '14rem',
    color: '#979797',
    marginLeft: '13rem',
  },
  backArrow: {
    position: 'absolute',
    left: 0,
  },
  storeNamePlaceHolder: {
    height: '20vrem',
    width: '150rem',
    backgroundColor: Colors.lightGray,
    marginBottom: '5vrem',
  },
  storeLocationPlaceHolder: {
    height: '15vrem',
    width: '120rem',
    backgroundColor: Colors.lightGray,
    marginBottom: '10vrem',
  },
  profilePicPlaceHolder: {
    height: '70rem',
    width: '70rem',
    borderRadius: '35rem',
    backgroundColor: Colors.lightGray,
    marginBottom: '20vrem',
  },
  cartContianer: {
    position: 'absolute',
    right: 0,
  },
});
