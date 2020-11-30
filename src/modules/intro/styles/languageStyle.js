import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: '20vrem',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '16rem',
    paddingVertical: '14rem',
    borderWidth: 1,
    borderRadius: '6rem',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '20vrem',
    justifyContent: 'space-between',
    borderColor: '#e0e0e0',
  },
  languageText: {
    fontSize: '14rem',
    color: Colors.subTitleText,
    fontWeight: '500',
    fontFamily: Fonts.medium,
  },
  languageDesc: {
    fontSize: '9rem',
  },
  unselectedRadio: {
    height: '20rem',
    width: '20rem',
    borderRadius: '20rem',
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
