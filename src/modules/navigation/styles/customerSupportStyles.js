import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    backgroundColor: Colors.lightBlue,
    justifyContent: 'space-between',
    paddingLeft: '$spacingExtraNormal',
    paddingRight: '$spacingNormal',
    paddingVertical: '$spacingSmallExtreme',
    marginBottom: '$spacingLessHuge',
  },
  helpText: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.darkGreen,
  },
  helpOptionContainer: {
    paddingHorizontal: '$spacingExtraNormal',
  },
  imageContainer: {
    width: '$spacingExtraHuge',
    height: '$spacingExtraHuge',
    borderRadius: '$spacingSmallExtreme',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '$spacingExtraNormal',
  },
  helpOptionTitle: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  helpOptionSub: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.lightGray,
  },
  helpOptionTextContainer: {
    flex: 1,
  },
  seperator: {
    height: '1vrem',
    backgroundColor: Colors.seperatorColor,
    marginVertical: '$spacingExtraNormal',
    marginHorizontal: '$spacingExtraNormal',
  },
});
