import React from 'react';
import {View, Text} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/paymentStatusStyles';
import PaymentSuccess from '../../../assets/images/stores_empty_image.svg';
import {Strings} from '../../../utils/values/Strings';

const PaymentStatus = (props) => {
  let {success} = props;
  return (
    <SafeArea>
      <View style={styles.container}>
        <PaymentSuccess />
        <Text style={styles.title}>
          {success ? Strings.paymentSuccess : Strings.paymentFailed}
        </Text>
        <Text style={styles.subTitle}>
          {success ? Strings.paymentSuccessSub : Strings.paymentFailedSub}
        </Text>
      </View>
    </SafeArea>
  );
};

export default PaymentStatus;
