import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/productDetailStyles';
import {getMediaUrl} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {commonStyles} from '../../commons/styles/commonStyles';
import Header from '../../commons/components/Header';
import CartCounter from '../../commons/components/CartCounter';
import Button from '../../commons/components/Button';

const ProductDetails = (props) => {
  let {subCategoryName} = props;
  const [count, setCount] = useState(0);

  return (
    <SafeArea>
      <Header title={subCategoryName} headerRight={<CartCounter />} type={1} />
      <View style={styles.container}>
        <Image source={{uri: getMediaUrl(null)}} style={styles.productImage} />
        <Text style={styles.price}>{Strings.currency} 450</Text>
        <Text style={styles.name}>Australian Cherries</Text>
        <Text style={styles.weight}>1 kg</Text>
      </View>
      <View
        style={[
          styles.counterContainer,
          styles.buttonsContainer,
          commonStyles.shadow,
        ]}>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.counter}
            onPress={() => setCount(count > 0 ? count - 1 : count)}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{count} kg</Text>
          <TouchableOpacity
            style={styles.counter}
            onPress={() => setCount(count + 1)}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
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
