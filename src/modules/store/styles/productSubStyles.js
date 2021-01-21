import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSearchIcon: {
    paddingHorizontal: '4rem',
    marginRight: '10rem',
    paddingVertical: '4vrem',
  },
  headerFilterIcon: {
    paddingHorizontal: '4rem',
    marginRight: '14rem',
    paddingVertical: '4vrem',
  },
  bubblesContainer: {
    paddingVertical: '10vrem',
    paddingHorizontal: '16rem',
    marginBottom: '8rem',
    backgroundColor: Colors.white,
    elevation: 3,
    flexWrap: 'wrap',
  },
  scrollContainer: {
    backgroundColor: '#f7f7f7',
  },
  bubble: {
    paddingVertical: '5vrem',
    paddingHorizontal: '12rem',
    marginRight: '6rem',
    backgroundColor: '#ecf6ff',
    borderRadius: '16rem',
    marginBottom: '10vrem',
    marginTop: '10rem',
  },
  bubbleLabel: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    letterSpacing: '-0.18rem',
  },
  listContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '15vrem',
    paddingLeft: '16rem',
    marginBottom: '8vrem',
    flexGrow: 1,
  },
  listLoaderContainer: {
    marginTop: '20vrem',
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
    paddingTop: '16vrem',
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
    width: '200rem',
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
    paddingVertical: '8vrem',
  },
  commonSearchHeading: {
    marginBottom: '6vrem',
  },
  buttonContainer: {
    paddingVertical: '8vrem',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  seperator: {
    height: '8vrem',
    backgroundColor: '#f7f7f7',
  },
  horizontalListContainer: {
    paddingHorizontal: '10rem',
  },
  filterIcon: {
    marginRight: '12rem',
    paddingHorizontal: '3rem',
    paddingVertical: '3vrem',
  },
});
