import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: '15rem',
    borderTopRightRadius: '15rem',
    paddingTop: '14vrem',
    width: '100%',
    height: '80%',
  },
});
