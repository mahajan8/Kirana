import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  sectionHeaderContainer: {
    backgroundColor: Colors.lightBlue,
    paddingLeft: '$spacingNormal',
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
  itemSeperator: {
    height: '7vrem',
    backgroundColor: Colors.seperatorColor,
  },
  emptyListContainer: {
    flex: 1,
    paddingBottom: '20vrem',
  },
  emptyListInnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    letterSpacing: '0.18rem',
    marginTop: '30vrem',
  },
  desc: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    letterSpacing: '0.2rem',
    lineHeight: '18rem',
    width: '260rem',
    textAlign: 'center',
    marginTop: '7vrem',
  },
});
