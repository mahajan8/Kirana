import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    padding: '20rem',
    borderColor: Colors.seperatorColor,
    // borderBottomWidth: 1,
    marginBottom: '35rem',
    backgroundColor: Colors.white,
    zIndex: 10,
  },
  container2: {
    paddingVertical: '12rem',
    marginBottom: 0,
    paddingHorizontal: '16rem',
    height: '56rem',
    justifyContent: 'center',
  },
  title: {
    color: Colors.titleText,
    fontSize: '18rem',
    fontFamily: Fonts.medium,
    marginTop: '12vrem',
  },
  subTitle: {
    color: Colors.subTitleText,
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    fontFamily: Fonts.regular,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: '12vrem',
  },
  type1Title: {
    color: Colors.titleText,
    fontSize: '16rem',
    fontFamily: Fonts.medium,
    marginLeft: '16rem',
  },
  headerRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerShadow: {
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  bottomBorder: {
    borderBottomWidth: '1rem',
    borderBottomColor: Colors.seperatorColor,
  },
});
