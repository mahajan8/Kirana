import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {getKeyByValue, getMediaUrl, ripple} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {unitsShortName} from '../../../utils/values/Values';
import {styles} from '../styles/orderItemStyles';
import ViewOriginalModal from './ViewOriginalModal';

const OrderItem = (props) => {
  let {
    product_name,
    product_packaging,
    final_amount,
    product_quantity,
    item_quantity,
    product_images,
    old_order_product,
  } = props.item;

  const [showOriginal, setShowOriginal] = useState(false);

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

        {old_order_product ? (
          <Pressable
            onPress={() => setShowOriginal(true)}
            android_ripple={ripple}>
            <Text style={styles.viewOriginal}>{Strings.viewOriginalItem}</Text>
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.itemPrice}>
        {Strings.currency} {final_amount}
      </Text>

      <ViewOriginalModal
        visible={showOriginal}
        setVisible={setShowOriginal}
        originalItem={props.item.old_order_product}
      />
    </View>
  );
};

export default OrderItem;
