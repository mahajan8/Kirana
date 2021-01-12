import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  innerContainer: {
    height: '600vrem',
    backgroundColor: Colors.white,
    borderTopLeftRadius: '15rem',
    borderTopRightRadius: '15rem',
    overflow: 'hidden',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '14vrem',
    paddingHorizontal: '20rem',
    backgroundColor: Colors.lightGreen,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: '16rem',
    fontFamily: Fonts.medium,
    lineHeight: '24rem',
    color: Colors.darkGreen,
  },
  addressContainer: {
    paddingHorizontal: '20rem',
    marginTop: '30vrem',
    flexDirection: 'row',
  },
  radio: {
    marginRight: '10rem',
    marginTop: '2vrem',
  },
  addressType: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.black2,
    textTransform: 'uppercase',
  },
  address: {
    marginTop: '2rem',
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    color: Colors.darkGray,
  },
  addNewAddress: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.themeGreen,
    marginVertical: '24vrem',
    marginLeft: '20rem',
  },
  list: {
    // paddingBottom: '20vrem',
    flexGrow: 1,
  },
});
