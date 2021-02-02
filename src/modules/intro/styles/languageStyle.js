import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: '$spacingExtraNormal',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '$spacingNormal',
    paddingVertical: '$spacingExtraMedium',
    borderWidth: 1,
    borderRadius: '$spacingSmallExtreme',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '$spacingExtraNormal',
    justifyContent: 'space-between',
    borderColor: '#e0e0e0',
  },
  languageText: {
    fontSize: '$fontSmall',
    color: Colors.subTitleText,
    fontFamily: Fonts.medium,
  },
  languageDesc: {
    fontSize: '$fontSuperTiny',
  },
  unselectedRadio: {
    height: '$spacingExtraNormal',
    width: '$spacingExtraNormal',
    borderRadius: '$spacingExtraNormal',
    borderWidth: 2,
    borderColor: Colors.lightGray,
  },
  selectedButton: {
    backgroundColor: Colors.lightGreen,
    borderColor: Colors.themeGreen,
  },
  selectedText: {
    color: Colors.themeGreen,
  },
});
