import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingTop: '$spacingNormal',
  },
  list: {
    paddingHorizontal: '$spacingNormal',
    flexGrow: 1,
    paddingTop: '$spacingExtraNormal',
  },
  listEmptyContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listEmptyHeadline: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    lineHeight: '$spacingExtraNormal',
    letterSpacing: '0.18rem',
    textAlign: 'center',
    color: Colors.titleText,
    marginTop: '$spacingLessHuge',
    width: '220rem',
  },
  headline: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    letterSpacing: '-0.19rem',
    marginBottom: '$spacingExtraNormal',
    lineHeight: '$spacingNormalMedium',
  },
});
