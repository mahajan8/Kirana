import React from 'react';
import {View, Text, Image} from 'react-native';
import {getKeyByValue, getMediaUrl} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {unitsShortName} from '../../../utils/values/Values';
import {styles} from '../styles/orderItemStyles';

const OrderItem = (props) => {
  let {
    product_name,
    product_packaging,
    final_amount,
    product_quantity,
    item_quantity,
    product_images,
  } = props.item;

  return (
    <View style={styles.container}>
      <Text style={styles.itemCount}>{item_quantity} x</Text>
      <Image
        source={{uri: getMediaUrl(product_images[0].path)}}
        style={styles.itemImage}
      />
      <View>
        <Text style={styles.itemName} numberOfLines={2}>
          {product_name}
        </Text>
        <Text style={styles.itemWeight}>
          {product_quantity} {getKeyByValue(unitsShortName, product_packaging)}
        </Text>
      </View>
      <Text style={styles.itemPrice}>
        {Strings.currency} {final_amount}
      </Text>
    </View>
  );
};

export default OrderItem;
