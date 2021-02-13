import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  innerContainer: {
    height: '90%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: '$spacingNormal',
    borderTopRightRadius: '$spacingNormal',
    overflow: 'hidden',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '$spacingExtraMedium',
    paddingHorizontal: '$spacingExtraNormal',
    backgroundColor: Colors.lightGreen,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: '$fontNormal',
    fontFamily: Fonts.medium,
    lineHeight: '$spacingLarge',
    color: Colors.darkGreen,
  },
  addressContainer: {
    paddingHorizontal: '$spacingExtraNormal',
    paddingVertical: '$spacingNormal',
    flexDirection: 'row',
  },
  radio: {
    marginRight: '$spacingSuperSmall',
    marginTop: '$spacingTinyExtreme',
  },
  addressType: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.medium,
    color: Colors.black2,
    textTransform: 'uppercase',
  },
  address: {
    marginTop: '$spacingTinyExtreme',
    fontSize: '$fontTiny',
    fontFamily: Fonts.regular,
    lineHeight: '$spacingExtraNormal',
    letterSpacing: '0.2rem',
    color: Colors.darkGray,
    flex: 1,
  },
  addNewAddress: {
    fontSize: '$fontSmall',
    fontFamily: Fonts.semiBold,
    color: Colors.themeGreen,
    marginLeft: '$spacingExtraNormal',
  },
  list: {
    paddingVertical: '$spacingNormal',
    flexGrow: 1,
  },
  addAddressButton: {
    marginVertical: '$spacingExtraMedium',
    paddingVertical: '$spacingSuperSmall',
    width: '200rem',
  },
  editContainer: {
    justifyContent: 'center',
    marginLeft: '16rem',
    fontSize: '$fontTiny',
    color: Colors.themeGreen,
    fontFamily: Fonts.semiBold,
  },
  addressDetails: {
    flex: 1,
  },
});
