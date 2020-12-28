import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/productDetailStyles';
import {getKeyByValue, getMediaUrl} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {commonStyles} from '../../commons/styles/commonStyles';
import Button from '../../commons/components/Button';
import {unitsList} from '../../../utils/values/Values';
import CartHeader from '../../commons/components/CartHeader';

const ProductDetails = (props) => {
  let {subCategoryName, item} = props;
  let {
    product_name,
    product_packaging,
    product_quantity,
    store_price,
    product_images,
  } = item;

  const [count, setCount] = useState(0);

  return (
    <SafeArea>
      <CartHeader title={subCategoryName} />
      <View style={styles.container}>
        <Image
          source={{
            uri: getMediaUrl(
              product_images.length ? product_images[0].path : null,
            ),
          }}
          style={styles.productImage}
        />
        <Text style={styles.price}>
          {Strings.currency} {store_price}
        </Text>
        <Text style={styles.name}>{product_name}</Text>
        <Text style={styles.weight}>
          {product_quantity} {getKeyByValue(unitsList, product_packaging)}
        </Text>
      </View>
      <View
        style={[
          commonStyles.shadow,
          styles.counterContainer,
          styles.buttonsContainer,
        ]}>
        <View style={styles.counterContainer}>
          <Pressable
            style={styles.counter}
            onPress={() => setCount(count > 0 ? count - 1 : count)}>
            <Text style={styles.counterText}>-</Text>
          </Pressable>
          <Text style={styles.countText}>{count}</Text>
          <Pressable style={styles.counter} onPress={() => setCount(count + 1)}>
            <Text style={styles.counterText}>+</Text>
          </Pressable>
        </View>

        <Button
          label={Strings.addToCart}
          Style={styles.buttonStyle}
          labelStyle={styles.labelStyle}
          //   onPress={() => setCount(count + 1)}
        />
      </View>
    </SafeArea>
  );
};

export default ProductDetails;
