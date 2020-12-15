import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const commonStyles = EStyleSheet.create({
  shadow: {
    elevation: 5,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonBottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '20vrem',
    width: '100%',
    marginTop: '30rem',
  },
  hitSlop: {
    top: '5rem',
    bottom: '5rem',
    right: '5rem',
    left: '5rem',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  bottomButtonContainer: {
    width: '100%',
    paddingTop: '10rem',
    bottom: 0,
    backgroundColor: Colors.white,
    paddingBottom: '20rem',
  },
});
