import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '35rem',
    height: '54rem',
    borderWidth: '1.2rem',
    borderRadius: '5rem',
    borderColor: Colors.borderGray,
    paddingHorizontal: '16rem',
    paddingVertical: '15rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: '15rem',
    lineHeight: '20rem',
    color: Colors.grayText,
  },
  downArrow: {
    fontSize: '10rem',
    color: Colors.grayText,
    transform: [{scaleX: 2}, {rotate: '180deg'}],
    textAlignVertical: 'center',
  },
  selectedText: {
    color: Colors.titleText,
    fontFamily: Fonts.medium,
  },
  selectedLabel: {
    position: 'absolute',
    fontSize: '13rem',
    marginLeft: '14rem',
    backgroundColor: '#FFF',
    paddingHorizontal: '2rem',
    lineHeight: '16rem',
    top: '-10rem',
    color: Colors.themeGreen,
  },
});
