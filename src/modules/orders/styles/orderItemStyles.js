import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: '16rem',
    flexDirection: 'row',
  },
  itemCount: {
    color: Colors.themeGreen,
    fontSize: '13rem',
    fontFamily: Fonts.semiBold,
    letterSpacing: '-0.22rem',
    alignSelf: 'center',
    width: '32rem',
  },
  itemImage: {
    width: '65rem',
    height: '65rem',
    borderRadius: '8rem',
    marginRight: '12rem',
  },
  itemName: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    lineHeight: '18rem',
    color: Colors.titleText,
    width: '170rem',
    paddingTop: '3rem',
    marginBottom: '3rem',
  },
  itemWeight: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.2rem',
    color: Colors.subTitleText,
  },
  itemPrice: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    textAlign: 'right',
    alignSelf: 'center',
    flex: 1,
  },
  viewOriginal: {
    fontSize: '10rem',
    fontFamily: Fonts.medium,
    letterSpacing: '0.07rem',
    color: Colors.themeGreen,
    marginLeft: '4rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seperator: {
    height: '9vrem',
    width: '1rem',
    backgroundColor: Colors.lightGray,
    marginHorizontal: '6rem',
  },
});
