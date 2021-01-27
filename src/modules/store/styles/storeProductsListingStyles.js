import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '13rem',
  },
  listLabel: {
    fontFamily: Fonts.medium,
    fontSize: '12rem',
    color: Colors.titleText,
    letterSpacing: '-0.17rem',
  },
  viewMoreButton: {
    paddingVertical: '4vrem',
    paddingHorizontal: '3rem',
  },
  viewMore: {
    fontFamily: Fonts.medium,
    fontSize: '11rem',
    color: Colors.themeGreen,
  },
  listContainer: {
    backgroundColor: Colors.white,
    paddingBottom: '15vrem',
    paddingTop: '11vrem',
    paddingLeft: '$spacingNormal',
    borderBottomWidth: '1rem',
    borderColor: Colors.listBorderGray,
    borderTopWidth: '1rem',
  },
  productContainer: {
    marginTop: '12vrem',
    marginRight: '30rem',
    width: '110rem',
    height: '220vrem',
    backgroundColor: Colors.lightStatusBar,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAllButton: {
    width: '79rem',
    height: '31vrem',
    borderRadius: '2rem',
    borderColor: Colors.themeGreen,
    backgroundColor: 'transparent',
  },
  viewAllLabel: {
    fontSize: '11rem',
  },
  seperator: {
    height: '8vrem',
    backgroundColor: '#f7f7f7',
  },
});
