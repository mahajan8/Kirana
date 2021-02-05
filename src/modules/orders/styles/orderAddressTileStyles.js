import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    marginRight: '$spacingSuperSmall',
  },
  name: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    width: '120rem',
  },
  locationText: {
    fontFamily: Fonts.regular,
    fontSize: '$fontSuperTiny',
    color: Colors.lightGray,
    width: '120rem',
  },
  storeDetailsContainer: {
    flex: 1,
  },
  seperator: {
    height: '1vrem',
    backgroundColor: '#cacaca',
    width: '100%',
    marginTop: '$spacingExtraMedium',
    marginBottom: '$spacingSuperSmall',
  },
  dottedLine: {
    height: '100%',
    borderWidth: 0.8,
    borderStyle: 'dashed',
    marginHorizontal: '$spacingNormal',
    borderRadius: 1,
    borderColor: Colors.darkGray,
  },
});
