import EStyleSheet from 'react-native-extended-stylesheet';
import {Fonts} from '../../../utils/values/Fonts';
const {Colors} = require('../../../utils/values/Colors');

export const styles = EStyleSheet.create({
  imageContainer: {
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
    paddingVertical: '40vrem',
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
  },
  referHeadline: {
    color: Colors.titleText,
    fontFamily: Fonts.semiBold,
    fontSize: '16rem',
    textAlign: 'center',
    width: '285rem',
    marginTop: '40vrem',
  },
  referSub: {
    color: Colors.darkGray,
    fontFamily: Fonts.regular,
    fontSize: '12rem',
    lineHeight: '18rem',
    letterSpacing: '0.2rem',
    textAlign: 'center',
    width: '310rem',
    marginTop: '16vrem',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '30vrem',
    width: '100%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '20rem',
    marginBottom: '30vrem',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    width: '155rem',
  },
  seeInvites: {
    fontSize: '15rem',
    letterSpacing: '-0.12rem',
    color: Colors.themeGreen,
    fontFamily: Fonts.medium,
  },
  backButton: {
    position: 'absolute',
    left: '20rem',
    top: '20rem',
  },
});
