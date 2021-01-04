import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    paddingTop: '16vrem',
    paddingHorizontal: '16rem',
    paddingBottom: '15vrem',
  },
  orderInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderDetails: {
    paddingTop: '4vrem',
    alignItems: 'flex-start',
  },
  orderId: {
    fontSize: '14rem',
    color: Colors.titleText,
    fontFamily: Fonts.medium,
    marginTop: '8vrem',
    width: '240rem',
  },
  orderTime: {
    fontSize: '10rem',
    color: Colors.titleText,
    fontFamily: Fonts.regular,
    marginTop: '3vrem',
    marginBottom: '5vrem',
  },
  needHelp: {
    fontSize: '12rem',
    color: '#007934',
    fontFamily: Fonts.semiBold,
    letterSpacing: '0.24rem',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  orderStatusContainer: {
    borderRadius: '11.5rem',
    paddingHorizontal: '12rem',
    height: '21vrem',
    borderWidth: '0.5rem',
    marginTop: '11vrem',
    justifyContent: 'center',
  },
  statusLabel: {
    fontFamily: Fonts.regular,
    fontSize: '10rem',
  },
  addressContainer: {
    paddingVertical: '20vrem',
  },
  infoContainer: {
    paddingVertical: '14vrem',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    paddingHorizontal: '16rem',
  },
  infoText: {
    marginLeft: '10rem',
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    letterSpacing: '0.1rem',
    lineHeight: '15rem',
    color: '#e96c76',
  },
  seperator: {
    height: '1vrem',
    backgroundColor: Colors.seperatorColor,
    width: '100%',
  },
});
