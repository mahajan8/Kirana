import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    padding: '20rem',
    borderColor: Colors.seperatorColor,
    paddingLeft: '20rem',
    paddingRight: '16rem',
    paddingVertical: '15rem',
    backgroundColor: '#FFF',
  },
  subTitle: {
    color: Colors.subTitleText,
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    fontFamily: Fonts.regular,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: '12vrem',
  },
  locationTitle: {
    color: Colors.titleText,
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    marginLeft: '6rem',
    marginRight: '10rem',
  },
  headerRightContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContainer: {
    marginLeft: '4rem',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: '16rem',
    borderRadius: '8rem',
    height: '40vrem',
    flex: 1,
    marginRight: '10rem',
  },
  textInput: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    marginHorizontal: '10rem',
    lineHeight: '20rem',
    ...(Platform.OS == 'android' && {
      paddingVertical: 0,
      paddingHorizontal: 0,
    }),
    flex: 1,
  },
  leftButton: {
    marginRight: '16rem',
  },
  headerShadow: {
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: Colors.titleText,
    fontSize: '16rem',
    fontFamily: Fonts.medium,
    marginLeft: '4rem',
    flex: 1,
  },
});
