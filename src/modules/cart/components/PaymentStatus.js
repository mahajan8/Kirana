import React, {useEffect, useRef} from 'react';
import {View, Text, BackHandler} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/paymentStatusStyles';
import PaymentSuccess from '../../../assets/images/payment_success.svg';
import PaymentFailed from '../../../assets/images/payment_failed.svg';
import {Strings} from '../../../utils/values/Strings';
import BottomButton from '../../commons/components/BottomButton';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {setSelectedOrderId} from '../../orders/OrderActions';

const PaymentStatus = (props) => {
  let {success, orderId} = props;
  let backHandler = useRef(null);

  const handleBackPress = () => {
    if (success) {
      Actions.popTo('_home');
    } else {
      Actions.pop();
    }
  };

  useEffect(() => {
    backHandler.current = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        handleBackPress();
        return true;
      },
    );
    return () => {
      backHandler.current.remove();
    };
  });

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
      <BottomButton
        label={success ? Strings.gotIt : Strings.tryAgain}
        onPress={() => {
          if (success) {
            Actions.trackOrder();
            props.setSelectedOrderId(orderId);
          } else {
            Actions.pop();
          }
        }}
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setSelectedOrderId,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentStatus);
