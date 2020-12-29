/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import SearchItemTile from '../../home/components/SearchItemTile';
import {styles} from '../styles/cartStyles';
import InstructionsIcon from '../../../assets/images/cart_instructions.svg';
import CartSelectedAddress from './CartSelectedAddress';
import {connect} from 'react-redux';
import AddressListModal from './AddressListModal';
import {getCart} from '../Api';
import {selectStore} from '../../home/HomeActions';

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
    store_id,
  } = cart;
  useEffect(() => {
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

  return (
    <SafeArea>
      <Header title={Strings.confirmOrder} type={1} />
      <FlatList
        data={product_list ? Object.values(product_list) : []}
        renderItem={({item, index}) => (
          <View style={styles.itemContainer}>
            <SearchItemTile item={item} />
          </View>
        )}
        keyExtractor={(item, index) => `cartItem${index}`}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.listItemSeperator} />}
        ListHeaderComponent={
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
        }
        ListFooterComponent={
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

            <View style={styles.container}>
              <Text style={styles.grayHeading}>{Strings.paymentDetails}</Text>
              <View style={[styles.borderedContainer, styles.detailsContainer]}>
                <Text style={styles.detailsText}>
                  {Strings.youSaved} {Strings.currency}{' '}
                  {third_party_delivery_fee - delivery_fee} {Strings.onThisBill}
                </Text>
              </View>

              {/* Sub total */}
              <View style={[styles.rowContainer, styles.priceContainer]}>
                <Text style={styles.priceLabel}>{Strings.subTotal}</Text>
                <Text style={styles.amount}>
                  {Strings.currency} {total_cost_price}
                </Text>
              </View>

              <View style={styles.priceSeperator} />

              {/* Delivery Charge */}
              <View style={[styles.rowContainer, styles.priceContainer]}>
                <Text style={styles.priceLabel}>{Strings.deliveryCharge}</Text>
                <View style={styles.rowContainer}>
                  <Text style={[styles.amount, styles.slicedAmount]}>
                    {Strings.currency} {third_party_delivery_fee}
                  </Text>
                  <Text style={styles.amount}>
                    {Strings.currency} {delivery_fee}
                  </Text>
                </View>
              </View>

              <View style={styles.priceSeperator} />

              {/* Grand Total */}
              <View style={[styles.rowContainer, styles.priceContainer]}>
                <Text style={styles.grandTotalLabel}>{Strings.grandTotal}</Text>
                <Text style={styles.grandTotalAmount}>
                  {Strings.currency} {total_cost_price + delivery_fee}
                </Text>
              </View>
            </View>
          </View>
        }
      />

      <CartSelectedAddress
        addAddress={() => {
          setAddressModal(true);
        }}
        location={location}
      />
      <AddressListModal
        visible={addressModal}
        setVisible={setAddressModal}
        setLocation={setLocation}
        location={location}
      />
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
