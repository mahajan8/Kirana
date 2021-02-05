import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {getKeyByValue, getMediaUrl, ripple} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {unitsShortName} from '../../../utils/values/Values';
import {styles} from '../styles/orderItemStyles';
import ViewOriginalModal from './ViewOriginalModal';
import Eye from '../../../assets/images/eyeicon.svg';

const OrderItem = (props) => {
  let {
    product_name,
    product_packaging,
    final_amount,
    product_quantity,
    item_quantity,
    product_images,
    old_order_product,
  } = props.item; //Destructuring item to get order item details

  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.itemCount}>{item_quantity} x</Text>
      <Image
        source={{uri: getMediaUrl(encodeURI(product_images[0].path))}}
        style={styles.itemImage}
      />
      <View>
        <Text style={styles.itemName} numberOfLines={2}>
          {product_name}
        </Text>

        <View style={styles.rowContainer}>
          <Text style={styles.itemWeight}>
            {product_quantity}{' '}
            {getKeyByValue(unitsShortName, product_packaging)}
          </Text>

          {/* Show view orignal button if product is replaced by store */}
          {old_order_product ? (
            <View style={styles.rowContainer}>
              <View style={styles.seperator} />

              <Pressable
                onPress={() => setShowOriginal(true)}
                android_ripple={ripple}
                style={styles.rowContainer}>
                <Eye />

                <Text style={styles.viewOriginal}>{Strings.originalItem}</Text>
              </Pressable>
            </View>
          ) : null}
        </View>
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
