import React, {useState} from 'react';
import {View, Text, Image, Pressable, ActivityIndicator} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/productDetailStyles';
import {getKeyByValue, getMediaUrl} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {commonStyles} from '../../commons/styles/commonStyles';
import Button from '../../commons/components/Button';
import {unitsList} from '../../../utils/values/Values';
import CartHeader from '../../commons/components/CartHeader';
import Minus from '../../../assets/images/product_detail_minus.svg';
import Plus from '../../../assets/images/product_detail_plus.svg';
import {updateProductQuantity} from '../Api';
import {connect} from 'react-redux';
import AlertModal from '../../commons/components/AlertModal';
import {Colors} from '../../../utils/values/Colors';

const ProductDetails = (props) => {
  let {
    product_name,
    product_packaging,
    product_quantity,
    store_price,
    product_images,
    product_brand,
    product_id,
  } = props.item;

  const [replaceAlert, setReplaceAlert] = useState(false);
  const {selectedStore} = props.homeState;
  const {product_list, store} = props.cartState.cart;
  const cartProductObj = product_list[product_id];
  const {loadingProductId} = props.storeState;

  const updateQuantity = (increment = true) => {
    if (store && selectedStore.id !== store.id && !replaceAlert) {
      setReplaceAlert(true);
    } else {
      setReplaceAlert(false);
      const pars = {
        product_id,
        quantity: increment ? 1 : -1,
        store_id: selectedStore.id,
      };
      props.updateProductQuantity(pars);
    }
  };

  return (
    <SafeArea>
      <CartHeader title={product_name} />
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
          {Strings.currency}{' '}
          {cartProductObj ? cartProductObj.total_price : store_price}
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
        {loadingProductId !== product_id ? (
          cartProductObj ? (
            <View style={styles.counterContainer}>
              <Pressable
                style={styles.counter}
                onPress={() => updateQuantity(false)}>
                <Minus />
              </Pressable>

              <Text style={styles.countText}>
                {product_brand
                  ? cartProductObj.item_quantity
                  : cartProductObj.product_quantity_str}
              </Text>

              <Pressable style={styles.counter} onPress={updateQuantity}>
                <Plus />
              </Pressable>
            </View>
          ) : (
            <Button
              label={Strings.addToCart}
              Style={styles.buttonStyle}
              labelStyle={styles.labelStyle}
              onPress={updateQuantity}
            />
          )
        ) : (
          <ActivityIndicator color={Colors.themeGreen} style={styles.loader} />
        )}
      </View>
      <AlertModal
        visible={replaceAlert}
        setVisible={setReplaceAlert}
        heading={Strings.replaceHeading}
        desc={
          Strings.replaceDesc1 +
          (store && store.name) +
          Strings.replaceDesc2 +
          selectedStore.name
        }
        label1={Strings.no}
        label2={Strings.yesDiscard}
        invert
        button1Press={() => setReplaceAlert(false)}
        button2Press={updateQuantity}
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeState: state.storeReducer,
  homeState: state.homeReducer,
  cartState: state.cartReducer,
});

const mapDispatchToProps = {
  updateProductQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
