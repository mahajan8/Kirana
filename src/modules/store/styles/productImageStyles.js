import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  productImage: {
    height: '170rem',
    width: '225rem',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    left: '$spacingNormal',
    top: '$spacingNormal',
    zIndex: 10,
  },
});
