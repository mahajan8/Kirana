import React from 'react';
import {View, Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Clock from '../../../assets/images/green_clock.svg';
import GreenCheck from '../../../assets/images/green_circle_tick.svg';
import FromIcon from '../../../assets/images/order_location_from.svg';
import ToIcon from '../../../assets/images/order_location_to.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {styles} from '../styles/orderListItemStyles';
import moment from 'moment';
import {Actions} from 'react-native-router-flux';
import OrderAddressTile from './OrderAddressTile';

const OrderListItem = (props) => {
  let {
    store_name,
    final_amount,
    created_on,
    store_location,
    delivery_address_location,
  } = props.item;

  return (
    <Pressable
      style={styles.orderContainer}
      onPress={() => Actions.orderDetails({orderId: props.item.id})}>
      {/* First row with clock and Date of Order  */}
      <View style={[styles.rowContainer, styles.dateContainer]}>
        {/* TODO: Change to green clock  */}
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
      />

      <View style={styles.seperator} />

      {/* Third row with payment status and track button  */}
      <View style={[styles.rowContainer, styles.trackContainer]}>
        <View style={styles.rowContainer}>
          <GreenCheck style={styles.icons} />
          <Text style={styles.detailText}>
            {Strings.paid}
            <Text style={styles.greenText}>
              {'  '}
              {Strings.currency} {final_amount}
            </Text>
          </Text>
        </View>
        <Button
          label={Strings.trackOrder}
          Style={styles.trackButton}
          labelStyle={styles.trackLabel}
        />
      </View>
    </Pressable>
  );
};

export default OrderListItem;
