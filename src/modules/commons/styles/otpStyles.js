import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  otpField: {
    height: '56rem',
    width: '68rem',
    backgroundColor: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: '$fontExtraNormal',
    borderWidth: 1,
    borderColor: Colors.borderGray,
    borderRadius: '10rem',
    color: Colors.titleText,
    fontFamily: Fonts.medium,
    ...(Platform.OS == 'android' && {
      paddingBottom: 0,
      paddingTop: 0,
    }),
  },
  otpView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
    marginBottom: '$spacingSuperSmall',
  },
});
