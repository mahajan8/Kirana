import React from 'react';
import {View, Text} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/paymentStatusStyles';
import PaymentSuccess from '../../../assets/images/stores_empty_image.svg';
import {Strings} from '../../../utils/values/Strings';

const PaymentStatus = () => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <PaymentSuccess />
        <Text>{Strings.paymentSuccess}</Text>
      </View>
    </SafeArea>
  );
};

export default PaymentStatus;
