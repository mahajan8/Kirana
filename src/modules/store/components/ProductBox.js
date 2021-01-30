import React, {useState, memo} from 'react';
import {View, Text, Image, Pressable, ActivityIndicator} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getKeyByValue, getMediaUrl, ripple} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {unitsList} from '../../../utils/values/Values';
import Button from '../../commons/components/Button';
import Minus from '../../../assets/images/product_detail_minus.svg';
import Plus from '../../../assets/images/product_detail_plus.svg';
import DisabledMinus from '../../../assets/images/product_detail_minus_grey.svg';
import DisabledPlus from '../../../assets/images/product_detail_plus_grey.svg';
import {connect} from 'react-redux';
import {updateProductQuantity} from '../Api';
import AlertModal from '../../commons/components/AlertModal';
import {styles} from '../styles/productBoxStyles';
import {Actions} from 'react-native-router-flux';
import {Colors} from '../../../utils/values/Colors';

const ProductBox = (props) => {
  const [replaceAlert, setReplaceAlert] = useState(false);

  let {vertical, item} = props;
  let {
    product_name,
    product_packaging,
    product_quantity,
    store_price,
    product_images,
    product_brand,
    product_id,
  } = item; //Destructured item object to get product details
  product_id = product_id.$oid;

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
      // Api call to update product quantity
      props.updateProductQuantity(pars);
    }
  };
  return (
    <Pressable
      activeOpacity={1}
      style={[styles.container, vertical && styles.verticalContainer]}>
      <Pressable
        // android_ripple={ripple}
        onPress={() => Actions.productDetails({item})}>
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
        <Text style={styles.name} numberOfLines={1}>
          {product_name}
        </Text>
        <Text style={styles.weight}>
          {product_quantity} {getKeyByValue(unitsList, product_packaging)}
        </Text>
      </Pressable>
      <Pressable style={styles.bottomContainer}>
        {cartProductObj ? (
          // Plus and Minus button to update quantity
          <View
            style={[
              styles.counterContainer,
              vertical && styles.verticalButton,
            ]}>
            <Pressable
              android_ripple={ripple}
              style={styles.counter}
              onPress={() => updateQuantity(false)}>
              {loadingProductId !== product_id ? <Minus /> : <DisabledMinus />}
            </Pressable>

            {loadingProductId !== product_id ? (
              <Text style={styles.countText}>
                {product_brand
                  ? cartProductObj.item_quantity
                  : cartProductObj.product_quantity_str}
              </Text>
            ) : (
              <ActivityIndicator
                color={Colors.themeGreen}
                style={styles.loader}
              />
            )}

            <Pressable
              style={styles.counter}
              onPress={updateQuantity}
              android_ripple={ripple}>
              {loadingProductId !== product_id ? <Plus /> : <DisabledPlus />}
            </Pressable>
          </View>
        ) : (
          //Add button
          <Button
            label={Strings.plusAdd}
            Style={[styles.buttonStyle, vertical && styles.verticalButton]}
            labelStyle={styles.addLabel}
            onPress={updateQuantity}
          />
        )}
      </Pressable>

      <AlertModal
        visible={replaceAlert}
        setVisible={setReplaceAlert}
        heading={Strings.replaceHeading}
        desc={
          Strings.replaceDesc1 +
          (store && store.name) +
          Strings.replaceDesc2 +
          (selectedStore ? selectedStore.name : null)
        }
        label1={Strings.no}
        label2={Strings.yesDiscard}
        invert
        button1Press={() => setReplaceAlert(false)}
        button2Press={updateQuantity}
      />
    </Pressable>
  );
};

function arePropsEqual(prevProps, nextProps) {
  const {product_id: prevProductId} = prevProps.item;
  const {product_id: nextProductId} = nextProps.item;
  const {store: prevStoreObj} = prevProps.cartState.cart;
  const {store: nextStoreObj} = nextProps.cartState.cart;
  const {product_id: productId} = prevProps.item;
  const {product_list: prevProductList} = prevProps.cartState.cart;
  const {product_list: nextProductList} = nextProps.cartState.cart;
  const {loadingProductId} = nextProps.storeState;
  return (
    prevProductId === nextProductId &&
    nextStoreObj &&
    prevStoreObj &&
    prevStoreObj.id === nextStoreObj.id &&
    prevProductList[productId] &&
    nextProductList[productId] &&
    prevProductList[productId].item_quantity ===
      nextProductList[productId].item_quantity &&
    prevProductList[productId].product_quantity_str ===
      nextProductList[productId].product_quantity_str &&
    loadingProductId !== prevProductId
  );
}

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeState: state.storeReducer,
  homeState: state.homeReducer,
  cartState: state.cartReducer,
});

const mapDispatchToProps = {
  updateProductQuantity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(ProductBox, arePropsEqual));
