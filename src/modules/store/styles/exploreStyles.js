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
    zIndex: 999,
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
    height: '168rem',
    width: '168rem',
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: '$spacingTiny',
    marginLeft: '$spacingTiny',
    marginBottom: '$spacingSmall',
  },
  categoryContainerParent: {
    elevation: 5,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 5,
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
