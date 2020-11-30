import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import SafeArea from './SafeArea';
import ErrorImage from '../../../assets/images/error_image.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from './Button';

const ErrorScreen = (props) => {
  return (
    <SafeArea statusBarColor={Colors.lightGreen}>
      <View style={styles.container}>
        <ErrorImage />
        <Text style={styles.noInternetTitle}>{Strings.oops}</Text>
        <Text style={styles.noInternetSub}>{Strings.somethingWentWrong}</Text>
        <Button
          label={Strings.refresh}
          Style={styles.buttonStyle}
          labelStyle={styles.buttonLabel}
        />
      </View>
    </SafeArea>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginTop: '142vrem',
    alignItems: 'center',
  },
  noInternetTitle: {
    fontWeight: '900',
    color: Colors.titleText,
    fontSize: '14rem',
    letterSpacing: '0.18rem',
    marginTop: '40vrem',
  },
  noInternetSub: {
    fontWeight: '100',
    color: Colors.darkGray,
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    lineHeight: '18rem',
    marginTop: '7vrem',
    marginBottom: '22vrem',
  },
  buttonStyle: {
    height: '36vrem',
    width: '92rem',
  },
  buttonLabel: {
    fontSize: '12rem',
    letterSpacing: '0.09rem',
  },
});

export default ErrorScreen;
