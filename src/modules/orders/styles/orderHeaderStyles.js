import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    paddingTop: '$spacingMedium',
    paddingHorizontal: '$spacingNormal',
    paddingBottom: '$spacingExtraMedium',
  },
  orderInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    marginTop: '$spacingSmall',
  },
  orderIdContainer: {
    marginTop: '$spacingSmallExtreme',
  },
  orderId: {
    fontSize: '$fontSmall',
    color: Colors.titleText,
    fontFamily: Fonts.medium,
    flex: 1,
    marginRight: '$spacingNormal',
  },
  orderTime: {
    fontSize: '$fontSuperTiny',
    color: Colors.titleText,
    fontFamily: Fonts.regular,
    marginTop: '$spacingTiny',
    marginBottom: '$spacingSmallExtreme',
  },
  needHelp: {
    fontSize: '$fontTiny',
    color: '#007934',
    fontFamily: Fonts.semiBold,
    letterSpacing: '0.24rem',
    padding: '$spacingTiny',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  orderStatusContainer: {
    borderRadius: '$spacingMedium',
    paddingHorizontal: '$spacingMedium',
    height: '$spacingSuperNormal',
    borderWidth: '0.5rem',
    justifyContent: 'center',
  },
  bubbleContainer: {
    alignItems: 'flex-start',
  },
  statusLabel: {
    fontFamily: Fonts.regular,
    fontSize: '$fontSuperTiny',
  },
  addressContainer: {
    paddingVertical: '$spacingExtraNormal',
  },
  infoContainer: {
    paddingVertical: '$spacingExtraMedium',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: '$spacingNormal',
  },
  bottomContainer: {
    paddingHorizontal: '$spacingNormal',
  },
  infoText: {
    marginLeft: '$spacingSuperSmall',
    fontSize: '$fontSuperTiny',
    fontFamily: Fonts.regular,
    letterSpacing: '0.1rem',
    lineHeight: '$spacingNormal',
    color: '#e96c76',
  },
  seperator: {
    height: '1vrem',
    backgroundColor: Colors.seperatorColor,
    width: '100%',
  },
});
