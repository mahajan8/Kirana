import React from 'react';
import {View, Text} from 'react-native';
import {getKeyByValue} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {orderStatus, orderStatusLabels} from '../../../utils/values/Values';
import Button from '../../commons/components/Button';
import {styles} from '../styles/currentOrdersStyle';

let orders = [1];

const CurrentOrders = () => {
  const renderTrackingCircle = () => (
    <View style={styles.trackingCircleContainer}>
      <View style={styles.line} />
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.dottedLine} />
    </View>
  );

  let multiple = orders.length > 1 ? true : false;

  return (
    <View style={[styles.container]}>
      {renderTrackingCircle()}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          {Strings.yourOrderIs}: {getKeyByValue(orderStatusLabels, 20)}
        </Text>
        <Text style={styles.subTitle}>The Baker's Dozen</Text>
      </View>
      <Button
        label={multiple ? Strings.viewOrders : Strings.trackOrder}
        Style={styles.buttonStyle}
        bordered
        labelStyle={styles.buttonLabel}
      />
    </View>
  );
};

export default CurrentOrders;
