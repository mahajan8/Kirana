import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../orders/styles/orderHeaderStyles';
import Back from '../../../assets/images/back-arrow.svg';
import InfoIcon from '../../../assets/images/red_info.svg';
import {Strings} from '../../../utils/values/Strings';
import OrderAddressTile from './OrderAddressTile';

let orderStatusList = [
  {
    label: Strings.new,
    backgroundColor: '#cde4ff',
    borderColor: '#79a8db',
    labelColor: '#014085',
  },
  {
    label: Strings.onRoute,
    backgroundColor: '#fff3cd',
    borderColor: '#e1b741',
    labelColor: '#856305',
  },
  {
    label: Strings.completed,
    backgroundColor: '#d5edda',
    borderColor: '#5dc675',
    labelColor: '#155824',
  },
  {
    label: Strings.cancelled,
    backgroundColor: '#f8d7da',
    borderColor: '#da9fa4',
    labelColor: '#731c23',
  },
  {
    label: Strings.rejected,
    backgroundColor: '#f8d7da',
    borderColor: '#da9fa4',
    labelColor: '#731c23',
  },
  {
    label: Strings.refundInProgress,
    backgroundColor: '#e4deff',
    borderColor: '#cfc7f4',
    labelColor: '#5445bd',
  },
];

const OrderHeader = (props) => {
  let {status, infoLabel} = props;

  const getOrderStatusBubble = (index = 0) => {
    let orderStatus = orderStatusList[index];
    let containerStyle = {
      backgroundColor: orderStatus.backgroundColor,
      borderColor: orderStatus.borderColor,
    };
    let labelStyle = {
      color: orderStatus.labelColor,
    };

    return (
      <View style={[styles.orderStatusContainer, containerStyle]}>
        <Text style={[styles.statusLabel, labelStyle]}>
          {orderStatus.label}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.orderInfoRow}>
          <View style={styles.orderDetails}>
            <Pressable>
              <Back />
            </Pressable>
            <Text style={styles.orderId}>{Strings.orderId} - OVXK089119</Text>
            <Text style={styles.orderTime}>12 Sep 2020, 7:00 pm</Text>
            {(status === 3 || status === 4) && getOrderStatusBubble(5)}
          </View>

          <View style={styles.rightContainer}>
            <Text style={styles.needHelp}>{Strings.needHelp}</Text>
            {getOrderStatusBubble(status)}
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        {(status === 3 || status === 4 || infoLabel) && (
          <View>
            <View style={styles.infoContainer}>
              <InfoIcon />
              <Text style={styles.infoText}>
                {status === 3
                  ? Strings.orderCancelRefundInfo
                  : status === 4
                  ? Strings.orderRejectedRefundInfo
                  : infoLabel}
              </Text>
            </View>
            <View style={styles.seperator} />
          </View>
        )}

        <View style={styles.addressContainer}>
          <OrderAddressTile />
        </View>
      </View>
    </View>
  );
};

export default OrderHeader;
