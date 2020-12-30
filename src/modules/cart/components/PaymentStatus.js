import React from 'react';
import {View, Text} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/paymentStatusStyles';
import PaymentSuccess from '../../../assets/images/payment_success.svg';
import PaymentFailed from '../../../assets/images/payment_failed.svg';
import {Strings} from '../../../utils/values/Strings';
import BottomButton from '../../commons/components/BottomButton';

const PaymentStatus = (props) => {
  let {success} = props;
  return (
    <SafeArea>
      <View style={styles.container}>
        {success ? <PaymentSuccess /> : <PaymentFailed />}
        <Text style={styles.title}>
          {success ? Strings.paymentSuccess : Strings.paymentFailed}
        </Text>
        <Text style={styles.subTitle}>
          {success ? Strings.paymentSuccessSub : Strings.paymentFailedSub}
        </Text>
      </View>
      <BottomButton label={success ? Strings.gotIt : Strings.tryAgain} />
    </SafeArea>
  );
};

export default PaymentStatus;
