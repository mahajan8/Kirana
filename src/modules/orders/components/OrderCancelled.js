import React from 'react';
import {View, Text, Pressable} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/orderCancelStyles';
import OrderCancel from '../../../assets/images/error_image.svg';
import Back from '../../../assets/images/back-arrow.svg';
import {Actions} from 'react-native-router-flux';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';

const OrderCancelled = (props) => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <Pressable onPress={Actions.pop} style={styles.backIcon}>
          <Back />
        </Pressable>
        <OrderCancel />
        <Text style={styles.heading}>{Strings.orderCancelHeading}</Text>
        <Text style={styles.desc}>{Strings.orderCancelDesc}</Text>
      </View>
      <Button
        label={Strings.tryOtherStores}
        onPress={() => Actions.alternativeStores()}
        Style={styles.buttonStyle}
      />
    </SafeArea>
  );
};

export default OrderCancelled;
