import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: '18rem',
  },
  bubblesContainer: {
    paddingVertical: '10vrem',
    paddingHorizontal: '16rem',
    marginBottom: '8rem',
    backgroundColor: Colors.white,
    elevation: 3,
    flexWrap: 'wrap',
  },
  scrollContainer: {
    backgroundColor: '#f7f7f7',
  },
  bubble: {
    paddingVertical: '5vrem',
    paddingHorizontal: '12rem',
    marginRight: '6rem',
    backgroundColor: '#ecf6ff',
    borderRadius: '16rem',
    marginBottom: '10vrem',
    marginTop: '10rem',
  },
  bubbleLabel: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    letterSpacing: '-0.18rem',
  },
  listContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '15vrem',
    paddingLeft: '16rem',
    marginBottom: '8vrem',
  },
  listLoaderContainer: {
    marginTop: '20vrem',
  },
});
