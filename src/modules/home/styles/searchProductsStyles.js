import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingTop: '16vrem',
  },
  searchResultsHeading: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    letterSpacing: '-0.19rem',
    marginBottom: '20vrem',
  },
  list: {
    paddingHorizontal: '16rem',
    flexGrow: 1,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noSearchResults: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    color: Colors.subTitleText,
    marginTop: '20vrem',
    width: '266rem',
    textAlign: 'center',
  },
  storeName: {
    fontSize: '14rem',
    color: Colors.titleText,
    fontFamily: Fonts.semiBold,
  },
  storeLocation: {
    fontSize: '11rem',
    fontFamily: Fonts.regular,
    color: Colors.lightGray,
    lineHeight: '12rem',
  },
  headerContainer: {
    paddingVertical: '8vrem',
  },
  commonSearchesContainer: {
    paddingHorizontal: '20rem',
    paddingTop: '16vrem',
  },
  commonSearchItem: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    letterSpacing: '0.28rem',
    color: Colors.titleText,
    marginBottom: '16vrem',
  },
  commonSearchHeading: {
    marginBottom: '14vrem',
  },
  listLoaderContainer: {
    marginBottom: '20vrem',
  },
  buttonContainer: {
    paddingVertical: '8vrem',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
});
