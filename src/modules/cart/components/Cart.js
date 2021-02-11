/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import SearchItemTile from '../../home/components/SearchItemTile';
import {styles} from '../styles/cartStyles';
import CartEmptyImage from '../../../assets/images/empty_address.svg';
import CartSelectedAddress from './CartSelectedAddress';
import {connect} from 'react-redux';
import AddressListModal from './AddressListModal';
import {getCart} from '../Api';
import {selectStore} from '../../home/HomeActions';
import CartListHeader from './CartListHeader';
import CartListFooter from './CartListFooter';
import CartShimmer from './CartShimmer';
import {Actions} from 'react-native-router-flux';
import BottomButton from '../../commons/components/BottomButton';
import {AppConfig} from '../../../config/AppConfig';
import {environment} from '../../../config/EnvConfig';
import RazorpayCheckout from 'react-native-razorpay';
import {Colors} from '../../../utils/values/Colors';
import {createOrder, placeOrder} from '../Api';
import {setCartDetails, setCartLocation} from '../CartActions';
import {saveData, getData} from '../../../utils/utility/LocalStore';

const Cart = (props) => {
  const [addressModal, setAddressModal] = useState(false);
  const [instructions, setInstructions] = useState('');
  const [paymentLoading, setPaymentLoading] = useState(false);

  let {userDetails} = props.homeReducer;

  let {cart, cartLocation} = props.cartReducer;

  let {
    total_cost_price,
    delivery_fee,
    product_list,
    store,
    is_overweight,
    is_deliverable,
    max_weight_limit_kg,
    estimated_time_in_mins,
    has_out_of_stock,
  } = cart; //Destructuring cart object from cartReducer

  useEffect(() => {
    setInitialLocation();
  }, []);

  const setInitialLocation = async () => {
    let addressId = await getData('last_address_id');

    if (addressId) {
      let address = props.addresses.find((obj) => obj.id === addressId);

      if (address) {
        let {id, type, location} = address;
        let addressLocation = {...location, id, type};

        props.setCartLocation(addressLocation);
      } else {
        props.setCartLocation(null);
      }
    } else {
      props.setCartLocation(null);
    }
  };

  useEffect(() => {
    // If location present in homeReducer, load cart items.
    if (cartLocation) {
      getCartItems();
    }
  }, [cartLocation]);

  const getCartItems = () => {
    let pars = {
      longitude: cartLocation.lng,
      latitude: cartLocation.lat,
    };
    props.getCart(pars);
  };
  const {first_name, mobile} = userDetails;

  const confirmOrder = () => {
    const pars = {
      address_id: cartLocation.id,
      payment_mode: 10,
      instructions: instructions,
    };
    setPaymentLoading(true);

    // Create order and get Order ID
    props.createOrder(pars, (referenceId, orderId) => {
      setPaymentLoading(false);

      // Set Order ID to Razorpay Options
      let options = {
        description: '',
        image: 'https://admin.kiranakart.app/mobile-images/kiranakart.png',
        currency: 'INR',
        key: AppConfig[environment].razorpayKey,
        amount: String(total_cost_price + delivery_fee),
        name: first_name || '',
        order_id: referenceId,
        prefill: {
          contact: mobile,
          name: first_name || '',
        },
        theme: {color: Colors.themeGreen},
      };

      // Open Razorpay SDK to handle payment
      RazorpayCheckout.open(options)
        .then((razorpayData) => {
          // Get Reference key from razorpay and place order.
          // const data = {
          //   payment_reference_id: orderId,
          //   property: razorpayData,
          // };
          // props.placeOrder(data);

          const cartData = {
            ...cart,
            item_quantity_count: 0,
            product_list: {},
            store: null,
            store_id: null,
          };
          saveData('last_address_id', cartLocation.id);
          props.setCartDetails(cartData);
          Actions.paymentStatus({success: true, orderId});
        })
        .catch((error) => {
          // const data = {
          //   payment_reference_id: referenceId,
          //   property: null,
          // };
          // props.placeOrder(data);

          Actions.paymentStatus({success: false});
        });
    });
  };

  const renderListHeader = () => (
    <CartListHeader
      overWeight={is_overweight ? max_weight_limit_kg : false}
      storeName={store ? store.name : null}
      addMore={() => {
        props.selectStore(store);
        // Check for if store is in navigation stack
        let storeRoute = Actions.state.routes.some(
          (obj) => obj.routeName === 'store',
        );
        if (storeRoute) {
          Actions.popTo('store');
        } else {
          Actions.replace('store');
        }
      }}
    />
  );

  const renderListEmptyComponent = () => (
    <View style={styles.fullContainer}>
      <View style={styles.listEmptyContainer}>
        <CartEmptyImage />
        <Text style={styles.cartEmptyTitle}>{Strings.cartEmptyTitle}</Text>
        <Text style={styles.cartEmptySubTitle}>
          {Strings.cartEmptySubTitle}
        </Text>
      </View>
      <BottomButton
        label={Strings.addProducts}
        onPress={() => Actions.popTo('_home')}
      />
    </View>
  );

  let list = Object.values(product_list);

  return (
    <SafeArea>
      <Header title={Strings.confirmOrder} type={1} />
      {props.loading ? (
        <CartShimmer />
      ) : (
        <View style={styles.fullContainer}>
          <FlatList
            data={product_list ? list : []}
            renderItem={({item, index}) => (
              <View style={styles.itemContainer}>
                <SearchItemTile item={item} cart />
              </View>
            )}
            keyExtractor={(item, index) => `cartItem${index}`}
            contentContainerStyle={styles.list}
            ItemSeparatorComponent={() => (
              <View style={styles.listItemSeperator} />
            )}
            ListHeaderComponent={list.length && renderListHeader}
            ListFooterComponent={
              list.length && (
                <CartListFooter
                  instructions={instructions}
                  setInstructions={setInstructions}
                  estimatedTime={estimated_time_in_mins}
                />
              )
            }
            ListEmptyComponent={renderListEmptyComponent}
          />

          {list.length ? (
            // Selected Address Bottom Component
            <CartSelectedAddress
              addAddress={() => {
                if (props.addresses.length) {
                  setAddressModal(true);
                } else {
                  Actions.addressSearch();
                }
              }}
              location={cartLocation}
              deliverable={is_deliverable}
              totalAmount={total_cost_price + delivery_fee}
              loading={paymentLoading}
              confirmOrder={confirmOrder}
              payDisable={is_overweight || has_out_of_stock}
            />
          ) : null}
        </View>
      )}

      {/* Modal for displaying addresses */}
      <AddressListModal visible={addressModal} setVisible={setAddressModal} />

      {/* <Loader show={props.loading} /> */}
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  addresses: state.navigationReducer.addresses,
  homeReducer: state.homeReducer,
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = {
  getCart,
  selectStore,
  createOrder,
  placeOrder,
  setCartDetails,
  setCartLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
