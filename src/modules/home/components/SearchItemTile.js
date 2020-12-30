/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, memo} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {getKeyByValue, getMediaUrl} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {unitsShortName} from '../../../utils/values/Values';
import {connect} from 'react-redux';
import {updateProductQuantity} from '../../store/Api';
import AlertModal from '../../commons/components/AlertModal';
import {styles} from '../styles/searchItemTileStyles';

const SearchItemTile = (props) => {
  let {
    product_name,
    product_packaging,
    product_quantity,
    store_price,
    product_images,
    product_id,
    product_brand,
  } = props.item;

  const [replaceAlert, setReplaceAlert] = useState(false);
  const {selectedStore} = props.homeState;
  const {product_list, store} = props.cartState.cart;
  const cartProductObj = product_list[product_id];

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
    <View style={[styles.rowContainer]}>
      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={{
            uri: getMediaUrl(
              product_images.length ? product_images[0].path : null,
            ),
          }}
        />
      </View>

      <View style={styles.productDetialsContainer}>
        <Text style={styles.productName}>{product_name}</Text>
        <Text style={styles.productWeight}>
          {product_quantity} {getKeyByValue(unitsShortName, product_packaging)}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.price}>
          {Strings.currency}{' '}
          {cartProductObj ? cartProductObj.total_price : store_price}
        </Text>

        <View style={styles.rowContainer}>
          <Pressable
            style={styles.quantityButton}
            onPress={() => updateQuantity(false)}>
            <Text style={styles.quantityButtonIcons}>-</Text>
          </Pressable>
          <Text style={styles.quantityText}>
            {cartProductObj
              ? product_brand
                ? cartProductObj.item_quantity
                : cartProductObj.product_quantity_str
              : 0}
          </Text>

          <Pressable style={styles.quantityButton} onPress={updateQuantity}>
            <Text style={styles.quantityButtonIcons}>+</Text>
          </Pressable>
        </View>
      </View>
      <AlertModal
        visible={replaceAlert}
        setVisible={setReplaceAlert}
        heading={Strings.replaceHeading}
        desc={
          Strings.replaceDesc1 +
          store?.name +
          Strings.replaceDesc2 +
          selectedStore.name
        }
        label1={Strings.no}
        label2={Strings.yesDiscard}
        invert
        button1Press={() => setReplaceAlert(false)}
        button2Press={updateQuantity}
      />
    </View>
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
      nextProductList[productId].product_quantity_str
  );
}

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeReducer: state.storeReducer,
  homeState: state.homeReducer,
  cartState: state.cartReducer,
});

const mapDispatchToProps = {
  updateProductQuantity,
};
// export default ;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(SearchItemTile, arePropsEqual));
