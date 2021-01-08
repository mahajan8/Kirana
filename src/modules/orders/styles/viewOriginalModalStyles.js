import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: '15rem',
    borderTopRightRadius: '15rem',
    overflow: 'hidden',
    maxHeight: '576vrem',
    paddingBottom: '20vrem',
  },
  titleView: {
    paddingHorizontal: '20rem',
    paddingVertical: '14vrem',
    backgroundColor: Colors.lightGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20vrem',
  },
  titleText: {
    fontFamily: Fonts.medium,
    fontSize: '16rem',
    color: Colors.darkGreen,
    lineHeight: '24rem',
  },
});
