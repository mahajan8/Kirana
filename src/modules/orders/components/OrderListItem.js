import React, {memo} from 'react';
import {View, Text, Pressable} from 'react-native';
import Clock from '../../../assets/images/green_clock.svg';
import GreenCheck from '../../../assets/images/green_circle_tick.svg';
import PurpleCheck from '../../../assets/images/purple_check.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {styles} from '../styles/orderListItemStyles';
import moment from 'moment';
import {Actions} from 'react-native-router-flux';
import OrderAddressTile from './OrderAddressTile';
import {setSelectedOrderId} from '../OrderActions';
import {connect} from 'react-redux';
import {ripple} from '../../../utils/utility/Utils';
import {paymentStatus} from '../../../utils/values/Values';
import {repeatOrder} from '../Api';

const OrderListItem = (props) => {
  let {item, past} = props;

  let {
    store_name,
    final_amount,
    created_on,
    store_location,
    delivery_address_location,
    delivery_address_type,
    payment,
    id,
  } = item;

  const reOrderItems = () => {
    let pars = {
      order_id: id,
    };

    props.repeatOrder(pars);
  };

  const getPaymentStatus = () => {
    let {SUCCESS, REFUNDED, REFUND_IN_PROGRESS} = paymentStatus;
    let Icon = GreenCheck;
    let label = Strings.paid;

    if (payment) {
      switch (payment.status) {
        case SUCCESS:
          Icon = GreenCheck;
          label = Strings.paid;
          break;
        case REFUND_IN_PROGRESS:
          Icon = PurpleCheck;
          label = Strings.refundInProgress;
          break;
        case REFUNDED:
          Icon = PurpleCheck;
          label = Strings.refundComplete;
          break;
      }
    }

    return (
      <View style={styles.rowContainer}>
        <Icon style={styles.icons} />

        <Text style={styles.detailText}>
          {label}
          <Text style={styles.greenText}>
            {'  '}
            {Strings.currency} {final_amount}
          </Text>
        </Text>
      </View>
    );
  };

  return (
    <Pressable
      android_ripple={ripple}
      style={styles.orderContainer}
      onPress={() => {
        Actions.orderDetails({refresh: props.refresh});
        props.setSelectedOrderId(props.item.id);
      }}>
      {/* First row with clock and Date of Order  */}
      <View style={[styles.rowContainer, styles.dateContainer]}>
        <Clock style={styles.icons} />
        <Text style={styles.detailText}>
          {moment(created_on).format('lll')}
        </Text>
      </View>

      {/* Second Row with Address Details  */}
      <OrderAddressTile
        storeName={store_name}
        storeLocation={store_location.formatted_address}
        deliveryLocation={delivery_address_location.formatted_address}
        addressType={delivery_address_type}
      />

      <View style={styles.seperator} />

      {/* Third row with payment status and track button  */}
      <View style={[styles.rowContainer, styles.trackContainer]}>
        {getPaymentStatus()}

        <Button
          label={past ? Strings.repeatOrder : Strings.trackOrder}
          Style={styles.trackButton}
          labelStyle={styles.trackLabel}
          onPress={() => {
            if (past) {
              reOrderItems();
            } else {
              Actions.trackOrder({order: item});
            }
          }}
        />
      </View>
    </Pressable>
  );
};

function arePropsEqual(prevProps, nextProps) {
  return prevProps.id === nextProps.id;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setSelectedOrderId,
  repeatOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(OrderListItem, arePropsEqual));
