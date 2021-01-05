import React from 'react';
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

const OrderListItem = (props) => {
  let {
    store_name,
    final_amount,
    created_on,
    store_location,
    delivery_address_location,
    delivery_address_type,
  } = props.item;

  return (
    <Pressable
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setSelectedOrderId,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderListItem);
