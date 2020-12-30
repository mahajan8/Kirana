/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, memo} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {getKeyByValue, getMediaUrl} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {unitsShortName} from '../../../utils/values/Values';
import {connect} from 'react-redux';
import {updateProductQuantity} from '../../store/Api';
import {Actions} from 'react-native-router-flux';
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
    total_price,
    product_brand,
  } = props.item;

  const [quantity, setQuantity] = useState(0);
  const [replaceAlert, setReplaceAlert] = useState(false);
  const [unbrandedTotal, setUnbrandedTotal] = useState(0);
  const [unbrandedQuantity, setUnbrandedQuantity] = useState(0);
  const {selectedStore} = props.homeState;
  const {product_list, store_id, store} = props.cartState.cart;
  const {cart} = props;

  useEffect(() => {
    if (product_list[product_id] && store.id === selectedStore.id) {
      setQuantity(product_list[product_id]['item_quantity']);
      if (!product_brand) {
        setUnbrandedQuantity(product_list[product_id].product_quantity_str);
        setUnbrandedTotal(product_list[product_id].total_price);
      }
    }
  }, []);

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
      props.updateProductQuantity(pars, (data) => {
        if (increment) {
          setQuantity(quantity + 1);
        } else {
          if (Actions.currentScene === 'cart' && quantity === 1) {
            // donothing as states sets after unmounting.
          } else {
            setQuantity(quantity - 1);
          }
        }
        if (!product_brand) {
          if (quantity === 1 && !increment) {
            if (!cart) {
              setUnbrandedQuantity(0);
              setUnbrandedTotal(store_price);
            }
          } else {
            setUnbrandedQuantity(data[product_id].product_quantity_str);
            setUnbrandedTotal(data[product_id].total_price);
          }
        }
      });
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
          {quantity
            ? product_brand
              ? store_price * quantity
              : unbrandedTotal
            : store_price}
        </Text>

        <View style={styles.rowContainer}>
          <Pressable
            style={styles.quantityButton}
            onPress={() => (quantity !== 0 ? updateQuantity(false) : null)}>
            <Text style={styles.quantityButtonIcons}>-</Text>
          </Pressable>

          <Text style={styles.quantityText}>
            {product_brand ? quantity : unbrandedQuantity}
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
          store.name +
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
  return prevProps.item.product_id === nextProps.item.product_id;
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
