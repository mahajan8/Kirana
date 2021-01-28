import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSearchIcon: {
    paddingHorizontal: '$spacingTiny',
    marginRight: '$spacingSuperSmall',
    paddingVertical: '$spacingTiny',
  },
  headerFilterIcon: {
    paddingHorizontal: '$spacingTiny',
    marginRight: '$spacingExtraMedium',
    paddingVertical: '$spacingTiny',
  },
  bubblesContainer: {
    paddingVertical: '$spacingSuperSmall',
    paddingHorizontal: '$spacingNormal',
    marginBottom: '$spacingSmall',
    backgroundColor: Colors.white,
    elevation: 3,
    flexWrap: 'wrap',
  },
  scrollContainer: {
    backgroundColor: '#f7f7f7',
  },
  bubble: {
    paddingVertical: '$spacingSmallExtreme',
    paddingHorizontal: '$spacingMedium',
    marginRight: '$spacingSmallExtreme',
    backgroundColor: '#ecf6ff',
    borderRadius: '$spacingNormal',
    marginBottom: '$spacingSuperSmall',
    marginTop: '$spacingSuperSmall',
  },
  bubbleLabel: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    letterSpacing: '-0.18rem',
  },
  listContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '$spacingNormal',
    paddingLeft: '$spacingNormal',
    marginBottom: '$spacingSmall',
    flexGrow: 1,
  },
  listLoaderContainer: {
    marginTop: '$spacingLessHuge',
  },
  searchResultsHeading: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    letterSpacing: '-0.19rem',
    marginBottom: '$spacingExtraNormal',
  },
  list: {
    paddingHorizontal: '$spacingNormal',
    flexGrow: 1,
    paddingTop: '$spacingNormal',
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noSearchResults: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    lineHeight: '$spacingExtraNormal',
    letterSpacing: '0.2rem',
    color: Colors.subTitleText,
    marginTop: '$spacingExtraNormal',
    width: '200rem',
    textAlign: 'center',
  },
  storeName: {
    fontSize: '$fontSmall',
    color: Colors.titleText,
    fontFamily: Fonts.semiBold,
  },
  storeLocation: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.lightGray,
    lineHeight: '$spacingMedium',
  },
  headerContainer: {
    paddingVertical: '$spacingSmall',
  },
  commonSearchesContainer: {
    paddingHorizontal: '$spacingExtraNormal',
    paddingTop: '$spacingNormal',
  },
  commonSearchItem: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    letterSpacing: '0.28rem',
    color: Colors.titleText,
    paddingVertical: '$spacingSmall',
  },
  commonSearchHeading: {
    marginBottom: '$spacingSmallExtreme',
  },
  buttonContainer: {
    paddingVertical: '$spacingSmall',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  seperator: {
    height: '$spacingSmall',
    backgroundColor: '#f7f7f7',
  },
  horizontalListContainer: {
    paddingHorizontal: '$spacingSuperSmall',
  },
  filterIcon: {
    marginRight: '$spacingMedium',
    paddingHorizontal: '$spacingTiny',
    paddingVertical: '$spacingTiny',
  },
});
