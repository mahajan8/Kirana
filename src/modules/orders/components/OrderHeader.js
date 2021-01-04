import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../orders/styles/orderHeaderStyles';
import Back from '../../../assets/images/back-arrow.svg';
import InfoIcon from '../../../assets/images/red_info.svg';
import {Strings} from '../../../utils/values/Strings';
import OrderAddressTile from './OrderAddressTile';
import {orderStatus, orderStatusLabels} from '../../../utils/values/Values';
import {getKeyByValue} from '../../../utils/utility/Utils';
import moment from 'moment';

let orderStatusList = [
  {
    orderStatus: orderStatus.ORDER_PLACED,
    backgroundColor: '#cde4ff',
    borderColor: '#b9daff',
    labelColor: '#014085',
  },
  {
    orderStatus: orderStatus.ORDER_ACCEPTED,
    backgroundColor: '#fff3cd',
    borderColor: '#feebae',
    labelColor: '#856305',
  },
  {
    orderStatus: orderStatus.ORDER_DISPATCHED,
    backgroundColor: '#d1ecf1',
    borderColor: '#b5e4eb',
    labelColor: '#0b5460',
  },
  {
    orderStatus: orderStatus.ORDER_DELIVERED,
    backgroundColor: '#d5edda',
    borderColor: '#c2e6cb',
    labelColor: '#155824',
  },
  {
    orderStatus: orderStatus.ORDER_REJECTED,
    backgroundColor: '#f8d7da',
    borderColor: '#da9fa4',
    labelColor: '#731c23',
  },
];

const OrderHeader = (props) => {
  let {
    status,
    infoLabel,
    refund,
    refundComplete,
    id,
    created_on,
    store_location,
    store_name,
    delivery_address_location,
  } = props.item;

  const getOrderStatusBubble = (index = 0) => {
    let order = orderStatusList.find((obj) => obj.orderStatus === status);
    if (order) {
      let containerStyle = {
        backgroundColor: order.backgroundColor,
        borderColor: order.borderColor,
      };
      let labelStyle = {
        color: order.labelColor,
      };

      return (
        <View style={[styles.orderStatusContainer, containerStyle]}>
          <Text style={[styles.statusLabel, labelStyle]}>
            {getKeyByValue(orderStatusLabels, order.orderStatus)}
          </Text>
        </View>
      );
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.orderInfoRow}>
          <View style={styles.orderDetails}>
            <Pressable>
              <Back />
            </Pressable>
            <Text style={styles.orderId} numberOfLines={1}>
              {Strings.orderId} - {id}
            </Text>
            <Text style={styles.orderTime}>
              {moment(created_on).format('lll')}
            </Text>
            {(refund || refundComplete) &&
              getOrderStatusBubble(refundComplete ? 6 : 5)}
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
          <OrderAddressTile
            storeName={store_name}
            storeLocation={store_location.formatted_address}
            deliveryLocation={delivery_address_location.formatted_address}
          />
        </View>
      </View>
    </View>
  );
};

export default OrderHeader;
