import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

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
    fontWeight: '100',
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
    fontWeight: '900',
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
    height: '100rem',
    width: '100rem',
  },
  categoryName: {
    fontSize: '15rem',
    fontWeight: '500',
    letterSpacing: '-0.13rem',
    color: Colors.titleText,
    margin: '16rem',
  },
  list: {
    marginLeft: '4rem',
    flexGrow: 1,
  },
});
