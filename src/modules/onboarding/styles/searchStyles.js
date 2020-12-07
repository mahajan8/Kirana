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
    fontWeight: '900',
  },
  subText: {
    color: Colors.themeGreen,
    fontSize: '10rem',
    fontWeight: '100',
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
    alignItems: 'center',
  },
  locationDetails: {
    marginLeft: '9rem',
  },
  locationMain: {
    color: Colors.titleText,
    fontSize: '12rem',
    fontWeight: '500',
  },
  locationSecondary: {
    color: Colors.darkGray,
    fontSize: '10rem',
    fontWeight: '100',
  },
  title: {
    color: Colors.titleText,
    fontSize: '16rem',
    fontWeight: '500',
    marginLeft: '20rem',
    marginTop: '16vrem',
    marginBottom: '10vrem',
  },
  useCurrentText: {
    fontSize: '12rem',
    fontWeight: '500',
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
    fontWeight: '500',
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
    fontWeight: '500',
    color: '#333333',
  },
  addressLocation: {
    fontSize: '12rem',
    fontWeight: '100',
    color: Colors.darkGray,
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    width: '220rem',
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
