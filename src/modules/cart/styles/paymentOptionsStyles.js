import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  headerContainer: {
    backgroundColor: '#e8e8e8',
    paddingHorizontal: '16rem',
    paddingVertical: '10rem',
    marginBottom: '15rem',
  },
  heading: {
    fontSize: '12rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    paddingHorizontal: '16rem',
    backgroundColor: Colors.white,
    marginBottom: '15rem',
    alignItems: 'center',
  },
  paymentIcon: {
    height: '30rem',
    width: '30rem',
    borderRadius: '15rem',
    marginRight: '14rem',
  },
  methodNameContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  methodName: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
});
