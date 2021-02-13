import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  addButton: {
    height: '$spacingLessHuge',
    width: '110rem',
    borderRadius: '$spacingSmallExtreme',
  },
  buttonLabel: {
    fontSize: '$fontSuperTiny',
  },
  addressBox: {
    marginHorizontal: '$spacingNormal',
    paddingHorizontal: '$spacingExtraNormal',
    paddingVertical: '$spacingNormal',
    marginTop: '$spacingNormal',
    backgroundColor: Colors.white,
    borderRadius: '$spacingSmallExtreme',
    shadowOffset: {width: 0, height: 0},
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  addressType: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
  },
  locationText: {
    fontSize: '$fontTiny',
    color: Colors.darkGray,
    fontFamily: Fonts.regular,
    marginTop: '$spacingTiny',
    marginBottom: '$spacingMedium',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    width: null,
    paddingHorizontal: '$spacingNormal',
    height: '$spacingLessHuge',
    marginRight: '$spacingSmallExtreme',
    borderRadius: '$spacingSmallExtreme',
  },
  noAddressText: {
    marginTop: '$spacingLessHuge',
    marginBottom: '$spacingExtraHuge',
    color: Colors.titleText,
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    lineHeight: '$spacingExtraNormal',
    letterSpacing: '0.18rem',
    width: '203rem',
    textAlign: 'center',
  },
  noAddressContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noAddressButton: {
    width: '204rem',
    height: '$spacingExtraHuge',
  },
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fafafa',
  },
  list: {
    paddingBottom: '$spacingExtraNormal',
    // flex: 1,
    flexGrow: 1,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: '$spacingExtraNormal',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderRadius: '$spacingNormal',
    paddingVertical: '$spacingExtraNormal',
    paddingHorizontal: '$spacingLessHuge',
  },
  deleteTitle: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.darkGreen,
    marginBottom: '$spacingSuperSmall',
  },
  deleteDesc: {
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    lineHeight: '$spacingExtraNormal',
    letterSpacing: '0.2rem',
    color: Colors.subTitleText,
    marginBottom: '$spacingExtraNormal',
  },
  modalButton: {
    borderRadius: '$spacingSmallExtreme',
    width: '122rem',
    height: '$spacingMediumHuge',
  },
  modalButtonLabel: {
    fontSize: '$fontSuperTiny',
  },
  modalButtonsContainer: {
    justifyContent: 'space-between',
  },
  addressTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
