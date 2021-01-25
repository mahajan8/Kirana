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

const Cart = (props) => {
  const [addressModal, setAddressModal] = useState(false);
  const [location, setLocation] = useState(props.location);
  const [instructions, setInstructions] = useState('');
  const [paymentLoading, setPaymentLoading] = useState(false);

  let {cart} = props.cartReducer;

  let {
    total_cost_price,
    delivery_fee,
    product_list,
    store,
    is_overweight,
    is_deliverable,
    max_weight_limit_kg,
    estimated_time_in_mins,
  } = cart;
  useEffect(() => {
    if (location) {
      getCartItems();
    }
  }, [location]);

  // Load Cart Products
  const getCartItems = () => {
    let pars = {
      longitude: location.lng,
      latitude: location.lat,
    };
    props.getCart(pars);
  };
  const {first_name, mobile} = props.userDetails;

  //Confirm Order and pay
  const confirmOrder = () => {
    const pars = {
      address_id: location.id,
      payment_mode: 10,
      instructions: instructions,
    };
    setPaymentLoading(true);
    props.createOrder(pars, (orderId) => {
      setPaymentLoading(false);
      let options = {
        description: '',
        image: 'https://cdn.kiranakart.app/static/logo/splash-logo-2.png',
        currency: 'INR',
        key: AppConfig[environment].razorpayKey,
        amount: String(total_cost_price + delivery_fee),
        name: first_name || '',
        order_id: orderId,
        prefill: {
          contact: mobile,
          name: first_name || '',
        },
        theme: {color: Colors.themeGreen},
      };

      RazorpayCheckout.open(options)
        .then((razorpayData) => {
          const data = {
            payment_reference_id: orderId,
            property: razorpayData,
          };
          props.placeOrder(data);
        })
        .catch((error) => {
          Actions.paymentStatus({success: false});
        });
    });
  };

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
            ListHeaderComponent={
              // Render Cart Header
              list.length && (
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
              )
            }
            ListFooterComponent={
              // List Footer Component
              list.length && (
                <CartListFooter
                  instructions={instructions}
                  setInstructions={setInstructions}
                  estimatedTime={estimated_time_in_mins}
                />
              )
            }
            ListEmptyComponent={
              <View style={styles.fullContainer}>
                <View style={styles.listEmptyContainer}>
                  <CartEmptyImage />
                  <Text style={styles.cartEmptyTitle}>
                    {Strings.cartEmptyTitle}
                  </Text>
                  <Text style={styles.cartEmptySubTitle}>
                    {Strings.cartEmptySubTitle}
                  </Text>
                </View>
                <BottomButton
                  label={Strings.addProducts}
                  onPress={() => Actions.popTo('_home')}
                />
              </View>
            }
          />

          {list.length ? (
            // Selected Address Bottom Component
            <CartSelectedAddress
              addAddress={() => {
                setAddressModal(true);
              }}
              location={location}
              deliverable={is_deliverable}
              totalAmount={total_cost_price + delivery_fee}
              loading={paymentLoading}
              confirmOrder={confirmOrder}
              overWeight={is_overweight}
            />
          ) : null}
        </View>
      )}

      {/* Modal for displaying addresses */}
      <AddressListModal
        visible={addressModal}
        setVisible={setAddressModal}
        setLocation={setLocation}
        location={location}
      />

      {/* <Loader show={props.loading} /> */}
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  location: state.homeReducer.location,
  cartReducer: state.cartReducer,
  userDetails: state.homeReducer.userDetails,
});

const mapDispatchToProps = {
  getCart,
  selectStore,
  createOrder,
  placeOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
