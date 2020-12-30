import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../../utils/values/Colors';
import SafeArea from './SafeArea';
import ErrorImage from '../../../assets/images/error_image.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from './Button';
import {styles} from '../styles/errorScreenStyles';

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

export default ErrorScreen;
