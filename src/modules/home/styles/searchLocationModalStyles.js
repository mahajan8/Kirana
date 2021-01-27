import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

export const styles = EStyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: '$spacingNormal',
    borderTopRightRadius: '$spacingNormal',
    paddingTop: '$spacingExtraMedium',
    width: '100%',
    height: '80%',
  },
});
