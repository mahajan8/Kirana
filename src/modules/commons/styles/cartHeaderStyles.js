import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    padding: '$spacingExtraNormal',
    borderColor: Colors.seperatorColor,
    paddingLeft: '$spacingExtraNormal',
    paddingRight: '$spacingNormal',
    paddingVertical: '$spacingNormal',
    backgroundColor: '#FFF',
    zIndex: 10,
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
    marginLeft: '$spacingSmallExtreme',
    marginRight: '$spacingSuperSmall',
  },
  headerRightContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContainer: {
    marginLeft: '$spacingTiny',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: '$spacingNormal',
    borderRadius: '8rem',
    height: '40vrem',
    flex: 1,
    marginRight: '$spacingSuperSmall',
  },
  textInput: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    marginHorizontal: '$spacingSuperSmall',
    ...(Platform.OS === 'android' && {
      paddingVertical: 0,
      paddingHorizontal: 0,
    }),
    flex: 1,
  },
  leftButton: {
    marginRight: '$spacingNormal',
  },
  headerShadow: {
    shadowOffset: {width: 0, height: 2},
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
    marginLeft: '$spacingTiny',
    flex: 1,
  },
});
