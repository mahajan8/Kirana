import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '35rem',
  },
  textInput: {
    fontSize: '15rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    marginVertical: '15rem',
    marginHorizontal: '16rem',
    lineHeight: '20rem',
    ...(Platform.OS == 'android' && {
      paddingVertical: 0,
      paddingHorizontal: 0,
    }),
  },
  borderedContainer: {
    borderWidth: '1.2rem',
    borderRadius: '5rem',
  },
  label: {
    position: 'absolute',
    marginTop: '15rem',
    marginLeft: '14rem',
    zIndex: -5,
    backgroundColor: '#FFF',
    paddingHorizontal: '2rem',
    fontFamily: Fonts.regular,
    lineHeight: '20rem',
    color: Colors.grayText,
  },
  focusedLabel: {
    top: '-25rem',
    fontSize: '13rem',
  },
  errorMessage: {
    fontSize: '11rem',
    color: '#ea4e3c',
    letterSpacing: '0.22rem',
    fontFamily: Fonts.regular,
    marginLeft: '7rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8vrem',
  },
});
