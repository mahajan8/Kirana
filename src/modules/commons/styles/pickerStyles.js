import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: '15rem',
    borderTopRightRadius: '15rem',
    maxHeight: '560vrem',
    overflow: 'hidden',
  },
  container: {
    alignSelf: 'center',
    marginTop: '35rem',
    width: '90%',
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
  titleView: {
    backgroundColor: Colors.lightGreen,
    paddingVertical: '14vrem',
    paddingHorizontal: '20rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '16rem',
    lineHeight: '24rem',
    fontFamily: Fonts.medium,
    color: Colors.darkGreen,
  },
  listStyle: {
    width: '90%',
    alignSelf: 'center',
  },
  itemName: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.subTitleText,
    letterSpacing: '0.1rem',
  },
  itemBox: {
    paddingBottom: '30rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listHeaderContainer: {
    height: '24vrem',
  },
});
