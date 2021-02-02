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
  listLoaderContainer: {
    marginBottom: '$spacingLessHuge',
  },
  list: {
    flexGrow: 1,
  },
  itemSeperator: {
    height: '$spacingSmall',
    backgroundColor: Colors.seperatorColor,
  },
  emptyListContainer: {
    flex: 1,
    paddingBottom: '$spacingExtraNormal',
  },
  emptyListInnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    letterSpacing: '0.18rem',
    marginTop: '$spacingLessHuge',
  },
  desc: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    letterSpacing: '0.2rem',
    lineHeight: '$spacingNormalMedium',
    width: '260rem',
    textAlign: 'center',
    marginTop: '$spacingSmall',
  },
});
