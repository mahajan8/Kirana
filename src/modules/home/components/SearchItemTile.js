/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, memo} from 'react';
import {View, Text, Image, Pressable, ActivityIndicator} from 'react-native';
import {getKeyByValue, getMediaUrl, ripple} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {unitsShortName} from '../../../utils/values/Values';
import {connect} from 'react-redux';
import {updateProductQuantity} from '../../store/Api';
import AlertModal from '../../commons/components/AlertModal';
import {styles} from '../styles/searchItemTileStyles';
import {Colors} from '../../../utils/values/Colors';
import {Actions} from 'react-native-router-flux';

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
  const {loadingProductId} = props.storeState;

  const updateQuantity = (increment = true) => {
    if (store && selectedStore.id !== store.id && !replaceAlert) {
      // If cart contains items from different store, Show replacement modal
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
    <View style={[styles.rowContainer]}>
      <Pressable
        style={[styles.rowContainer]}
        // android_ripple={ripple}
        onPress={() => Actions.productDetails({item: props.item})}>
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
            {product_quantity}{' '}
            {getKeyByValue(unitsShortName, product_packaging)}
          </Text>
        </View>
      </Pressable>
      <View style={styles.rightContainer}>
        <Text style={styles.price}>
          {Strings.currency}{' '}
          {cartProductObj ? cartProductObj.total_price : store_price}
        </Text>

        {loadingProductId !== product_id ? (
          // Plus and Minus button to update quantity
          <View style={styles.rowContainer}>
            <Pressable
              android_ripple={ripple}
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

            <Pressable
              style={styles.quantityButton}
              onPress={updateQuantity}
              android_ripple={ripple}>
              <Text style={styles.quantityButtonIcons}>+</Text>
            </Pressable>
          </View>
        ) : (
          <ActivityIndicator color={Colors.themeGreen} style={styles.loader} />
        )}
      </View>

      {/* Modal alert for cart replacement */}
      <AlertModal
        visible={replaceAlert}
        setVisible={setReplaceAlert}
        heading={Strings.replaceHeading}
        desc={
          Strings.replaceDesc1 +
          (store && store.name) +
          Strings.replaceDesc2 +
          (selectedStore && selectedStore.name)
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
  const {product_list: prevProductList} = prevProps.cartState.cart;
  const {product_list: nextProductList} = nextProps.cartState.cart;
  const {loadingProductId} = nextProps.storeState;
  return (
    prevProductId === nextProductId &&
    nextStoreObj &&
    prevStoreObj &&
    prevStoreObj.id === nextStoreObj.id &&
    prevProductList[prevProductId] &&
    nextProductList[prevProductId] &&
    prevProductList[prevProductId].item_quantity ===
      nextProductList[prevProductId].item_quantity &&
    prevProductList[prevProductId].product_quantity_str ===
      nextProductList[prevProductId].product_quantity_str &&
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
// export default ;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(SearchItemTile, arePropsEqual));
