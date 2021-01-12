import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  greenContainer: {
    paddingTop: '20vrem',
    paddingHorizontal: '20rem',
    paddingBottom: '24vrem',
    backgroundColor: Colors.themeGreen,
  },
  number: {
    fontSize: '16rem',
    fontFamily: Fonts.medium,
    color: Colors.white,
    lineHeight: '22rem',
  },
  completeSetup: {
    fontSize: '9rem',
    fontFamily: Fonts.regular,
    color: Colors.white,
    textDecorationLine: 'underline',
  },
  banner: {
    backgroundColor: Colors.lightBlue,
    marginHorizontal: '20rem',
    height: '70vrem',
    marginTop: '16vrem',
    borderRadius: '5rem',
    marginBottom: '16vrem',
    padding: '15rem',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLabel: {
    fontFamily: Fonts.regular,
    fontSize: '12rem',
    color: '#424242',
    lineHeight: '18rem',
    letterSpacing: '0.08rem',
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '10vrem',
    paddingHorizontal: '16rem',
  },
  seperator: {
    marginHorizontal: '20rem',
    backgroundColor: Colors.seperatorColor,
    height: '1vrem',
    marginVertical: '5.5vrem',
  },
  freeDeliveryTextContainer: {
    marginLeft: '16rem',
  },
  freeDelivery: {
    fontFamily: Fonts.medium,
    fontSize: '10rem',
    color: Colors.darkGreen,
  },
  freeDeliverySub: {
    fontFamily: Fonts.regular,
    fontSize: '8rem',
    color: '#424242',
    letterSpacing: '0.13rem',
    width: '121rem',
  },
  arrow: {
    flex: 1,
    alignItems: 'flex-end',
  },
  optionIcon: {
    marginRight: '20rem',
  },
});
