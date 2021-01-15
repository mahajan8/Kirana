import React, {memo} from 'react';
import {View, Text, Pressable} from 'react-native';
import Clock from '../../../assets/images/green_clock.svg';
import GreenCheck from '../../../assets/images/green_circle_tick.svg';
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
  } = item;

  const getPaymentStatus = () => {
    let {SUCCESS, REFUNDED, REFUND_IN_PROGRESS} = paymentStatus;
    if (payment) {
      switch (payment.status) {
        case SUCCESS:
          return Strings.paid;
        case REFUND_IN_PROGRESS:
          return Strings.refundInProgress;
        case REFUNDED:
          return Strings.refundComplete;
        default:
          return Strings.paid;
      }
    } else {
      return Strings.paid;
    }
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
        <View style={styles.rowContainer}>
          <GreenCheck style={styles.icons} />
          <Text style={styles.detailText}>
            {getPaymentStatus()}
            <Text style={styles.greenText}>
              {'  '}
              {Strings.currency} {final_amount}
            </Text>
          </Text>
        </View>
        <Button
          label={past ? Strings.repeatOrder : Strings.trackOrder}
          Style={styles.trackButton}
          labelStyle={styles.trackLabel}
          onPress={() => {
            if (past) {
              console.log('repeat');
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(OrderListItem, arePropsEqual));
