import React from 'react';
import {View, Text} from 'react-native';
import FromIcon from '../../../assets/images/order_location_from.svg';
import ToIcon from '../../../assets/images/order_location_to.svg';
import {getKeyByValue} from '../../../utils/utility/Utils';
import {addressTypes} from '../../../utils/values/Values';
import {styles} from '../styles/orderAddressTileStyles';

const OrderAddressTile = (props) => {
  let {storeLocation, deliveryLocation, storeName, addressType} = props;
  return (
    <View style={styles.rowContainer}>
      {/* Restaurant Details  */}
      <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
        <FromIcon style={styles.icons} />
        <View>
          <Text style={styles.name} numberOfLines={1}>
            {storeName}
          </Text>
          <Text style={styles.locationText} numberOfLines={1}>
            {storeLocation}
          </Text>
        </View>
      </View>

      <View style={styles.dottedLine} />

      {/* User Address to Deliver Details  */}
      <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
        <ToIcon style={styles.icons} />
        <View>
          <Text style={styles.name} numberOfLines={1}>
            {addressType ? getKeyByValue(addressTypes, addressType) : 'Other'}
          </Text>
          <Text style={styles.locationText} numberOfLines={1}>
            {deliveryLocation}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderAddressTile;
