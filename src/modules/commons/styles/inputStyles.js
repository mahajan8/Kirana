import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '$spacingMediumHuge',
  },
  textInput: {
    fontSize: '$fontNormal',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    marginVertical: '$spacingNormal',
    marginHorizontal: '$spacingNormal',
    lineHeight: '$spacingExtraNormal',
    ...(Platform.OS == 'android' && {
      paddingVertical: 0,
      paddingHorizontal: 0,
    }),
  },
  borderedContainer: {
    borderWidth: '1.2rem',
    borderRadius: '$spacingSmallExtreme',
    flex: 1,
  },
  label: {
    position: 'absolute',
    marginTop: '$spacingNormal',
    marginLeft: '$spacingExtraMedium',
    zIndex: -5,
    backgroundColor: '#FFF',
    paddingHorizontal: '$spacingTinyExtreme',
    fontFamily: Fonts.regular,
    lineHeight: '$spacingExtraNormal',
    color: Colors.grayText,
  },
  focusedLabel: {
    top: '-25rem',
    fontSize: '$fontTiny',
  },
  errorMessage: {
    fontSize: '$fontTiny',
    color: '#ea4e3c',
    letterSpacing: '0.22rem',
    fontFamily: Fonts.regular,
    marginLeft: '$spacingSmall',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '$spacingSmall',
  },
});
