import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    padding: '$spacingExtraNormal',
    borderColor: Colors.seperatorColor,
    // borderBottomWidth: 1,
    marginBottom: '$spacingMediumHuge',
    backgroundColor: Colors.white,
    zIndex: 10,
  },
  container2: {
    paddingVertical: '$spacingMedium',
    marginBottom: 0,
    paddingHorizontal: '$spacingNormal',
    height: '56rem',
    justifyContent: 'center',
  },
  title: {
    color: Colors.titleText,
    fontSize: '$fontExtraNormal',
    fontFamily: Fonts.medium,
    marginTop: '$spacingMedium',
  },
  subTitle: {
    color: Colors.subTitleText,
    fontSize: '$fontTiny',
    letterSpacing: '0.2rem',
    fontFamily: Fonts.regular,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: '12vrem',
  },
  type1Title: {
    color: Colors.titleText,
    fontSize: '$fontNormal',
    fontFamily: Fonts.medium,
    marginLeft: '$spacingNormal',
  },
  headerRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerShadow: {
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  bottomBorder: {
    borderBottomWidth: '1rem',
    borderBottomColor: Colors.seperatorColor,
  },
});
