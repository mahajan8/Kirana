import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';

export const styles = EStyleSheet.create({
  headingContainer: {
    backgroundColor: Colors.lightBlue,
    paddingVertical: '17vrem',
    paddingHorizontal: '20rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    lineHeight: '22rem',
    color: Colors.titleText,
    width: '200rem',
  },
  ratingTitle: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    marginTop: '30vrem',
  },
  starsContainer: {
    marginTop: '13vrem',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  star: {
    marginRight: '15rem',
  },
  inputContainer: {
    height: '80vrem',
  },
  inputDelivery: {
    height: '80vrem',
    marginBottom: '30vrem',
  },
});
