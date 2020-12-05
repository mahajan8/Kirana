import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

export const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    backgroundColor: Colors.lightBlue,
    justifyContent: 'space-between',
    paddingLeft: '20rem',
    paddingRight: '16rem',
    paddingVertical: '6vrem',
    marginBottom: '30vrem',
  },
  headlineText: {
    fontSize: '12rem',
    fontWeight: '500',
    color: Colors.darkGreen,
  },
  changeButton: {
    width: '75rem',
    height: '30vrem',
    borderRadius: '6rem',
    backgroundColor: Colors.lightGreen,
  },
  changeButtonLabel: {
    fontSize: '10rem',
    color: Colors.themeGreen,
  },
  container: {
    paddingTop: '20vrem',
    paddingHorizontal: '20rem',
  },
  numberContainer: {
    borderWidth: 1,
    borderRadius: '6rem',
    borderColor: Colors.borderGray,
    paddingVertical: '8vrem',
    paddingLeft: '16rem',
    paddingRight: '10rem',
    justifyContent: 'space-between',
  },
  numberLabel: {
    fontSize: '12rem',
    fontWeight: '100',
    lineHeight: '16rem',
    letterSpacing: '0.09rem',
    color: Colors.themeGreen,
  },
  number: {
    fontSize: '14rem',
    fontWeight: '500',
    color: Colors.titleText,
  },
  currentNumberRow: {
    justifyContent: 'space-between',
  },
  seperator: {
    height: '1rem',
    backgroundColor: '#cacaca',
    marginVertical: '16vrem',
  },
  currentNumberLabel: {
    fontSize: '12rem',
    fontWeight: '100',
    color: Colors.darkGray,
    lineHeight: '20rem',
  },
  currentNumber: {
    fontSize: '17rem',
    fontWeight: '500',
    color: Colors.titleText,
    lineHeight: '20rem',
  },
  heading: {
    fontSize: '12rem',
    fontWeight: '100',
    color: '#424242',
    lineHeight: '20rem',
    marginBottom: '20vrem',
  },
  input: {
    marginTop: '5vrem',
    width: '100%',
  },
  resendText: {
    marginTop: '20vrem',
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    textAlign: 'center',
  },
  coloredText: {
    color: Colors.themeGreen,
    fontWeight: '500',
  },
});
