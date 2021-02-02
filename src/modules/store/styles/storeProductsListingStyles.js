import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '$spacingExtraMedium',
  },
  listLabel: {
    fontFamily: Fonts.medium,
    fontSize: '$fontTiny',
    color: Colors.titleText,
    letterSpacing: '-0.17rem',
  },
  viewMoreButton: {
    paddingVertical: '$spacingTiny',
    paddingHorizontal: '$spacingTiny',
  },
  viewMore: {
    fontFamily: Fonts.medium,
    fontSize: '$fontTiny',
    color: Colors.themeGreen,
  },
  listContainer: {
    backgroundColor: Colors.white,
    paddingBottom: '$spacingNormal',
    paddingTop: '$spacingSuperSmall',
    paddingLeft: '$spacingNormal',
    borderBottomWidth: '1rem',
    borderColor: Colors.listBorderGray,
    borderTopWidth: '1rem',
  },
  productContainer: {
    marginTop: '$spacingMedium',
    marginRight: '$spacingLessHuge',
    width: '110rem',
    height: '220vrem',
    backgroundColor: Colors.lightStatusBar,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAllContainer: {
    marginTop: '12vrem',
    marginRight: '30rem',
    width: '110rem',
    height: '220vrem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAllButton: {
    width: '$spacingSuperColossal',
    height: '$spacingLessHuge',
    borderRadius: '$spacingTinyExtreme',
    borderColor: Colors.themeGreen,
    backgroundColor: 'transparent',
  },
  viewAllLabel: {
    fontSize: '$fontTiny',
  },
  seperator: {
    height: '$spacingSmall',
    backgroundColor: '#f7f7f7',
  },
});
