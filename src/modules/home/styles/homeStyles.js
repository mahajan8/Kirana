import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingTop: '16vrem',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingLeft: '16rem',
    borderRadius: '8rem',
    height: '40vrem',
    marginBottom: '20vrem',
  },
  textInput: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.grayText,
    marginHorizontal: '10rem',
    lineHeight: '16rem',
  },
  nearbyText: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    marginBottom: '12vrem',
  },
  list: {
    paddingHorizontal: '16rem',
  },
});
