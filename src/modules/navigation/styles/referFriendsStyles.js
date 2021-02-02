import EStyleSheet from 'react-native-extended-stylesheet';
import {Fonts} from '../../../utils/values/Fonts';
const {Colors} = require('../../../utils/values/Colors');

export const styles = EStyleSheet.create({
  imageContainer: {
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
    paddingVertical: '$spacingExtraHuge',
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
  },
  referHeadline: {
    color: Colors.titleText,
    fontFamily: Fonts.semiBold,
    fontSize: '$fontNormal',
    textAlign: 'center',
    width: '285rem',
    marginTop: '$spacingExtraHuge',
  },
  referSub: {
    color: Colors.darkGray,
    fontFamily: Fonts.regular,
    fontSize: '$fontTiny',
    lineHeight: '$spacingNormalMedium',
    letterSpacing: '0.2rem',
    textAlign: 'center',
    width: '310rem',
    marginTop: '$spacingNormal',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '$spacingLessHuge',
    width: '100%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '$spacingExtraNormal',
    marginBottom: '$spacingLessHuge',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    width: '155rem',
  },
  seeInvites: {
    fontSize: '$fontNormal',
    letterSpacing: '-0.12rem',
    color: Colors.themeGreen,
    fontFamily: Fonts.medium,
  },
  backButton: {
    position: 'absolute',
    left: '$spacingExtraNormal',
    top: '$spacingExtraNormal',
  },
});
