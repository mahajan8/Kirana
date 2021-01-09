import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../../utils/values/Colors';
import SafeArea from './SafeArea';
import NoInternetImage from '../../../assets/images/no_internet.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from './Button';
import {styles} from '../styles/noInternetStyles';

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

export default NoInternet;
