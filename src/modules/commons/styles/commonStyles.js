import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const commonStyles = EStyleSheet.create({
  shadow: {
    elevation: 5,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonBottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '$spacingExtraNormal',
    width: '100%',
    marginTop: '$spacingLessHuge',
  },
  hitSlop: {
    top: '$spacingMedium',
    bottom: '$spacingMedium',
    right: '$spacingMedium',
    left: '$spacingMedium',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  bottomButtonContainer: {
    width: '100%',
    paddingTop: '$spacingSuperSmall',
    bottom: 0,
    backgroundColor: Colors.white,
    paddingBottom: '$spacingExtraNormal',
  },
});
