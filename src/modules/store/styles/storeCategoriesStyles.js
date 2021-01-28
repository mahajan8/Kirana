import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  stickySearchBar: {
    width: '100%',
    position: 'absolute',
    // top: 0,
    zIndex: 2,
    paddingHorizontal: '$spacingNormal',
    backgroundColor: Colors.white,
    paddingVertical: '$spacingSmallExtreme',
  },
  searchContainer: {
    paddingLeft: '$spacingNormal',
    paddingRight: '$spacingMedium',
    paddingVertical: '$spacingSuperSmall',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: '$spacingSmall',
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 5,
  },
  searchText: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.regular,
    color: '#979797',
    flex: 1,
    marginLeft: '$spacingExtraMedium',
  },
});
