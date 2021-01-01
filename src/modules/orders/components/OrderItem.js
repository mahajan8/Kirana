import React from 'react';
import {View, Text, Image} from 'react-native';
import {getKeyByValue, getMediaUrl} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {unitsShortName} from '../../../utils/values/Values';
import {styles} from '../styles/orderItemStyles';

const OrderItem = (props) => {
  const {name, count, price, quantity, packaging} = props.item;

  return (
    <View style={styles.container}>
      <Text style={styles.itemCount}>{count} x</Text>
      <Image source={{uri: getMediaUrl(null)}} style={styles.itemImage} />
      <View>
        <Text style={styles.itemName} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.itemWeight}>
          {quantity} {getKeyByValue(unitsShortName, packaging)}
        </Text>
      </View>
      <Text style={styles.itemPrice}>
        {Strings.currency} {count * price}
      </Text>
    </View>
  );
};

export default OrderItem;
