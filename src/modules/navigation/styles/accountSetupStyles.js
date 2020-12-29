import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    backgroundColor: Colors.lightBlue,
    justifyContent: 'space-between',
    paddingLeft: '20rem',
    paddingRight: '16rem',
    // paddingVertical: '6vrem',
    // marginBottom: '30vrem',
  },
  headline: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.darkGreen,
  },
});
