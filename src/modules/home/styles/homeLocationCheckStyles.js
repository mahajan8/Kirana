import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: '20rem',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderRadius: '15rem',
    paddingTop: '30vrem',
    alignItems: 'center',
  },
  title: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.darkGreen,
    marginBottom: '10vrem',
  },
  subText: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.subTitleText,
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    marginBottom: '20vrem',
    textAlign: 'center',
    width: '250rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '10vrem',
    width: '100%',
    justifyContent: 'center',
  },
  locaitonIcon: {
    marginBottom: '23vrem',
  },
  seperator: {
    width: '100%',
    height: '1vrem',
    backgroundColor: Colors.seperatorColor,
  },
  buttonsText: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    letterSpacing: '0.2rem',
    marginLeft: '6rem',
  },
  searchText: {
    color: Colors.titleText,
    fontFamily: Fonts.medium,
  },
});
