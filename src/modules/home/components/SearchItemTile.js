/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, memo} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getKeyByValue, getMediaUrl} from '../../../utils/utility/Utils';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';
import {Strings} from '../../../utils/values/Strings';
import {unitsShortName} from '../../../utils/values/Values';
import {connect} from 'react-redux';
import {updateProductQuantity} from '../../store/Api';
import {Actions} from 'react-native-router-flux';
import AlertModal from '../../commons/components/AlertModal';

const SearchItemTile = (props) => {
  let {
    product_name,
    product_packaging,
    product_quantity,
    store_price,
    product_images,
    product_id,
  } = props.item;

  const [quantity, setQuantity] = useState(0);
  const [replaceAlert, setReplaceAlert] = useState(false);
  const {selectedStore} = props.homeState;
  const {product_list, store_id, store} = props.cartState.cart;

  useEffect(() => {
    if (product_list[product_id] && store.id === selectedStore.id) {
      setQuantity(product_list[product_id]['item_quantity']);
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
      props.updateProductQuantity(pars, () => {
        if (increment) {
          setQuantity(quantity + 1);
        } else {
          if (Actions.currentScene === 'cart' && quantity === 1) {
            // donothing as states sets after unmounting.
          } else {
            setQuantity(quantity - 1);
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
          {Strings.currency} {store_price}
        </Text>

        <View style={styles.rowContainer}>
          <Pressable
            style={styles.quantityButton}
            onPress={() => (quantity !== 0 ? updateQuantity(false) : null)}>
            <Text style={styles.quantityButtonIcons}>-</Text>
          </Pressable>

          <Text style={styles.quantityText}>{quantity}</Text>

          <Pressable style={styles.quantityButton} onPress={updateQuantity}>
            <Text style={styles.quantityButtonIcons}>+</Text>
          </Pressable>
        </View>
      </View>
      <AlertModal
        visible={replaceAlert}
        setVisible={setReplaceAlert}
        heading={Strings.replaceHeading}
        desc={Strings.replaceDesc}
        label1={Strings.no}
        label2={Strings.yesDiscard}
        invert
        button1Press={() => setReplaceAlert(false)}
        button2Press={updateQuantity}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  productImageContainer: {
    height: '65rem',
    width: '65rem',
    borderRadius: '8rem',
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '12rem',
  },
  productImage: {
    height: '45rem',
    width: '45rem',
  },
  productName: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    lineHeight: '18rem',
    width: '160rem',
    marginBottom: '3rem',
  },
  productWeight: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.subTitleText,
    letterSpacing: '-0.2rem',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: '3rem',
  },
  price: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: '#333333',
    marginBottom: '10vrem',
  },
  quantityButton: {
    width: '20rem',
    height: '20rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderGray,
    borderRadius: '6rem',
  },
  quantityButtonIcons: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
  },
  quantityText: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    marginHorizontal: '10rem',
  },
  productDetialsContainer: {
    paddingTop: '3rem',
  },
});
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
