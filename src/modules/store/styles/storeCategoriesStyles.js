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
    paddingVertical: '6rem',
  },
  searchContainer: {
    paddingLeft: '$spacingNormal',
    paddingRight: '12rem',
    paddingVertical: '9rem',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: '8rem',
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 5,
  },
  searchText: {
    fontSize: '14rem',
    fontFamily: Fonts.regular,
    color: '#979797',
    flex: 1,
    marginLeft: '13rem',
  },
});
