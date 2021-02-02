import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  clearAllButton: {
    width: '$spacingColossal',
    height: '$spacingLessHuge',
    borderRadius: '$spacingSmallExtreme',
  },
  clearAllLabel: {
    fontSize: '$fontSuperTiny',
    letterSpacing: '0.07rem',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  filterContainer: {
    width: '$spacingTitan',
    backgroundColor: Colors.lightBlue,
    paddingTop: '$spacingSuperSmall',
    paddingHorizontal: '$spacingNormal',
  },
  filterName: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.regular,
    color: Colors.subTitleText,
  },
  selectedFilterName: {
    fontFamily: Fonts.medium,
    color: '#1b1f21',
  },
  filterNameContainer: {
    paddingVertical: '$spacingExtraMedium',
  },
  listContainer: {
    paddingVertical: '$spacingSuperSmall',
    paddingHorizontal: '$spacingExtraNormal',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '$spacingNormal',
  },
  itemSeperator: {
    height: '1vrem',
    backgroundColor: Colors.seperatorColor,
  },
  optionsText: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    lineHeight: '$spacingNormal',
    letterSpacing: '-0.1rem',
    color: Colors.subTitleText,
    marginLeft: '$spacingMedium',
  },
  seletedOption: {
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  buttonContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '$spacingNormal',
  },
  listOuterContainer: {
    flex: 1,
  },
});
