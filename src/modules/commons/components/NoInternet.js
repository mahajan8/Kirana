import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import SafeArea from './SafeArea';
import NoInternetImage from '../../../assets/images/no_internet.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from './Button';

const NoInternet = (props) => {
  return (
    <SafeArea statusBarColor={Colors.lightGreen}>
      <View style={styles.container}>
        <NoInternetImage />
        <Text style={styles.noInternetTitle}>{Strings.noConnection}</Text>
        <Text style={styles.noInternetSub}>{Strings.noInternetSub}</Text>
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
    marginTop: '83vrem',
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

export default NoInternet;