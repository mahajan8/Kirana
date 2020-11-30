import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    alignItems: 'center',
  },
  introImageBackground: {
    height: '265vrem',
    width: '100%',
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
    paddingTop: '55rem',
    marginBottom: '24vrem',
  },
  introTitle: {
    color: '#333333',
    fontSize: '16rem',
    fontWeight: 'bold',
    marginBottom: '10vrem',
    textAlign: 'center',
  },
  introSubText: {
    color: Colors.subTitleText,
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    lineHeight: '18rem',
    maxWidth: '290rem',
    textAlign: 'center',
    fontWeight: '100',
  },
  activeDotStyle: {
    width: '6rem',
    height: '6vrem',
    borderRadius: '3rem',
    backgroundColor: Colors.themeGreen,
    justifyContent: 'space-between',
  },
  buttonStyle: {
    marginTop: '140vrem',
  },
  paginationContainer: {
    paddingVertical: 0,
    marginTop: '24rem',
  },
  ownStore: {
    lineHeight: '18rem',
    fontSize: '12rem',
    color: '#424242',
    alignSelf: 'center',
    marginTop: '20vrem',
    fontWeight: '500',
  },
  greenText: {
    color: Colors.themeGreen,
  },
});
