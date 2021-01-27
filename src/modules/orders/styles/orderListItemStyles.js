import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  sectionHeaderContainer: {
    backgroundColor: Colors.lightBlue,
    paddingLeft: '$spacingNormal',
    paddingVertical: '8vrem',
    width: '100%',
  },
  sectionName: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  orderContainer: {
    padding: '$spacingNormal',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    marginBottom: '16vrem',
  },
  detailText: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  icons: {
    marginRight: '10rem',
  },
  name: {
    fontSize: '11rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  locationText: {
    fontFamily: Fonts.regular,
    fontSize: '9rem',
    color: Colors.lightGray,
    width: '118rem',
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
    marginHorizontal: '$spacingNormal',
    borderRadius: 1,
    borderColor: Colors.darkGray,
  },
  listLoaderContainer: {
    marginTop: '20vrem',
  },
});
