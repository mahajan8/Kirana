import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: '$spacingNormal',
    borderTopRightRadius: '$spacingNormal',
    overflow: 'hidden',
    maxHeight: '576vrem',
    paddingBottom: '$spacingExtraNormal',
  },
  titleView: {
    paddingHorizontal: '$spacingExtraNormal',
    paddingVertical: '$spacingExtraMedium',
    backgroundColor: Colors.lightGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '$spacingExtraNormal',
  },
  titleText: {
    fontFamily: Fonts.medium,
    fontSize: '$spacingNormal',
    color: Colors.darkGreen,
    lineHeight: '$spacingLarge',
  },
});
