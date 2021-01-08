import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../orders/styles/orderHeaderStyles';
import Back from '../../../assets/images/back-arrow.svg';
import InfoIcon from '../../../assets/images/red_info.svg';
import {Strings} from '../../../utils/values/Strings';
import OrderAddressTile from './OrderAddressTile';
import {
  orderStatus,
  orderStatusBubbles,
  orderStatusLabels,
  paymentStatus,
  paymentStatusLabels,
} from '../../../utils/values/Values';
import {getKeyByValue} from '../../../utils/utility/Utils';
import moment from 'moment';
import {Actions} from 'react-native-router-flux';

let paymentStatusList = [
  {
    paymentStatus: paymentStatus.REFUND_IN_PROGRESS,
    backgroundColor: '#e4deff',
    borderColor: '#cfc7f4',
    labelColor: '#5445bd',
  },
  {
    paymentStatus: paymentStatus.REFUNDED,
    backgroundColor: '#e4deff',
    borderColor: '#cfc7f4',
    labelColor: '#5445bd',
  },
];

const OrderHeader = (props) => {
  let {
    status,
    infoLabel,
    id,
    created_on,
    store_location,
    store_name,
    delivery_address_location,
    payment,
    overdue_time_limit,
  } = props.orderDetails;

  const getOrderStatusBubble = (payStatus, custom) => {
    let order = {};

    if (payStatus) {
      order = paymentStatusList.find((obj) => obj.paymentStatus === payStatus);
    } else {
      if (custom) {
        order = orderStatusBubbles.find((obj) => obj.orderStatus === custom);
      } else {
        order = orderStatusBubbles.find((obj) => obj.orderStatus === status);
      }
    }

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
            {getKeyByValue(
              payStatus ? paymentStatusLabels : orderStatusLabels,
              payStatus ? payStatus : status,
            )}
          </Text>
        </View>
      );
    }
  };

  const orderStatusInfoLabel = (label) => (
    <View>
      <View style={styles.infoContainer}>
        <InfoIcon />
        <Text style={styles.infoText}>{label}</Text>
      </View>
      <View style={styles.seperator} />
    </View>
  );

  const showLabel = () => {
    let label = null;
    let {ORDER_REJECTED, ORDER_CANCELLED} = orderStatus;

    switch (status) {
      case ORDER_REJECTED:
        label = Strings.orderRejectedRefundInfo;
        break;
      case ORDER_CANCELLED:
        label = Strings.orderCancelRefundInfo;
        break;
      default:
        label = null;
        break;
    }

    if (infoLabel) {
      return orderStatusInfoLabel(infoLabel);
    } else if (label) {
      return orderStatusInfoLabel(label);
    }
  };

  let isOverdue =
    status === orderStatus.ORDER_PLACED
      ? moment.duration({from: moment(created_on)}).asMinutes() >
        overdue_time_limit
        ? true
        : false
      : false;

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.orderInfoRow}>
          <Pressable onPress={Actions.pop}>
            <Back style={styles.backIcon} />
          </Pressable>

          <Text style={styles.needHelp}>{Strings.needHelp}</Text>
        </View>

        <View style={[styles.orderInfoRow, styles.orderIdContainer]}>
          <Text style={styles.orderId} numberOfLines={1}>
            {Strings.orderId} - {id}
          </Text>
          {getOrderStatusBubble(
            null,
            isOverdue ? orderStatus.ORDER_OVERDUE : null,
          )}
        </View>

        <Text style={styles.orderTime}>{moment(created_on).format('lll')}</Text>

        {(payment.status === paymentStatus.REFUND_IN_PROGRESS ||
          payment.status === paymentStatus.REFUNDED) &&
          getOrderStatusBubble(payment.status)}
      </View>

      <View style={styles.bottomContainer}>
        {showLabel()}

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
