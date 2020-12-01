import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  headerContainer: {
    marginBottom: 0,
    paddingBottom: '5rem',
  },
  currentLocationContainer: {
    paddingHorizontal: '20rem',
    flexDirection: 'row',
    marginTop: '30vrem',
    alignItems: 'center',
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
  cross: {
    position: 'absolute',
    marginRight: '16rem',
    right: 0,
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
  seperator: {
    backgroundColor: '#f7f7f7',
    width: '100%',
    height: '6vrem',
    marginTop: '20vrem',
  },
});
