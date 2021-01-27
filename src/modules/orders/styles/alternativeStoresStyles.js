import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingTop: '16vrem',
  },
  list: {
    paddingHorizontal: '$spacingNormal',
    flexGrow: 1,
    paddingTop: '20vrem',
  },
  listEmptyContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listEmptyHeadline: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    lineHeight: '21rem',
    letterSpacing: '0.18rem',
    textAlign: 'center',
    color: Colors.titleText,
    marginTop: '30vrem',
    width: '220rem',
  },
  headline: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    letterSpacing: '-0.19rem',
    marginBottom: '20vrem',
    lineHeight: '18rem',
  },
});
