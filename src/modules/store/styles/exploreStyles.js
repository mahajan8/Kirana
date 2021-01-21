import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  searchContainer: {
    paddingHorizontal: '16rem',
    paddingVertical: '15rem',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchProduct: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.grayText,
    flex: 1,
    marginLeft: '12rem',
  },
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  heading: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    letterSpacing: '-0.1rem',
    color: Colors.titleText,
    margin: '16rem',
  },
  categoryContainer: {
    backgroundColor: Colors.white,
    height: '174rem',
    width: '174rem',
    justifyContent: 'space-between',
    marginRight: '4rem',
    marginBottom: '4vrem',
  },
  categoryImage: {
    alignSelf: 'flex-end',
    height: '100%',
    width: '100%',
  },
  categoryName: {
    fontSize: '15rem',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.13rem',
    color: Colors.titleText,
    margin: '16rem',
    position: 'absolute',
    bottom: 0,
  },
  list: {
    marginLeft: '4rem',
    flexGrow: 1,
  },
});
