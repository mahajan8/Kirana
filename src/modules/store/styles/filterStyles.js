import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  clearAllButton: {
    width: '75rem',
    height: '30vrem',
    borderRadius: '6rem',
  },
  clearAllLabel: {
    fontSize: '10rem',
    letterSpacing: '0.07rem',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  filterContainer: {
    width: '100rem',
    backgroundColor: Colors.lightBlue,
    paddingTop: '9vrem',
    paddingHorizontal: '16rem',
  },
  filterName: {
    fontSize: '14rem',
    fontFamily: Fonts.regular,
    color: Colors.subTitleText,
  },
  selectedFilterName: {
    fontFamily: Fonts.medium,
    color: '#1b1f21',
  },
  filterNameContainer: {
    paddingVertical: '13vrem',
  },
  listContainer: {
    paddingVertical: '10vrem',
    paddingHorizontal: '20rem',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '15vrem',
  },
  itemSeperator: {
    height: '1vrem',
    backgroundColor: Colors.seperatorColor,
  },
  optionsText: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    lineHeight: '16rem',
    letterSpacing: '-0.1rem',
    color: Colors.subTitleText,
    marginLeft: '12rem',
  },
  seletedOption: {
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  buttonContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '15vrem',
  },
  listOuterContainer: {
    flex: 1,
  },
});
