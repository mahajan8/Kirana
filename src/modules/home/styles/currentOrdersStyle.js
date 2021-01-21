import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    paddingHorizontal: '16rem',
    flexDirection: 'row',
  },
  outerCircle: {
    backgroundColor: Colors.themeGreen,
    height: '16rem',
    width: '16rem',
    borderRadius: '8rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    backgroundColor: Colors.white,
    height: '7rem',
    width: '7rem',
    borderRadius: '4rem',
  },
  line: {
    width: '1rem',
    backgroundColor: Colors.borderGray,
    height: '18vrem',
  },
  dottedLine: {
    flex: 1,
    borderWidth: 0.7,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderColor: Colors.borderGray,
  },
  trackingCircleContainer: {
    alignItems: 'center',
    width: '16rem',
  },
  title: {
    fontSize: '15rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  subTitle: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.subTitleText,
    marginTop: '10rem',
  },
  detailsContainer: {
    paddingVertical: '20vrem',
    marginLeft: '16rem',
    flex: 1,
  },
  buttonStyle: {
    height: '30rem',
    width: null,
    paddingHorizontal: '10rem',
    marginLeft: '10rem',
    borderRadius: '6rem',
    backgroundColor: 'transparent',
    borderColor: Colors.themeGreen,
  },
  buttonLabel: {
    fontSize: '13rem',
  },
});
