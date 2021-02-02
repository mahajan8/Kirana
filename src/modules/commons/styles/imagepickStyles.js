import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingBottom: '$spacingSuperNormal',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: '5rem',
    paddingHorizontal: '$spacingExtraNormal',
    paddingTop: '$spacingNormal',
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '$spacingExtraNormal',
  },
  titleText: {
    color: Colors.darkGreen,
    lineHeight: '$spacingLarge',
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
  },
  optionsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '$spacingLessHuge',
  },
  optionsText: {
    color: Colors.darkGray,
    fontSize: '$fontTiny',
    marginLeft: '$spacingMedium',
    fontFamily: Fonts.medium,
  },
});
