import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  sectionHeaderContainer: {
    backgroundColor: Colors.lightBlue,
    paddingLeft: '$spacingNormal',
    paddingVertical: '$spacingSmall',
    width: '100%',
  },
  sectionName: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  orderContainer: {
    padding: '$spacingNormal',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    marginBottom: '$spacingNormal',
  },
  detailText: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  icons: {
    marginRight: '$spacingSuperSmall',
  },
  name: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  locationText: {
    fontFamily: Fonts.regular,
    fontSize: '$fontSuperTiny',
    color: Colors.lightGray,
    width: '118rem',
  },
  storeDetailsContainer: {
    flex: 1,
  },
  seperator: {
    height: '1vrem',
    backgroundColor: '#cacaca',
    width: '100%',
    marginTop: '$spacingExtraMedium',
    marginBottom: '$spacingSuperSmall',
  },
  trackContainer: {
    justifyContent: 'space-between',
  },
  trackButton: {
    height: '$spacingLessHuge',
    width: '92rem',
    borderRadius: '$spacingSmallExtreme',
  },
  trackLabel: {
    fontSize: '$fontSuperTiny',
    letterSpacing: '0.07rem',
  },
  greenText: {
    color: Colors.themeGreen,
    fontFamily: Fonts.medium,
  },
  dottedLine: {
    height: '100%',
    borderWidth: 0.8,
    borderStyle: 'dashed',
    marginHorizontal: '$spacingNormal',
    borderRadius: 1,
    borderColor: Colors.darkGray,
  },
  listLoaderContainer: {
    marginTop: '$spacingExtraNormal',
  },
});
