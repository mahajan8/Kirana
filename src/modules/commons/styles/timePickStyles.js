import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '$spacingMediumHuge',
    height: '$spacingMassive',
    borderWidth: '1.2rem',
    borderRadius: '5rem',
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
    backgroundColor: Colors.white,
    paddingHorizontal: '$spacingTinyExtreme',
    lineHeight: '$spacingNormal',
    top: '-10rem',
    color: Colors.themeGreen,
  },
});
