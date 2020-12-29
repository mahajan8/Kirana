/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import SearchItemTile from '../../home/components/SearchItemTile';
import {styles} from '../styles/cartStyles';
import InstructionsIcon from '../../../assets/images/cart_instructions.svg';
import CartEmptyImage from '../../../assets/images/empty_address.svg';
import CartSelectedAddress from './CartSelectedAddress';
import {connect} from 'react-redux';
import AddressListModal from './AddressListModal';
import {getCart} from '../Api';
import Loader from '../../commons/components/Loader';
import {selectStore} from '../../home/HomeActions';
import CartPaymentDetails from './CartPaymentDetails';

const Cart = (props) => {
  const [addressModal, setAddressModal] = useState(false);
  const [location, setLocation] = useState(props.location);
  let {cart} = props.cartReducer;

  let {
    total_cost_price,
    third_party_delivery_fee,
    delivery_fee,
    product_list,
    store,
    is_overweight,
    is_deliverable,
    store_id,
  } = cart;
  useEffect(() => {
    props.selectStore(store_id);
    if (location) {
      getCartItems();
    }
  }, [location]);

  const getCartItems = () => {
    let pars = {
      longitude: location.lng,
      latitude: location.lat,
    };
    props.getCart(pars);
  };
  let list = Object.values(product_list);
  return (
    <SafeArea>
      <Header title={Strings.confirmOrder} type={1} />
      <FlatList
        data={product_list ? list : []}
        renderItem={({item, index}) => (
          <View style={styles.itemContainer}>
            <SearchItemTile item={item} />
          </View>
        )}
        keyExtractor={(item, index) => `cartItem${index}`}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.listItemSeperator} />}
        ListHeaderComponent={
          list.length && (
            <View>
              {is_overweight && (
                <View
                  style={[styles.overWeightContainer, styles.detailsContainer]}>
                  <Text style={[styles.detailsText, styles.overWeightText]}>
                    {Strings.overWeightCartText}
                  </Text>
                </View>
              )}
              <View style={styles.container}>
                <View style={[styles.rowContainer, styles.storeNameContainer]}>
                  <Text style={styles.grayHeading}>
                    {store ? store.store_name : null}
                  </Text>
                  <Text style={styles.addMore}>{Strings.plusAddMore}</Text>
                </View>
              </View>
            </View>
          )
        }
        ListFooterComponent={
          list.length && (
            <View style={styles.footerContainer}>
              <View style={styles.seperator} />

              <View style={[styles.rowContainer, styles.container]}>
                <InstructionsIcon />
                <Text style={styles.instructionsPlaceholder}>
                  {Strings.cartInstructionsPlaceholder}
                </Text>
              </View>

              <View style={styles.seperator} />

              <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>
                  {Strings.estimatedDeliveryTime} {'40 minutes'}
                </Text>
              </View>

              <View style={styles.seperator} />

              <CartPaymentDetails
                deliveryFee={delivery_fee}
                slicedAmount={third_party_delivery_fee}
                total={total_cost_price}
              />
            </View>
          )
        }
        ListEmptyComponent={
          <View style={styles.listEmptyContainer}>
            <CartEmptyImage />
            <Text style={styles.cartEmptyTitle}>{Strings.cartEmptyTitle}</Text>
            <Text style={styles.cartEmptySubTitle}>
              {Strings.cartEmptySubTitle}
            </Text>
          </View>
        }
      />

      <CartSelectedAddress
        addAddress={() => {
          setAddressModal(true);
        }}
        location={location}
        deliverable={is_deliverable}
      />
      <AddressListModal
        visible={addressModal}
        setVisible={setAddressModal}
        setLocation={setLocation}
        location={location}
      />

      <Loader show={props.loading} />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  location: state.homeReducer.location,
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = {
  getCart,
  selectStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
