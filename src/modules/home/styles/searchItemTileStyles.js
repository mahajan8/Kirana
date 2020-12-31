import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  productImageContainer: {
    height: '65rem',
    width: '65rem',
    borderRadius: '8rem',
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '12rem',
  },
  productImage: {
    height: '45rem',
    width: '45rem',
  },
  productName: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    lineHeight: '18rem',
    width: '160rem',
    marginBottom: '3rem',
  },
  productWeight: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.subTitleText,
    letterSpacing: '-0.2rem',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: '3rem',
  },
  price: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: '#333333',
    marginBottom: '10vrem',
  },
  quantityButton: {
    width: '20rem',
    height: '20rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderGray,
    borderRadius: '6rem',
  },
  quantityButtonIcons: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
  },
  quantityText: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    marginHorizontal: '10rem',
  },
  productDetialsContainer: {
    paddingTop: '3rem',
  },
  loader: {
    alignSelf: 'flex-end',
    marginEnd: '30rem',
  },
});
