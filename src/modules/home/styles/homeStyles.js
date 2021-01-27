import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingTop: '$spacingNormal',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingLeft: '$spacingNormal',
    borderRadius: '$spacingSmall',
    height: '$spacingExtraHuge',
    marginBottom: '$spacingExtraNormal',
  },
  textInput: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.grayText,
    marginHorizontal: '$spacingSuperSmall',
    lineHeight: '$spacingNormal',
  },
  nearbyText: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    marginBottom: '$spacingTinyExtreme',
  },
  list: {
    paddingHorizontal: '$spacingNormal',
    flexGrow: 1,
    paddingBottom: '$spacingSuperSmall',
  },
  listEmptyContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listEmptyHeadline: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    lineHeight: '$spacingSuperNormal',
    letterSpacing: '0.18rem',
    textAlign: 'center',
    color: Colors.titleText,
    marginTop: '$spacingLessHuge',
    width: '220rem',
  },
  listEmptyButton: {
    height: '$spacingExtraHuge',
    width: '200rem',
    marginTop: '$spacingExtraHuge',
  },
});
