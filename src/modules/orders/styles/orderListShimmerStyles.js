import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  sectionHeaderContainer: {
    backgroundColor: Colors.lightBlue,
    paddingLeft: '16rem',
    paddingVertical: '8vrem',
    width: '100%',
  },
  sectionName: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  orderContainer: {
    padding: '16rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    marginBottom: '16vrem',
  },
  detailText: {
    height: '17rem',
    width: '120rem',
    backgroundColor: Colors.placeHolder,
  },
  icons: {
    marginRight: '10rem',
  },
  locationText: {
    backgroundColor: Colors.placeHolder,
    width: '118rem',
    height: '12rem',
    marginTop: '2rem',
  },
  storeDetailsContainer: {
    flex: 1,
  },
  seperator: {
    height: '1vrem',
    backgroundColor: '#cacaca',
    width: '100%',
    marginTop: '14vrem',
    marginBottom: '10vrem',
  },
  trackContainer: {
    justifyContent: 'space-between',
  },
  trackButton: {
    height: '30vrem',
    width: '92rem',
    borderRadius: '6rem',
  },
  trackLabel: {
    fontSize: '10rem',
    letterSpacing: '0.07rem',
  },
  greenText: {
    color: Colors.themeGreen,
    fontFamily: Fonts.medium,
  },
  dottedLine: {
    height: '100%',
    borderWidth: 0.8,
    borderStyle: 'dashed',
    marginHorizontal: '16rem',
    borderRadius: 1,
    borderColor: Colors.darkGray,
  },
  listLoaderContainer: {
    marginTop: '20vrem',
  },
  addressName: {
    backgroundColor: Colors.placeHolder,
    width: '100rem',
    height: '16rem',
  },
  checkIcon: {
    width: '16rem',
    height: '16rem',
    borderRadius: '8rem',
    marginRight: '8rem',
    backgroundColor: Colors.placeHolder,
  },
});
