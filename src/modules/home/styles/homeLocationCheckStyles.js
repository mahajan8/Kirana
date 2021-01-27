import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: '$spacingExtraNormal',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderRadius: '$spacingNormal',
    paddingTop: '$spacingLessHuge',
    alignItems: 'center',
  },
  title: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.darkGreen,
    marginBottom: '$spacingSuperSmall',
  },
  subText: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.subTitleText,
    lineHeight: '$spacingExtraNormal',
    letterSpacing: '0.2rem',
    marginBottom: '$spacingExtraNormal',
    textAlign: 'center',
    width: '250rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '$spacingSuperSmall',
    width: '100%',
    justifyContent: 'center',
  },
  locaitonIcon: {
    marginBottom: '$spacingLarge',
  },
  seperator: {
    width: '100%',
    height: '1vrem',
    backgroundColor: Colors.seperatorColor,
  },
  buttonsText: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    letterSpacing: '0.2rem',
    marginLeft: '$spacingSmallExtreme',
  },
  searchText: {
    color: Colors.titleText,
    fontFamily: Fonts.medium,
  },
});
