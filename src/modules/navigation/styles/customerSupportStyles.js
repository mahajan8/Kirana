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
  helpText: {
    fontSize: '12rem',
    fontWeight: '500',
    color: Colors.darkGreen,
  },
  helpOptionContainer: {
    paddingHorizontal: '20rem',
  },
  imageContainer: {
    width: '40rem',
    height: '40vrem',
    borderRadius: '6rem',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20rem',
  },
  helpOptionTitle: {
    fontSize: '14rem',
    fontWeight: '500',
    color: Colors.titleText,
  },
  helpOptionSub: {
    fontSize: '12rem',
    fontWeight: '100',
    color: Colors.lightGray,
  },
  helpOptionTextContainer: {
    flex: 1,
  },
  seperator: {
    height: '1vrem',
    backgroundColor: Colors.seperatorColor,
    marginVertical: '20vrem',
    marginHorizontal: '20rem',
  },
});
