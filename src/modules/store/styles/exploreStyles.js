import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  searchContainer: {
    paddingHorizontal: '$spacingNormal',
    paddingVertical: '$spacingNormal',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchProduct: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    color: Colors.grayText,
    flex: 1,
    marginLeft: '$spacingMedium',
  },
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  heading: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    letterSpacing: '-0.1rem',
    color: Colors.titleText,
    margin: '$spacingNormal',
  },
  categoryContainer: {
    backgroundColor: Colors.white,
    height: '174rem',
    width: '174rem',
    justifyContent: 'space-between',
    marginRight: '$spacingTiny',
    marginBottom: '$spacingTiny',
  },
  categoryImage: {
    alignSelf: 'flex-end',
    height: '100%',
    width: '100%',
  },
  categoryName: {
    fontSize: '$fontNormal',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.13rem',
    color: Colors.titleText,
    margin: '$spacingNormal',
    position: 'absolute',
    bottom: 0,
  },
  list: {
    marginLeft: '$spacingTiny',
    flexGrow: 1,
  },
});
