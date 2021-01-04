import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  sectionHeaderContainer: {
    backgroundColor: Colors.lightBlue,
    paddingLeft: '16rem',
    paddingVertical: '8vrem',
    width: '100%',
  },
  sectionName: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  listLoaderContainer: {
    marginBottom: '30vrem',
  },
  list: {
    flexGrow: 1,
  },
});
