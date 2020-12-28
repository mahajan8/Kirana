import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  currentLocationContainer: {
    paddingHorizontal: '20rem',
    flexDirection: 'row',
    marginTop: '30vrem',
    alignItems: 'center',
  },
  currentLocationModal: {
    marginTop: '14vrem',
  },
  locationIcon: {
    marginRight: '12rem',
  },
  currentLocation: {
    color: Colors.themeGreen,
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
  },
  subText: {
    color: Colors.themeGreen,
    fontSize: '10rem',
    fontFamily: Fonts.regular,
  },
  searchContainer: {
    backgroundColor: '#FFF',
    borderRadius: '8rem',
    paddingHorizontal: '20rem',
    flex: 0,
  },
  searchBarContainer: {
    borderRadius: '8rem',
    justifyContent: 'center',
  },
  input: {
    fontSize: '12rem',
    letterSpacing: '0.16rem',
    paddingHorizontal: '40rem',
    margin: 0,
    borderWidth: 0,
    backgroundColor: '#f5f5f5',
    fontFamily: Fonts.regular,
  },
  searchLogo: {
    position: 'absolute',
    marginLeft: '16rem',
    left: 0,
    zIndex: 100,
    alignSelf: 'center',
  },
  separator: {
    height: 0,
  },
  itemRow: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  rowIcon: {
    marginRight: '9rem',
    marginTop: '2rem',
  },
  locationMain: {
    color: Colors.titleText,
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    marginBottom: '4vrem',
  },
  locationSecondary: {
    color: Colors.darkGray,
    fontSize: '10rem',
    fontFamily: Fonts.regular,
  },
  title: {
    color: Colors.titleText,
    fontSize: '16rem',
    fontFamily: Fonts.medium,
    marginLeft: '20rem',
    marginTop: '16vrem',
    marginBottom: '10vrem',
  },
  useCurrentText: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    letterSpacing: '0.2rem',
    marginLeft: '-6rem',
  },
  modalSeperator: {
    width: '100%',
    backgroundColor: Colors.seperatorColor,
    height: '1vrem',
    marginTop: '14vrem',
  },
  savedAddresses: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.subTitleText,
    lineHeight: '18rem',
    marginBottom: '16vrem',
  },
  savedAddressContainer: {
    paddingHorizontal: '20rem',
    marginTop: '20vrem',
  },
  scrollContainer: {
    paddingBottom: '20vrem',
    flexGrow: 1,
  },
  addressImageContainer: {
    width: '68rem',
    height: '68rem',
    borderRadius: '8rem',
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '16rem',
  },
  addressName: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: '#333333',
    marginTop: '4rem',
  },
  addressLocation: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    width: '220rem',
    marginTop: '2rem',
  },
  addressContainer: {
    marginBottom: '24rem',
  },
  seperator: {
    backgroundColor: '#f7f7f7',
    width: '100%',
    height: '6vrem',
    marginTop: '20vrem',
  },
});
