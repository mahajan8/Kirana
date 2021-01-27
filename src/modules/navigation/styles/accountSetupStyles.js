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
    paddingLeft: '$spacingExtraNormal',
    paddingRight: '$spacingNormal',
    // paddingVertical: '6vrem',
    // marginBottom: '30vrem',
  },
  headline: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.darkGreen,
  },
});
