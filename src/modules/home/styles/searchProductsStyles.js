import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  searchResultsHeading: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    letterSpacing: '-0.19rem',
    marginBottom: '$spacingExtraNormal',
    lineHeight: '$spacingNormalMedium',
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
    marginVertical: '$spacingSmall',
  },
  commonSearchHeading: {
    marginBottom: '$spacingSmallExtreme',
  },
  listLoaderContainer: {
    marginVertical: '$spacingExtraNormal',
  },
  buttonContainer: {
    paddingVertical: '$spacingSmall',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  itemSeperator: {
    height: '$spacingLarge',
  },
  filterIcon: {
    marginRight: '$spacingNormalMedium',
  },
});
