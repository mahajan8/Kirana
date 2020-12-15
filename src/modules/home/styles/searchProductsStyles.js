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
});
