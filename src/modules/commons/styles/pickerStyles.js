import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: '$spacingNormal',
    borderTopRightRadius: '$spacingNormal',
    maxHeight: '560vrem',
    overflow: 'hidden',
  },
  container: {
    alignSelf: 'center',
    marginTop: '$spacingMediumHuge',
    width: '90%',
    height: '$spacingMassive',
    borderWidth: '1.2rem',
    borderRadius: '$spacingSmallExtreme',
    borderColor: Colors.borderGray,
    paddingHorizontal: '$spacingNormal',
    paddingVertical: '$spacingNormal',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: '$fontNormal',
    lineHeight: '$spacingExtraNormal',
    color: Colors.grayText,
  },
  downArrow: {
    fontSize: '$fontSuperTiny',
    color: Colors.grayText,
    transform: [{scaleX: 2}, {rotate: '180deg'}],
    textAlignVertical: 'center',
  },
  selectedText: {
    color: Colors.titleText,
    fontFamily: Fonts.medium,
  },
  selectedLabel: {
    position: 'absolute',
    fontSize: '$fontSmall',
    marginLeft: '$spacingExtraMedium',
    backgroundColor: '#FFF',
    paddingHorizontal: '$spacingTinyExtreme',
    lineHeight: '$spacingNormal',
    top: '-10rem',
    color: Colors.themeGreen,
  },
  titleView: {
    backgroundColor: Colors.lightGreen,
    paddingVertical: '$spacingExtraMedium',
    paddingHorizontal: '$spacingExtraNormal',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '$fontNormal',
    lineHeight: '$spacingLarge',
    fontFamily: Fonts.medium,
    color: Colors.darkGreen,
  },
  listStyle: {
    width: '90%',
    alignSelf: 'center',
  },
  itemName: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: Colors.subTitleText,
    letterSpacing: '0.1rem',
  },
  itemBox: {
    paddingBottom: '$spacingLessHuge',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listHeaderContainer: {
    height: '$spacingLarge',
  },
});
