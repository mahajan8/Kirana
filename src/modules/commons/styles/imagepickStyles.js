import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingBottom: '22vrem',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: '5rem',
    paddingHorizontal: '20rem',
    paddingTop: '16vrem',
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20vrem',
  },
  titleText: {
    color: Colors.darkGreen,
    lineHeight: '24rem',
    fontSize: '14rem',
    fontFamily: Fonts.medium,
  },
  optionsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '30rem',
  },
  optionsText: {
    color: Colors.darkGray,
    fontSize: '12rem',
    marginLeft: '12rem',
    fontFamily: Fonts.medium,
  },
});
