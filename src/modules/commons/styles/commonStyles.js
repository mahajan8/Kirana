import EStyleSheet from 'react-native-extended-stylesheet';

export const commonStyles = EStyleSheet.create({
  shadow: {
    elevation: 3,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonBottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '20vrem',
    width: '100%',
    marginTop: '30rem',
  },
  hitSlop: {
    top: '5rem',
    bottom: '5rem',
    right: '5rem',
    left: '5rem',
  },
});
