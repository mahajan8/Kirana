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
    paddingTop: '22vrem',
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
    marginBottom: '26vrem',
  },
  listContainer: {
    paddingVertical: '24vrem',
    paddingHorizontal: '20rem',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemSeperator: {
    height: '1vrem',
    backgroundColor: Colors.seperatorColor,
    marginVertical: '15vrem',
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
});